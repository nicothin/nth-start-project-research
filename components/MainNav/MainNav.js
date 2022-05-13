import { useRouter } from 'next/router';

import { getMenuItems } from './mainMenu.helpers';

// Стилевой файл импортируется в диспетчере стилей

const navigation = [
  { id: 1, text: 'Home', path: '/', className: 'nano-class', },
  { id: 2, text: 'Items', path: '/items', childs: [
    { id: 11, text: 'Item 1', path: '/items/1', className: 'mega-class', },
    { id: 12, text: 'Item 2', path: '/items/2', },
    { id: 13, text: 'Item 3', path: '/items/3', },
  ], },
  { id: 3, text: 'Contacts', path: '/contacts', },
  { id: 4, content: (<>Произвольный пункт 4</>) },
];

const MainNav = () => {
  const { asPath } = useRouter();
  const menuItems = getMenuItems(navigation, asPath);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {menuItems}
      </ul>
    </nav>
  );
};

export default MainNav;
