import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';
import AddToList from './Components/AddToList';
import List from './Components/List';

export interface IState {
   people:
   { 
    name: string;
    url: string;
    age: number;
    note?: string;
  }[]
}
const App: React.FC = () => {
  const [people , setPeople] = useState<IState["people"]>([
    {
      name : "Virat Kohli",
      url : "https://www.gettyimages.in/photos/virat-kohli",
      age : 32,
      note : "Best Cricketer"
    }
  ])
  return (
    <div className="App">
      <h1>People Invited</h1>
      <List people = {people}/>
      <AddToList people ={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
