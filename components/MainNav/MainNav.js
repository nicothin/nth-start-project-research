import { useState } from 'react';
import { useRouter } from 'next/router';

import { getMenuItems } from './mainMenu.helpers';

// Стилевой файл импортируется в диспетчере стилей

const navigation = [
  { id: 1, text: 'Home', path: '/', className: 'nano-class', },
  { id: 2, text: 'Posts', path: '/posts', },
  { id: 3, text: 'Contacts', path: '/contacts', },
  { id: 4, content: (<>Произвольный пункт 4</>) },
];

const MainNav = () => {
  const { asPath } = useRouter();
  const [isShowMobile, setIsShowMobile] = useState(false);
  const menuItems = getMenuItems(navigation, asPath);

  return (
    <nav className="main-nav">
      <span onClick={() => setIsShowMobile(!isShowMobile)}>
        {isShowMobile ? 'Hide' : 'Show'} menu
      </span>
      <ul className={[
        'main-nav__list',
        isShowMobile ? 'main-nav__list--show-mobile' : ''
      ].join(' ')}>
        {menuItems}
      </ul>
    </nav>
  );
};

export default MainNav;
