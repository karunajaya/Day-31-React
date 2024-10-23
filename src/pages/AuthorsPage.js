// src/pages/AuthorsPage.js
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div>
      <h2>Manage Authors</h2>
      <AuthorForm initialValues={{ name: '', birthDate: null, biography: '' }} onSubmit={handleAddAuthor} />
      {/* Render list of authors with edit/delete functionality */}
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author.name} - {author.birthDate} - {author.biography}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsPage;

