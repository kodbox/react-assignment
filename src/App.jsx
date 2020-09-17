import React, { useState, useEffect } from 'react'
import Book from './Book'
import './App.css'

function App() {
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch(
			'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=Ju5hygJnXA5WKxCUvDNqYwsSjpvfCZQf'
		)
			.then(res => res.json())
			.then(
				result => {
					setIsLoaded(true)
					setItems(result.results)
				},
				error => {
					setIsLoaded(true)
					setError(error)
				}
			)
	}, [])

	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoaded) {
		return <div>Loading data...</div>
	} else {
		return (
			<>
				<h1>List of best-selling books by New York Times</h1>
				<ul>
					{items.map((item, index) => (
						<Book
							key={index + 1}
							title={item.title}
							author={item.author}
							description={item.description}
							publisher={item.publisher}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default App
