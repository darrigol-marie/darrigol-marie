import axios from 'axios';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import { rootRoute } from './App.routes.tsx';

axios.defaults.baseURL = import.meta.env.VITE_DATA_PATH;

const router = createHashRouter([rootRoute]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
