import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import PersonalCabinet from './components/PersonalCabinet.jsx';
import LoginForm from './components/LoginForm.jsx';
import News from './components/News.jsx'; 


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal" element={<PersonalCabinet />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </Router>
);

export default App;
