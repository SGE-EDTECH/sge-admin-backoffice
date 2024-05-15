import React from 'react';

const AdminLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <div>
      <header>
        <h1>Admin Panel</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default AdminLayout;