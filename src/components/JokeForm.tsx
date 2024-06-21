import React from 'react';
import './JokeForm.scss';

interface JokeFormProps {
  onAddJoke: (joke: { id: number; joke: string; rate: number }) => void;
  jokesCount: number;
}

const JokeForm: React.FC<JokeFormProps> = ({ onAddJoke, jokesCount }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jokeInput = e.currentTarget.elements.namedItem('joke') as HTMLInputElement;
    const newJoke = { id: jokesCount + 1, joke: jokeInput.value, rate: 0 };
    onAddJoke(newJoke);
    jokeInput.value = '';
  };

  return (
    <form className="joke-form" onSubmit={handleSubmit}>
      <input type="text" name="joke" placeholder="Add a joke" required />
      <button type="submit">Insert Joke</button>
    </form>
  );
};

export default JokeForm;
