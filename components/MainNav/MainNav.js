import { useRouter } from 'next/router';
import Link from 'next/link';

// Стилевой файл импортируется в диспетчере стилей

const navigation = [
  { id: 1, text: 'Home', path: '/', },
  { id: 2, text: 'Items', path: '/items', children: [], },
  { id: 3, text: 'Contacts', path: '/contacts', },
];

const MainNav = () => {
  const { pathname } = useRouter();

  console.log('useRouter()', useRouter());

  // const getMenuItems = (department) => {
  //   if (Array.isArray(department)) { // случай (1)
  //     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  //   } else { // случай (2)
  //     let sum = 0;
  //     for (let subdep of Object.values(department)) {
  //       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
  //     }
  //     return sum;
  //   }
  // };

  // const menuItems = getMenuItems(navigation);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {/* {menuItems} */}
        <li>
          <Link href="/"><a className={`main-nav__link ${pathname === '/' ? 'main-nav__link-active' : ''}`}>Home</a></Link>
        </li>
        <li>
          <Link href="/items"><a className={`main-nav__link ${pathname === '/items' ? 'main-nav__link-active' : ''}`}>Items</a></Link>
        </li>
        <li>
          <Link href="/contacts"><a className={`main-nav__link ${pathname === '/contacts' ? 'main-nav__link-active' : ''}`}>Contacts</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
