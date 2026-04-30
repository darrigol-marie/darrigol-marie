export interface Post {
	title: string;
	text: string;
	date?: string;
}

interface Props {
	posts: Post[];
}

function PostsList({ posts }: Props) {
	return (
		<>
			{posts.length === 0 && <p>Aucun élément à afficher.</p>}
			{posts.map((post) => (
				<article>
					<header>
						<h2>{post.title}</h2>
						{post.date && <time>{post.date}</time>}
					</header>
					<p>{post.text}</p>
				</article>
			))}
		</>
	);
}

export default PostsList;
