import React from 'react';

import { Button } from 'react-bootstrap';
import Styles from '../../utils/pageStyles';

const { li, button, titleAndAuthor, img, p } = Styles;

const ListItem = (params) => {
	return (
		<React.Fragment>
			{results ? (
				results.map((result) => (
					<div>
						<li key={result.bookId} style={li}>
							<Button style={button} href={result['previewLink']}>
								View
							</Button>
							<Button style={button} onClick={saveBook}>
								Save
							</Button>
							<h5 style={titleAndAuthor}>Title: {result['title']}</h5>
							<h6 style={titleAndAuthor}>Author: {result['authors']}</h6>
							<img
								className="pic"
								src={result.image ? result.image : NoImage}
								alt="Book Thumbnail"
								style={img}
							/>
							<p style={p}>{result['description']}</p>
						</li>
					</div>
				))
			) : (
				<h3>No Results</h3>
			)}
		</React.Fragment>
	);
};

export default ListItem;
