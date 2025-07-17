import { render } from '@testing-library/react';
import { type JSX } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export function renderWithRouter<T>(
	elementToRender: JSX.Element,
	dataToLoad: T[] = []
) {
	const initialRoute = {
		element: elementToRender,
		path: '/',
		hydrateFallbackElement: <></>,
		loader: () => dataToLoad,
	};
	const mockupRouter = createMemoryRouter([initialRoute], {
		initialEntries: [initialRoute.path],
		initialIndex: 1,
	});

	return render(<RouterProvider router={mockupRouter} />);
}
