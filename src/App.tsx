import './App.css';
import type { Page } from './types/page.type';

interface Props {
	pages: Page[];
}

function App({ pages }: Props) {
	return (
		<main>
			<h1>Accueil</h1>
			<nav>
				<ul>
					{pages.map((page) => {
						return (
							<li>
								<a>{page.name}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</main>
	);
}

export default App;
