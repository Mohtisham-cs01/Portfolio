import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import FloatingActionBar from './FloatingActionBar';
import '../assets/FloatingActionBar.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
};

export default Layout;
