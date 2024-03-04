import { render, waitFor } from '@testing-library/react';
import useCrud from './useCrud';

// Mock Firestore data (if necessary)
const mockFirestoreData = [
  { id: '1', title: 'Article 1', text: 'Lorem ipsum 1' },
  { id: '2', title: 'Article 2', text: 'Lorem ipsum 2' },
  // Add more mock data as needed
];

// Mock Firebase configuration (if necessary)

describe('useCrud', () => {
  test('fetches data correctly', async () => {
    // Mock async function
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockFirestoreData,
    });

    let result;
    function TestComponent() {
      result = useCrud('infoContent');
      return null;
    }

    render(<TestComponent />);

    // Assert loading state
    expect(result.loading).toBe(true);

    // Wait for async operation to complete
    await waitFor(() => expect(result.loading).toBe(false));

    // Assert articles data
    expect(result.error).toBeNull();
    expect(result.data).toEqual(mockFirestoreData);

    // Clean up mock
    global.fetch.mockRestore();
  });
});
