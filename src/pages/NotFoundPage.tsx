import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

function NotFoundPage() {
	return (
		<>
			<Header title="Erreur 404" />
			<div id="page">
				<article>La page que vous cherchez n'existe pas ou a été déplacée.</article>
				<NavLink to="/">Retour à l'accueil</NavLink>
			</div>
		</>
	);
}

export default NotFoundPage;
