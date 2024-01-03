import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const firstBook = {
	author: 'James Clear',
	title: 'Atomic Habits: the life-changing million-copy',
	img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
	author: 'Julie Smith',
	title: 'Why Has Nobody Told Me This Before?',
	img: 'https://m.media-amazon.com/images/I/61vdz+IbbKL._SY466_.jpg',
}

const thirdBook = {
	author: 'Richard Osman',
	title: 'The Last Devil To Die: The Thursday Murder Club 4',
	img: 'https://m.media-amazon.com/images/I/71Ja+kWW-DL._SY425_.jpg',
}

const BookList = () => {
	return (
		<section className="booklist">
			<Book
				author={firstBook.author}
				title={firstBook.title}
				img={firstBook.img}
			>
				<p>
					Transform your life with changes in behaviour, starting now. People
					think that when you want to change your life, you need to think big.
					But world-renowned habits expert James Clear has discovered another
					way. He knows that real change comes from the compound effect of
					hundreds of small decisions: doing two push-ups a day, waking up five
					minutes early, or holding a single short phone call.
				</p>
				<button>Click Me</button>
			</Book>

			<Book
				author={secondBook.author}
				title={secondBook.title}
				img={secondBook.img}
			>
				<p>
					Give your mind the one thing it needs in 2024 with the book everyone
					is STILL talking about, from clinical psychologist and TikTok
					sensation Dr Julie Smith.
				</p>
				<button>Click Me</button>
			</Book>
			<Book
				author={thirdBook.author}
				title={thirdBook.title}
				img={thirdBook.img}
			>
				<p>
					The fourth novel in the record-breaking, million-copy bestselling
					thursday murder club series. Shocking news reaches the Thursday Murder
					Club.
				</p>
				<button>Click Me</button>
			</Book>
		</section>
	)
}

const Book = ({ img, title, author, children }) => {
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author.toUpperCase()}</h4>
			{children}
		</article>
	)
}
// above is preference for props. more dynamic.

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
