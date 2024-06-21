import React from 'react';
import { Joke } from './../types/allTypes';
import './JokeItem.scss';

interface JokeItemProps {
  joke: Joke;
  onUpdateRate: (id: number, rate: number) => void;
  onDelete: (id: number) => void;
}

const JokeItem: React.FC<JokeItemProps> = ({ joke, onUpdateRate, onDelete }) => {
  return (
    <div className="joke-item">
      <div className="joke-text">{joke.joke}</div>
      <div className="joke-rating">Rating: {joke.rate}</div>
      <div className="joke-buttons">
        <button className="thumbs-up" onClick={() => onUpdateRate(joke.id, joke.rate + 1)}>👍</button>
        <button className="thumbs-down" onClick={() => onUpdateRate(joke.id, joke.rate - 1)}>👎</button>
        <button className="delete" onClick={() => onDelete(joke.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default JokeItem;
