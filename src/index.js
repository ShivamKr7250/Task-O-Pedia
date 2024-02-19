import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css";
import Header from './Header';
import Student from './Student';
import Footer from './Footer';
import MainBody from './Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header/>
    <MainBody />
    <div className='row'>Students Enrolled</div>
    <Student experencie={4} name={"Shivam Kumar"} />
    <Student experencie={3} name={"Supriya Sharma"}/>
    <Student experencie={5} name={"Lisa Kumari"}/>
    <Footer/>
  </div>
);

