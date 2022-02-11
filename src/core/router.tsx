import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@page/Main';
import Detail from '@page/Detail';
import Post from '@page/Post';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail/*" element={<Detail />}>
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
