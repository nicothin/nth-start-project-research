import Link from 'next/link';

const checkActiveChild = (childs, path) => {
  let result = false;
  for (let item of childs) {
    if (item?.path === path) {
      result = true;
      break;
    }

    if (Array.isArray(item.childs)) {
      result = checkActiveChild(item.childs, path);
    }
  }
  return result;
};

/**
 * Рекурсивная генерация JSX пунктов главного меню
 * @param {array} navigation [ { id: 2, text: 'Items', className: '', path: '/items', childs: [...] }, ... ]
 * @param {string} path актуальный путь для выявления активных пунктов
 * @returns пункты
 */
export const getMenuItems = (navigation, path) => {
  return navigation.map((navItem) => {
    if (Array.isArray(navItem.childs)) {
      const content = navItem.content || (
        <Link href={navItem.path} className="main-nav__link">{navItem.text}</Link>
      );
      const hasActiveChild = checkActiveChild(navItem.childs, path);
      const subItems = getMenuItems(navItem.childs, path);
      return (
        <li
          key={navItem.id}
          className={`
            main-nav__item
            main-nav__item--has-sublist
            ${navItem.path === path || hasActiveChild ? 'main-nav__item--active' : ''}
            ${navItem.className || ''}
          `}
        >
          <div className="main-nav__item-inner">{content}</div>
          <ul className="main-nav__sublist">
            {subItems}
          </ul>
        </li>
      );
    }

    const content = navItem.content || (
      <Link href={navItem.path} className="main-nav__link">{navItem.text}</Link>
    );
    return (
      <li
        key={navItem.id}
        className={`
          main-nav__item
          ${navItem.path === path ? 'main-nav__item--active' : ''}
          ${navItem.className || ''}
        `}
      >
        <div className="main-nav__item-inner">{content}</div>
      </li>
    );
  });
};
