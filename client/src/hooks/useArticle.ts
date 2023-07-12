import { useCallback, useEffect, useState } from 'react';
import { articles as endpoint } from '@/services/NewsService';
import useNews from './useNews';

export default function useArticle(urlTitle?: string) {
  const {article, preFetchArticle} = useNews();
  const [loading, setLoading] = useState(false);
  const title = decodeURI(urlTitle || "");

  const onLoadArticle = useCallback(async () => {
    setLoading(true);
    const news = await endpoint({
      "qInTitle": title,
    });
    if (news?.status === 'success' && news.results.length >= 1) {
      preFetchArticle(news.results[0]);
    } else {
      preFetchArticle(null);
    }
    setLoading(false);
  }, [preFetchArticle, title]);

  useEffect(() => {
    if (!article || article?.title !== title) {
      onLoadArticle();
    } 
  }, [article, title]);

  return { article, loading };
}
