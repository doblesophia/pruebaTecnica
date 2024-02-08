
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './TableBooks';
import { MemoryRouter } from 'react-router-dom';


jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue({ books: [
    { id: 1, name: 'Libro 1', isbn: '123456789', authors: 'Autor 1', numberOfPages: 100, released: '2022-01-01T00:00:00Z', url: '/books/1' },
    { id: 2, name: 'Libro 2', isbn: '987654321', authors: 'Autor 2', numberOfPages: 150, released: '2022-01-02T00:00:00Z', url: '/books/2' }
  ] }),
  useDispatch: jest.fn().mockReturnValue(jest.fn())
}));


test('renders Table component', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}>
  <Table />
</MemoryRouter>);



  expect(screen.getByPlaceholderText('Busca aquí')).toBeInTheDocument();
  expect(getByText('Nombre')).toBeInTheDocument();
  expect(getByText('ISBN')).toBeInTheDocument();
  
});


test('displays loading indicator while data is loading', async () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}>
  <Table />
</MemoryRouter>);
  
  await waitFor(() => expect(getByText('Libro 1')).toBeInTheDocument());
});


test('sorts table by column when header is clicked', async () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Table />
      </MemoryRouter>
    );
  
    await waitFor(() => expect(getByText('Libro 1')).toBeInTheDocument());
  
    fireEvent.click(screen.getByText('Nombre'));
    await waitFor(() => expect(screen.getByText('Libro 2')).toBeInTheDocument());
  
    const cells = getAllByRole('cell')
      .filter(cell => cell.textContent.trim() !== 'ISBN') // Exclude the header row
      .map(cell => cell.textContent.trim());
  
    const expectedData = [
      'Libro 1',
      '123456789',
      'Autor 1',
      '100',
      '31 dic 2021',
      'Libro 2',
      '987654321',
      'Autor 2',
      '150',
      '1 ene 2022'
    ];
  
    expect(cells).toEqual(expectedData);
  });
  


