import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App.tsx';
import { sitePages } from './types/page.type.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App pages={sitePages} />
	</StrictMode>
);
