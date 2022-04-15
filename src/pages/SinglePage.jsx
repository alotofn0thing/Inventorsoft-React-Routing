import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);

	const goBack = () => navigate(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data));
	}, [id]);

	return (
		<div>
			<button onClick={goBack}>Back to Blog page.</button>
			{post && (
				<>
					<h1> {post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
		</div>
	);
};
