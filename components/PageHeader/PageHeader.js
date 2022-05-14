import Image from 'next/image';
import MainNav from '../MainNav/MainNav';
import logo from '../../images/logo.png';

// Стилевой файл импортируется в диспетчере стилей

const PageHeader = () => {
  return (
    <header className="page-header">
      <Image className="logo" src={logo} width={24} height={24} alt="logo" />
      <div>PageHeader</div>
      <MainNav />
    </header>
  );
};

export default PageHeader;
