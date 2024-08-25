// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { LogoutBtn } from '../index';
import { Container } from '../Container/Container';

function Header() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  
  const navItems = [
    { name: 'Home', slug: "/" },
    { name: "Login", slug: "/login", show: !authStatus },
    { name: "Signup", slug: "/signup", show: !authStatus },
    { name: "Admin", slug: "/admin", show: authStatus },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto space-x-4'>
            {navItems.map((item) =>
              item.show ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
