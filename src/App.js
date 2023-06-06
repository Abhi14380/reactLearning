import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import './App.css';
import { Title } from './test';
import { sculptureList } from './data';

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
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  let sculpture = sculptureList[index];
  function handleClick() {
    if (show === true) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };


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
      <>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
    
        <img
          src={sculpture.url}
          alt={sculpture.alt}
        />
      </>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    
    
  );
}

function MainComponent() {
  return <App name="John" />;
}

export default MainComponent;






