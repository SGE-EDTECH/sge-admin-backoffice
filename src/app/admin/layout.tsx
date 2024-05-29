import Sidebar from '@/components/common/sidebar/adminSidebar';
import styles from './layout.module.css';
import React from 'react';



const AdminLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Sidebar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;