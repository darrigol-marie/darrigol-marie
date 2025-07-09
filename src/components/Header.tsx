import './Header.scss';

interface Props {
	title: string;
}

function Header({ title }: Props) {
	return <h1>{title}</h1>;
}

export default Header;
