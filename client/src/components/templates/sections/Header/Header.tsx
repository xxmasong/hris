import { Fragment } from 'react';
import HeaderDock from './HeaderDock';
import HeaderTab from './HeaderTab';

function Header() {

  return (
    <Fragment>
      <HeaderDock/>
      <HeaderTab/>
    </Fragment>
  );
}

export default Header;
