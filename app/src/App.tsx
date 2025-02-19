import React from 'react';
import { ReactNotifications } from 'react-notifications-component'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PetList } from './components/Petlist';
import { Form } from './components/Form';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { ContactUs } from './components/Contacts';
// import { Filter } from './components/Filter';
// import { useLocation } from "react-router-dom";
import './App.css';
import 'react-notifications-component/dist/theme.css';

function App() {
  // const location = useLocation();
  return (
    <Router>
      <ReactNotifications />
      <div className="main bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/pets?status=all" />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App
