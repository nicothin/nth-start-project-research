import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

// Стилевой файл импортируется в диспетчере стилей

const Layout = ({ children }) => {
  return (
    <div className="layout">

      <div className="layout__header">
        <PageHeader />
      </div>

      <div className="layout__content">{children}</div>

      <div className="layout__footer">
        <PageFooter />
      </div>

    </div>
  );
};

export default Layout;
