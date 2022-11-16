import React from 'react';
import ReactDOM  from 'react-dom/client';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import Member from './components/Member';
import'./index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/member" element={<Member />} />
        </Routes>
        </BrowserRouter>
    </div>
);

