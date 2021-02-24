import React from 'react';
import NoImage from '../../assets/noImageVector.jpg';

import { Button } from 'react-bootstrap';
import Styles from '../../utils/pageStyles';

const { li, button, titleAndAuthor, img, p } = Styles;

const ListItem2 = ({ result, deleteBook }) => {
	return (
		<React.Fragment>
			<div>
				<li style={li}>
					<Button style={button} href={result['previewLink']}>
						View
					</Button>
					<Button style={button} onClick={deleteBook}>
						Delete
					</Button>
					<h5 style={titleAndAuthor}>Title: {result['title']}</h5>
					<h6 style={titleAndAuthor}>Author: {result['authors']}</h6>
					<img className="pic" src={result.image ? result.image : NoImage} alt="Book Thumbnail" style={img} />
					<p style={p}>{result['description']}</p>
				</li>
			</div>
		</React.Fragment>
	);
};

export default ListItem2;
