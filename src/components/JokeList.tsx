import React from 'react';
import { Joke } from './../types/allTypes';
import JokeItem from './JokeItem';

interface JokeListProps {
  jokes: Joke[];
  onUpdateRate: (id: number, rate: number) => void;
  onDelete: (id: number) => void;
}

const JokeList: React.FC<JokeListProps> = ({ jokes, onUpdateRate, onDelete }) => {
  return (
    <div className="jokes">
      {jokes &&
        jokes
          .sort((a, b) => b.rate - a.rate)
          .map(joke => (
            <JokeItem
              key={joke.id}
              joke={joke}
              onUpdateRate={onUpdateRate}
              onDelete={onDelete}
            />
          ))}
    </div>
  );
};

export default JokeList;
