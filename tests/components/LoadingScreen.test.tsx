import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import {
	QueryClient,
	QueryClientProvider,
	type UseQueryOptions,
} from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import LoadingScreen from '../../src/components/LoadingScreen';
import { server } from '../mocks/server';

describe('LoadingScreen', () => {
	const mockupPath = '/loading';
	const queryOptions: UseQueryOptions = {
		queryKey: ['loading'], // TODO: see if we can add a queryFn value without breaking the test
	};

	function renderComponent() {
		return render(<LoadingScreen query={queryOptions} />, {
			wrapper: ({ children }) => {
				return (
					<QueryClientProvider
						client={
							new QueryClient({ defaultOptions: { queries: { retry: false } } })
						}
					>
						{children}
					</QueryClientProvider>
				);
			},
		});
	}

	it('should display a message while data are loading', () => {
		renderComponent();

		expect(screen.getByText(/chargement/i)).toBeInTheDocument();
	});

	it('should remove the loading message once data are loaded', async () => {
		renderComponent();

		await waitForElementToBeRemoved(() => screen.getByText(/chargement/i));
	});

	it('should display a message if an error occured during data fetching', async () => {
		server.use(http.get(mockupPath, () => HttpResponse.error()));

		renderComponent();

		expect(await screen.findByText(/erreur/i)).toBeInTheDocument();
	});
});
