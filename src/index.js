import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const firstBook = {
	author: 'James Clear',
	title: 'Atomic Habits: the life-changing million-copy',
	img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
}

const author = 'James Clear'
const title = 'Atomic Habits: the life-changing million-copy'
const img =
	'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg'

const BookList = () => {
	return (
		<section className="booklist">
			<Book author={author} title={title} img={img} />
			<Book author={author} title={title} img={img} />
			<Book />
			<Book />
		</section>
	)
}

const Book = (props) => {
	return (
		<article className="book">
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<h4>{props.author.toUpperCase()}</h4>
		</article>
	)
}

const firstBook = {
	author: 'James Clear',
	title: 'Atomic Habits',
	img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
	author: 'Julie Smith',
	title: 'Why Has Nobody Told Me This Before?',
	img: 'https://m.media-amazon.com/images/I/61vdz+IbbKL._SY466_.jpg',
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
