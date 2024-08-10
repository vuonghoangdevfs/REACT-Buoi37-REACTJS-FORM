
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './pages/Register';
import './assets/styles/index.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<RegistrationForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App