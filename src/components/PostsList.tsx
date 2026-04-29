import './PostsList.scss';

import Post from './Post';
import { PostItem } from '../types/post.type';

interface Props {
	posts: PostItem[];
}

function PostsList({ posts }: Props) {
	return (
		<>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</>
	);
}

export default PostsList;
