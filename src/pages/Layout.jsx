import Header from '@/components/header/Header.jsx';
import Sidebar from '@/components/sidebar/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className='flex'>
          <Sidebar />
          {children}
        </div>
      </main>
    </>
  );
};


export default Layout;
