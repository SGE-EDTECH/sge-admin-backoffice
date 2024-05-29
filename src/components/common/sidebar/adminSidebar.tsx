"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Adminsidebar.module.css';

const Sidebar = () => {
  const router = useRouter();
  const menuItems = [
    { name: 'Dashboards', path: '/admin' },
    { name: 'Cadastros', path: '/admin/cadastro' }
    ,
  ];

  const handleClick = (path:string) => {
    router.push(path);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Logo</h1>
      </div>
      <nav className={styles.menu}>
        {menuItems.map((item) => (
            <div key={item.path} className={`${styles.item}`}>
            <a onClick={() => handleClick(item.path)}>{item.name}</a>
          </div>
        ))}
      </nav>
      <div className={styles.footer}>
        <a href="#">Footer Link</a>
      </div>
    </div>
  );
};

export default Sidebar;
