import { Joke } from './../types/allTypes';

type Action =
  | { type: 'ADD_JOKE'; joke: Joke }
  | { type: 'UPDATE_RATE'; id: number; rate: number }
  | { type: 'DELETE_JOKE'; id: number };

export const jokesReducer = (state: Joke[], action: Action): Joke[] => {
  switch (action.type) {
    case 'ADD_JOKE':
      return [...state, action.joke];
    case 'UPDATE_RATE':
      return state.map(joke =>
        joke.id === action.id ? { ...joke, rate: action.rate } : joke
      );
    case 'DELETE_JOKE':
      return state.filter(joke => joke.id !== action.id);
    default:
      return state;
  }
};
