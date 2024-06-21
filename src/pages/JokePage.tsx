import React, { useReducer } from 'react';
import './joke.scss';
import JokesData from '../jokeData/jokes.json';
import { Joke } from './../types/allTypes';
import { jokesReducer } from '../reducers/jokesReducer';
import JokeForm from '../components/JokeForm';
import JokeList from '../components/JokeList';

const JokePage: React.FC = () => {
  const [jokes, dispatch] = useReducer(jokesReducer, JokesData);

  const addJoke = (joke: Joke) => {
    dispatch({ type: 'ADD_JOKE', joke });
  };

  const updateRate = (id: number, rate: number) => {
    dispatch({ type: 'UPDATE_RATE', id, rate });
  };

  const deleteJoke = (id: number) => {
    dispatch({ type: 'DELETE_JOKE', id });
  };

  return (
    <div className="container">
      <h2>Joke UseReducer App</h2>
      <JokeForm onAddJoke={addJoke} jokesCount={jokes.length} />
      <JokeList jokes={jokes} onUpdateRate={updateRate} onDelete={deleteJoke} />
    </div>
  );
};

export default JokePage;
