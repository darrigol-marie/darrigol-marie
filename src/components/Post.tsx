interface Props {
	title: string;
	date: string;
	paragraphs: string[];
	subtitle?: string;
}

function Post({ title, date, subtitle, paragraphs }: Props) {
	return (
		<>
			<h1>{title}</h1>
			<time>{date}</time>
			{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			{paragraphs.map((paragraph) => (
				<p>{paragraph}</p>
			))}
		</>
	);
}

export default Post;
