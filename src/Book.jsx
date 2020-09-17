import React, { useState } from 'react'
import './App.css'

const Book = props => {
	const [showDetails, setShowDetails] = useState(false)

	const toggleModal = () => {
		setShowDetails(!showDetails)
		showDetails === true ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden')
	}

	return (
		<>
			<li>
				<div>
					<p>{props.title}</p>
					<p>{props.author}</p>
					<button onClick={() => toggleModal()}>Read more</button>
				</div>
			</li>
			{showDetails && (
				<div id='details'>
					<p>
						<b>Book title:</b> {props.title}
					</p>
					<p>
						<b>Autor:</b> {props.author}
					</p>
					<p>
						<b>Publisher:</b> {props.publisher || 'n/a'}
					</p>
					<p>
						<b>Synopsis:</b> {props.description || 'n/a'}
					</p>
					<button id='close' onClick={() => toggleModal()}>
						Go back to best-sellers list
					</button>
				</div>
			)}
		</>
	)
}

export default Book
