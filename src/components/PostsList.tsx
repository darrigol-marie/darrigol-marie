import './PostsList.scss';

export interface Post {
	id: string;
	title: string;
	text: string;
	date?: string;
	subtitle?: string;
}

interface Props {
	posts: Post[];
}

function PostsList({ posts }: Props) {
	return (
		<>
			{posts.length === 0 && <p>Aucun élément à afficher.</p>}
			{posts.map((post) => (
				<article key={post.id} className="post">
					<header>
						{post.date && <time>{post.date}</time>}
						<h2>{post.title}</h2>
						{post.subtitle && <p role="doc-subtitle">{post.subtitle}</p>}
					</header>
					<p>{post.text}</p>
				</article>
			))}
		</>
	);
}

export default PostsList;
