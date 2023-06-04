import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from "@mui/material";

import SW from '@/components/templates/load/SW';
import Notifier from '@/components/templates/load/Notifier';
import Footer from '@/components/templates/sections/Footer';
import Header from '@/components/templates/sections/Header';
import Background from '@/components/templates/load/Background';
import configuredAsyncComponentLoader from '@/utils/loader';

const Page = configuredAsyncComponentLoader(
  () => import('@/components/templates/sections/Page')
);

function Layout() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifier />
      <SW />
      <BrowserRouter>
        <Background />
        <Header />
        <Page />
        <Footer /> 
      </BrowserRouter>
    </Fragment>
  );
}

export default Layout;
