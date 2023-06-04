import { useEffect, useRef } from 'react';
import { SnackbarKey, useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
// NOTE: this is a workaround for a missing feature in notistack
// This will be removed once the new version of notistack is released
// But it works great for now :)
function Notifier() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications);
  const displayed = useRef<SnackbarKey[]>([]);

  function storeDisplayed(key: SnackbarKey) {
    displayed.current = [...displayed.current, key];
  }

  function removeDisplayed(key: SnackbarKey) {
    displayed.current = [...displayed.current.filter((_key) => key !== _key)];
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
}

export default Notifier;
