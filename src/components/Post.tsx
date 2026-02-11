import './Post.scss';

import { type PostProps } from '../types/post.type';

interface Props extends PostProps {}

function Post({ id, title, date, subtitle, paragraphs, link }: Props) {
	return (
		<article key={id} className="post">
			<header className="post-header">
				<time>{date}</time>
				<h2>{title}</h2>
				{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			</header>
			<section className="post-content">
				{paragraphs.map((paragraph) => (
					<p>{paragraph}</p>
				))}
			</section>
			<section className="post-link">
				{link && (
					<a href={link.source} target="_blank">
						{link.text}
					</a>
				)}
			</section>
		</article>
	);
}

export default Post;
