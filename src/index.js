import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
	return (
		<>
			<h1>My Top 6 Space Books</h1>
			<p>That I have actually read.</p>
			<section className="booklist">
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />;
				})}
			</section>
		</>
	);
};

// above is preference for props. more dynamic.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
