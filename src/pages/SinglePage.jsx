import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data));
	}, [id]);

	return (
		<div>
			{post && (
				<>
					<Link to='/posts'>Back to Blog page.</Link>
					<h1> {post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
		</div>
	);
};
