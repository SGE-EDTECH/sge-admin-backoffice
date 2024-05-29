import React from 'react';



const Layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <div>
      <div>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;