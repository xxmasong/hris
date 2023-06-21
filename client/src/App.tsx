import { SnackbarProvider } from "notistack";
import { Grow } from "@mui/material";

import { notifications } from '@/config';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import AuthContextProvider from "@/providers/AuthContextProvider";
import ThemeProvider from '@/providers/ThemeProvider';
import configuredAsyncComponentLoader from '@/utils/loader';
import NewsContextProvider from "./providers/NewsContextProvider";
import OptionsContextProvider from "./providers/OptionsContextProvider";

const Layout = configuredAsyncComponentLoader(
  () => import('@/components/templates/Layout')
);

function App() {
  return (
    <ThemeProvider >
      <SnackbarProvider
        maxSnack={notifications.maxSnack}
        TransitionComponent={Grow}
        autoHideDuration={3000}
      >
        <AuthContextProvider>
          <NewsContextProvider>
            <OptionsContextProvider>
              <Layout />
            </OptionsContextProvider>
          </NewsContextProvider>
        </AuthContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
