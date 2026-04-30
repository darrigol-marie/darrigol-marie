import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

import Header from './components/Header';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header title="Erreur 404" />
		<div id="page">
			<article>La page que vous cherchez n'existe pas ou a été déplacée.</article>
			<a href="/">Retour à l'accueil</a>
		</div>
	</StrictMode>,
);
