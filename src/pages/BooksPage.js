// src/pages/BooksPage.js
import React, { useState } from 'react';
import BookForm from '../components/BookForm';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: null }} onSubmit={handleAddBook} />
      {/* Render list of books with edit/delete functionality */}
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} - {book.author} - {book.isbn} - {book.publicationDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;

