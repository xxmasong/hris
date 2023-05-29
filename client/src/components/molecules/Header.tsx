import { HeaderWrapper, Navigation, Tab, Title, TitleBlock } from '@/styles/styled';
import { Typography } from '@mui/material';

function Header() {
  return (
    <HeaderWrapper>
      <TitleBlock>
        <Title>Dashboard 1</Title>
      </TitleBlock>
      
      <Navigation value="">
        <Tab label="Overview" value="" />
      </Navigation>
    </HeaderWrapper>
  );
}


export default Header;
