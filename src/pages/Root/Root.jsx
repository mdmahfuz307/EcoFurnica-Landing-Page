import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer.jsx';
import Home from '../pages/Home';

const Root = () => {
    return (
      <div>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default Root;
