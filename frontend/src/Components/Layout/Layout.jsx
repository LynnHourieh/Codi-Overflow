import React from 'react'
import { Outlet } from 'react-router';
import StickyNav from './StickyNav'

function Layout() {
  return (
    <>
      <div>
        <StickyNav />
      </div>
      <div><Outlet/></div>
    </>
  );
}

export default Layout