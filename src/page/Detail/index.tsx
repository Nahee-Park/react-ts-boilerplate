import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';

function Detail() {
  return (
    <div>
      <h1>디테일 페이지</h1>
      <ul>
        <li>
          <Link to="1">1번</Link>
        </li>
        <li>
          <Link to="2">2번</Link>
        </li>
        <li>
          <Link to="3">3번</Link>
        </li>
        <li>
          <Link to="4">4번</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default Detail;
