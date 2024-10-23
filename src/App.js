import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import './App.css'; // Optional: Import your styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
