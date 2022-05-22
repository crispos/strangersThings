import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import UserForm from './components/UserForm';
import MakeNewPost from './components/MakeNewPost';
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import "../src/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<UserForm formType='login' />} />
        <Route path="/register" element={<UserForm formType='register' />} />
        <Route path="/posts/new" element={<MakeNewPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
