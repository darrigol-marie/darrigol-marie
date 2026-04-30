import './Post.scss';

import { type PostItem } from '../types/post.type';

interface Props {
	post: PostItem;
}

function Post({ post }: Props) {
	const { id, title, date, subtitle, paragraphs, link } = post;

	return (
		<article key={id} className="post">
			<header className="post-header">
				<time>{date}</time>
				<h2>{title}</h2>
				{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			</header>
			<section className="post-content">
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</section>
			<section className="post-link">
				{link && (
					<a href={link.source} target="_blank" rel="noreferrer">
						{link.text}
					</a>
				)}
			</section>
		</article>
	);
}

export default Post;
