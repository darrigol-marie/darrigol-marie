import { screen } from '@testing-library/react';

export function expectPropToBeRenderedForEachComponent<
	T extends { [key: string]: any }
>(prop: keyof T, componentsData: T[]) {
	for (let i = 0; i < componentsData.length; i++) {
		expect(screen.getByText(componentsData[i][prop])).toBeInTheDocument();
	}
}
