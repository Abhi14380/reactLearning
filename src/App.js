import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import './App.css';

const user = {
  name: 'Abhimanyu Sharma',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
function Title(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Welcome {props.title}</button>
    </div>
  );
}
function Body() {
  return (<div>
    <h1>Hello {user.name}</h1>
  </div>)
}
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function App(props) {
  const [show, setShow] = useState(false);
  function handleClick() {
    if (show === true) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <div>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <p>hello {props.name} </p>
      <Title title={props.name} handleClick={handleClick} />
      {show ? <Body /> : null}
      <ul>{listItems}</ul>
    </div>
  );
}

function MainComponent() {
  return <App name="John" />;
}

export default MainComponent;






