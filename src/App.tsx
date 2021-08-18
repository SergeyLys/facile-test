import React, {useState, ChangeEvent} from 'react';
import { Input} from "./components";
import {ListContainer} from "./containers/ListContainer";
import './App.css';

function App() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="app-holder">
      <div className="app-header">
        <Input placeholder="Search by author or ISBN" onChange={handleFilter}/>
      </div>
      <ListContainer filterValue={filterValue} />
    </div>
  );
}

export default App;
