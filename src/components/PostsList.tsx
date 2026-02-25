import './PostsList.scss';

import Post from './Post';
import { type PostProps } from '../types/post.type';

interface Props {
	posts: PostProps[];
}

function PostsList({ posts }: Props) {
	return (
		<>
			{posts.length === 0 && <p>Aucun élément à afficher.</p>}
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					date={post.date}
					subtitle={post.subtitle}
					paragraphs={post.paragraphs}
					link={post.link}
				/>
			))}
		</>
	);
}

export default PostsList;
