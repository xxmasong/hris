import { Redirect, Route, Switch } from 'react-router-dom';
import configuredAsyncComponentLoader from '@/utils/loader';
import PageTemplate from '@/components/templates/PageTemplate';
import useOptions from '@/hooks/useOptions';
import SearchTemplate from '@/components/templates/SearchTemplate';
import MainTemplate from '@/components/molecules/main/MainTemplate';

const HomePage = configuredAsyncComponentLoader(
  () => import('@/components/pages/HomePage'), 
  { fallback: <MainTemplate><></></MainTemplate> }
);
const CategoryPage = configuredAsyncComponentLoader(
  () => import('@/components/pages/CategoryPage'), 
  { fallback: <MainTemplate><></></MainTemplate>  }
);
const ArticlePage = configuredAsyncComponentLoader(
  () => import('@/components/pages/ArticlePage'), 
  { fallback: <PageTemplate /> }
);
const SearchPage = configuredAsyncComponentLoader(
  () => import('@/components/pages/SearchPage'), 
  {fallback: <SearchTemplate><></></SearchTemplate>}
);
const NotFound = configuredAsyncComponentLoader(
  () => import('@/components/pages/NotFound'), 
  { fallback: <PageTemplate />} 
);

function PageRouter() {
  const {categories} = useOptions();
  const categoryRoutes = categories?.map(({name}) => name).join("|");

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path={`/category/:category(top|${categoryRoutes})`} component={CategoryPage} exact />
      <Route path={`/category/*`} render={() => <Redirect to="/category/top" />}/>
      <Route path="/article/:urlTitle" component={ArticlePage} />
      <Route path={`/article/*`} render={() => <Redirect to="/" />}/>
      <Route path="/search" component={SearchPage} />
      <Route path={`/search/*`} render={() => <Redirect to="/search" />}/>
      <Route path={`/*`} render={() => <Redirect to="/" />}/>
      <Route component={NotFound} path="*" />
    </Switch>
  );
}

export default PageRouter;
