import { useLocation } from 'react-router-dom';
import { themedPalette } from '@/styles/themes';
import media from '@/styles/media';
import { Stack } from '@mui/system';

function HeaderTab() {
  const categoryMatch = location.pathname.match(/^\/category\/(.*)$/);
  const isArticle = /^\/article\/(.*)$/.test(location.pathname);
  const isSearch = /^\/search/.test(location.pathname);
  const isSettings = /^\/account/.test(location.pathname);
  const isCategory = !!categoryMatch;
  const category = isCategory ? categoryMatch[1] : "";

  if (isArticle || isSettings || isSearch) 
    return null;
    
  return (
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between"> 
        <CategoryWrapper>
          <TabItem exact to={"/"}>
           Headlines
          </TabItem>
          <TabItem exact to={"/category/top"}>
            Top News
          </TabItem>      
          <Indicator />
        </CategoryWrapper>   
      </Stack>
  );
}

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
  ${media.xsmall} {
    width: 100%;
  }
`;

const TabItem = styled(PlainNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 3rem;
  color: ${themedPalette.text2};
  text-decoration: none;
  transition: 0.25s color ease-in-out;
  font-weight: 600;
  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  &.active {
    color: ${themedPalette.primary2};
  }
  ${media.small} {
    flex: 1;
    font-size: 1rem;
    height: 2.5rem;
  }
`;

const Indicator = styled(animated.div)`
  width: 50%;
  height: 2px;
  background: ${themedPalette.primary2};
  position: absolute;
  bottom: -2px;
  transition: 0.25s left ease-in-out;
  ${media.small} {
    width: 50%;
  }
`;

export default HeaderTab;
