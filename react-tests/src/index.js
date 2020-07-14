import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const starWarsChars = [
  {name: 'Dart Weider', side: 'dark'},
  {name: 'Luke Skywalker', side: 'light'},
  {name: 'Yoda', side: 'light'},
  {name: 'Palpatine', side: 'dark'},
  {name: 'Obi-Wan Kenobi', side: 'light'}
];

export const App = ({list}) => {
    return(
      <div>
        {list.map((char, index) => {
          return(
            <li key = {char.name + index}> <strong>{char.name}</strong> - {char.side}  </li>
          )
        })}
      </div>
    )
}

const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list = {filteredList}/>;
}

export const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list = {starWarsChars} side = "light"/>, document.getElementById('root'))
