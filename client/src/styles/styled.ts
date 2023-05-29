import { Paper, Tab as MuiTab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const TitleBlock = styled(Box)({
  marginLeft: '0.4rem',
});

export const Title = styled(Typography)({

});

export const Navigation = styled(Tabs)({  
  padding: '0',
  marginTop: '1rem',
});

export const Tab = styled(MuiTab)({ 
  justifyContent: 'flex-end', 
  marginBottom: '0.3rem',
  padding: '0',
  minWidth: '5rem',
  textTransform: 'none',
});

export const HeaderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  paddingTop: '2rem',
  paddingBottom: '0.05rem',
});

export const FooterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3rem',
});

export const PaperLayoutWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const PaperLayout = styled(Paper)({
  width: '92%',
  height: '100vh',
  paddingLeft: '2rem',
});
