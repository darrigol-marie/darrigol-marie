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
import { http } from 'msw';

import LoadingScreen from '../../src/components/LoadingScreen';

describe('LoadingScreen', () => {
	const queryOptions: UseQueryOptions = {
		queryKey: ['loading'],
		queryFn: () => http.get('/loading', async () => []),
	};

	function renderComponent() {
		return render(<LoadingScreen query={queryOptions} />, {
			wrapper: ({ children }) => {
				return (
					<QueryClientProvider client={new QueryClient()}>
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

		await waitForElementToBeRemoved(screen.getByText(/chargement/i));
	});
});
