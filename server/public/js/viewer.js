(function($) {
    /**
     * Check if arg is either an array with at least 1 element, or a dict with at least 1 key
     * @return boolean
     */
    function isCollapsable(arg) {
        return arg instanceof Object && Object.keys(arg).length > 0;
    }

    /**
     * Transform a json object into html representation
     * @return string
     */
    function json2html(json, options) {
        var html = '';
        if (typeof json === 'string') {
            // Escape tags and quotes
            json = json
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/'/g, '&apos;')
                .replace(/"/g, '&quot;');
            // Escape double quotes in the rendered non-URL string.
            json = json.replace(/&quot;/g, '\\&quot;');
            html += '<span class="json-string">"' + json + '"</span>';
        } else if (typeof json === 'number') {
            html += '<span class="json-literal">' + json + '</span>';
        } else if (typeof json === 'boolean') {
            html += '<span class="json-literal">' + json + '</span>';
        } else if (json === null) {
            html += '<span class="json-literal">null</span>';
        } else if (json instanceof Array) {
            if (json.length > 0) {
                html += '[<ol class="json-array">';
                for (var i = 0; i < json.length; ++i) {
                    html += '<li>';
                    // Add toggle button if item is collapsable
                    if (isCollapsable(json[i])) {
                        html += '<a href class="json-toggle"></a>';
                    }
                    html += json2html(json[i], options);
                    // Add comma if item is not last
                    if (i < json.length - 1) {
                        html += ',';
                    }
                    html += '</li>';
                }
                html += '</ol>]';
            } else {
                html += '[]';
            }
        } else if (typeof json === 'object') {
            var keyCount = Object.keys(json).length;
            if (keyCount > 0) {
                html += '{<ul class="json-dict">';
                for (var key in json) {
                    if (Object.prototype.hasOwnProperty.call(json, key)) {
                        html += '<li>';
                        var keyRepr = options.withQuotes ?
                            '<span class="json-string">"' + key + '"</span>' : key;
                        // Add toggle button if item is collapsable
                        if (isCollapsable(json[key])) {
                            html += '<a href class="json-toggle">' + keyRepr + '</a>';
                        } else {
                            html += keyRepr;
                        }
                        html += ': ' + json2html(json[key], options);
                        // Add comma if item is not last
                        if (--keyCount > 0) {
                            html += ',';
                        }
                        html += '</li>';
                    }
                }
                html += '</ul>}';
            } else {
                html += '{}';
            }
        }
        return html;
    }

    /**
     * jQuery plugin method
     * @param json: a javascript object
     * @param options: an optional options hash
     */
    $.fn.jsonViewer = function(json, options) {
        // Merge user options with default options
        options = Object.assign({}, {
            collapsed: false,
            withQuotes: false,
        }, options);
        // jQuery chaining
        return this.each(function() {
            // Transform to HTML
            var html = json2html(json, options);
            // Insert HTML in target DOM element
            $(this).html(html);
            $(this).addClass('json-document');
            // Bind click on toggle buttons
            $(this).off('click');
            $(this).on('click', 'a.json-toggle', function() {
                var target = $(this).toggleClass('collapsed').siblings('ul.json-dict, ol.json-array');
                target.toggle();
                if (target.is(':visible')) {
                    target.siblings('.json-placeholder').remove();
                } else {
                    var count = target.children('li').length;
                    var placeholder = count + (count > 1 ? ' items' : ' item');
                    target.after('<a href class="json-placeholder">' + placeholder + '</a>');
                }
                return false;
            });
            // Simulate click on toggle button when placeholder is clicked
            $(this).on('click', 'a.json-placeholder', function() {
                $(this).siblings('a.json-toggle').click();
                return false;
            });
            if (options.collapsed == true) {
                // Trigger click to collapse all nodes
                $(this).find('a.json-toggle').click();
            }
        });
    };
})(jQuery);

$(function() {
    function renderJson() {
        try {
            var input = eval('(' + $('#json-input').val() + ')');
        } catch (error) {
            return alert("Cannot eval JSON: " + error);
        }
        var options = {
            collapsed: $('#collapsed').is(':checked'),
            withQuotes: $('#with-quotes').is(':checked'),
        };
        $('#json-renderer').jsonViewer(input, options);
    }
    $('p.options input[type=checkbox]').click(renderJson);
    renderJson();
});

$(document).ready(function () {
    function checkTxtArea() {
        if ($("#query-input").val() != '') {
            $('.button-execute').attr('disabled', false);
        } else {
            $('.button-execute').attr('disabled', true);
        }
    }
    $('textarea').on('keyup', function () {
        checkTxtArea();
    });
    checkTxtArea();
});
