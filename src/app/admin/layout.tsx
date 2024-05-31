import "./globals.css";
import React from 'react';
import SidebarF from '@/components/common/sidebar';



const AdminLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex h-screen w-full bg-gray-100">
          <SidebarF />
          <div className="flex flex-col w-full h-full ml-64 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default AdminLayout;
