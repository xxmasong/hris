
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Main } from '@/components/pages';
import mainTheme from '@/styles/themes';

function App() {
  return (
    <ThemeProvider theme={createTheme(mainTheme)} >
      <CssBaseline />
      <BrowserRouter> 
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
