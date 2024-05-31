import React, { ReactNode } from 'react';
import Navbar from '../components/instructionsComponent/navigation/navbar';
import Footer from '../components/instructionsComponent/navigation/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
