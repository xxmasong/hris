import { Route, Switch } from 'react-router-dom';
import configuredAsyncComponentLoader from '@/utils/loader';
import PageTemplate from '@/components/templates/PageTemplate';

const NotFound = configuredAsyncComponentLoader(
  () => import('@/components/pages/NotFound'), 
  { fallback: <PageTemplate />} 
);

function PageRouter() {

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route component={NotFound} path="*" />
    </Switch>
  );
}

export default PageRouter;
