export const EXPENSES = [
  {
    id: 'e1',
    amount: 120.5,
    description: 'Groceries',
    date: new Date().toDateString(),
  },
  {
    id: 'e2',
    amount: 45.75,
    description: 'Coffee & Snacks',
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(),
  },
  {
    id: 'e3',
    amount: 78.3,
    description: 'Gas',
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toDateString(),
  },
  {
    id: 'e4',
    amount: 220.99,
    description: 'Electronics',
    date: new Date(new Date().setDate(new Date().getDate() - 5)).toDateString(),
  },
  {
    id: 'e5',
    amount: 60.25,
    description: 'Movie Night',
    date: new Date(new Date().setDate(new Date().getDate() - 7)).toDateString(),
  },
  {
    id: 'e6',
    amount: 33.4,
    description: 'Lunch',
    date: new Date(new Date().setDate(new Date().getDate() - 9)).toDateString(),
  },
  {
    id: 'e7',
    amount: 150.0,
    description: 'New Shoes',
    date: new Date(
      new Date().setDate(new Date().getDate() - 12)
    ).toDateString(),
  },
  {
    id: 'e8',
    amount: 85.1,
    description: 'Dinner',
    date: new Date(
      new Date().setDate(new Date().getDate() - 15)
    ).toDateString(),
  },
  {
    id: 'e9',
    amount: 99.99,
    description: 'Gadgets',
    date: new Date(
      new Date().setDate(new Date().getDate() - 20)
    ).toDateString(),
  },
  {
    id: 'e10',
    amount: 200.75,
    description: 'Furniture',
    date: new Date(
      new Date().setDate(new Date().getDate() - 25)
    ).toDateString(),
  },
];