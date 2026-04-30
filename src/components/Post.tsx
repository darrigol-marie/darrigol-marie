import { type PostProps } from '../types/post.type';

interface Props extends PostProps {}

function Post({ id, title, date, subtitle, paragraphs, link }: Props) {
	return (
		<article key={id} className="post">
			<header className="post-header">
				<h1>{title}</h1>
				<time>{date}</time>
				{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			</header>
			<section className="post-content">
				{paragraphs.map((paragraph) => (
					<p>{paragraph}</p>
				))}
				{link && <a href={link.source}>{link.text}</a>}
			</section>
		</article>
	);
}

export default Post;
