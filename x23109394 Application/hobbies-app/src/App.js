
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './pages/Home';
import { AuthProvider } from './components/Auth/AuthContext'; // Import the AuthProvider
import ProtectedRoute from './components/Auth/ProtectedRoute';

import './App.css';
import CountrySports from './pages/CountrySports';
import Navbar from './components/Navbar';
import Trivia from './pages/Trivia';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <AuthProvider>
        <Router>
      <div className="App">
        <Navbar /> {/* Navbar should be above and separate from Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />     
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/sports" element={<ProtectedRoute><CountrySports/></ProtectedRoute>} /> 
          <Route path="/trivia" element={<ProtectedRoute><Trivia/></ProtectedRoute>} /> 
          <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>} /> 
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>} /> 
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </div>
    </Router>
    </AuthProvider>
    
  );
}

export default App;

