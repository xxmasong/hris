import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from "@mui/material";

import configuredAsyncComponentLoader from '@/utils/loader';

const Page = configuredAsyncComponentLoader(
  () => import('@/components/templates/sections/Page')
);

function Layout() {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </Fragment>
  );
}

export default Layout;
