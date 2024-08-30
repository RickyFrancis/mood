import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute h-full border-r border-black/10 w-[200px] top-0 left-0">
        <nav className="flex flex-col">
          <a href="/dashboard" className="text-white p-4">
            Dashboard
          </a>
          <a href="/dashboard/journal" className="text-white p-4">
            Journal
          </a>
        </nav>
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">hello</header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
