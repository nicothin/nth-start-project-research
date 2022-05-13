import { useState } from 'react';
import Image from 'next/image';
import MainNav from '../MainNav/MainNav';

// Стилевой файл импортируется в диспетчере стилей

const PageHeader = () => {
  const [test, setTest] = useState(false);

  return (
    <header className="page-header">
      <Image className="logo1" src='/logo.png' width={24} height={24} alt='logo' />
      <img className="logo2" src='/logo.png' width={24} height={24} alt='logo' />
      <div>PageHeader</div>
      <MainNav />
      {test && <>ПОКАЗУХА</>}
      <button onClick={() => { setTest(!test) }}>click</button>
    </header>
  );
};

export default PageHeader;
