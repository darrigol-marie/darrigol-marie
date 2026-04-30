interface Props {
	title: string;
}

function Post({ title }: Props) {
	return <h1>{title}</h1>;
}

export default Post;
