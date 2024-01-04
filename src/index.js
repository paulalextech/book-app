import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
	{
		author: 'James Clear',
		title: 'Atomic Habits: the life-changing million-copy',
		img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
		id: 1,
	},

	{
		author: 'Julie Smith',
		title: 'Why Has Nobody Told Me This Before?',
		img: 'https://m.media-amazon.com/images/I/61vdz+IbbKL._SY466_.jpg',
		id: 2,
	},
	{
		author: 'Richard Osman',
		title: 'The Last Devil To Die: The Thursday Murder Club 4',
		img: 'https://m.media-amazon.com/images/I/71Ja+kWW-DL._SY425_.jpg',
		id: 3,
	},
	{
		author: 'GT Karber',
		title: 'Murdle:Solve 100 Devilishly Devious Murder Mystery Logic Puzzles ',
		img: 'https://m.media-amazon.com/images/I/71ImfTaemnL._SY425_.jpg',
		id: 4,
	},
	{
		author: 'Sassy Quotes Press',
		title:
			'Fuck It 2024 Planner: Funny Weekly Organizer with Over 100 Sweary Affirmations and Badass Quotations',
		img: 'https://m.media-amazon.com/images/I/61qxhMYr-CL._SY425_.jpg',
		id: 5,
	},
	{
		author: 'Rebecca Yarros',
		title: 'Fourth Wing',
		img: 'https://m.media-amazon.com/images/I/91xBRNN9AuL._SY425_.jpg',
		id: 6,
	},
];

const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				const { img, title, author, id } = book;
				return <Book img={img} title={title} author={author} key={id} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author } = props;
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};
// above is preference for props. more dynamic.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
