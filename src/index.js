import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
	{
		author: 'Gene Kranz',
		title:
			'Failure is Not an Option: Mission Control from Mercury to Apollo 13 and beyond',
		img: 'https://m.media-amazon.com/images/I/91MSzpKOeiL._SY425_.jpg',
		id: 1,
	},

	{
		author: 'Annie-Sophie Baumann',
		title: 'The Ultimate Book of Space: 3',
		img: 'https://m.media-amazon.com/images/I/61HIaJNc+UL._SY425_.jpg',
		id: 2,
	},
	{
		author: 'Roger Wein',
		title:
			'Red Rover: Inside the Story of Robotic Space Exploration, from Genesis to the Mars Rover Curiosity',
		img: 'https://m.media-amazon.com/images/I/61VJvQk+D2L._SY425_.jpg',
		id: 3,
	},
	{
		author: 'Neil Degrasse Tyson',
		title: 'Cosmic Queries',
		img: 'https://m.media-amazon.com/images/I/51r46e2cZBL._SY445_SX342_.jpg',
		id: 4,
	},
	{
		author: 'The Future of Humanity',
		title:
			'Terraforming Mars, Interstellar Travel, Immortality, and Our Destiny Beyond Earth',
		img: 'https://m.media-amazon.com/images/I/81goZnqGdXL._SY425_.jpg',
		id: 5,
	},
	{
		author: 'Leonard David',
		title: 'Mission to Mars',
		img: 'https://m.media-amazon.com/images/I/41f44e2i92L._SY445_SX342_.jpg',
		id: 6,
	},
];

const BookList = () => {
	const theValue = 'shakeAndBake';
	const displayValue = () => {
		console.log(theValue);
	};
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} displayValue={displayValue} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author, displayValue } = props;
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<button onClick={displayValue}>click me</button>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};
// above is preference for props. more dynamic.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
