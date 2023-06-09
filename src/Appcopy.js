import userEvent from '@testing-library/user-event';
import React, { useState, useContext, createContext, useEffect } from 'react';
import './App.css';
import { Title } from './test';
import { sculptureList } from './data';
import HookCounter from './hookCounter';
import MouseTrack from './hookmouse';
import Component from './componetContext';
import { createPortal } from 'react-dom';
import axios from 'axios';

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

export const UserContext = React.createContext();

function App(props) {
  // const [show, setShow] = useState(false);
  // const [index, setIndex] = useState(0);
  // const [showMore, setShowMore] = useState(false);
  // const hasNext = index < sculptureList.length - 1;
  // let sculpture = sculptureList[index];


  // function handleClick() {
  //   if (show === true) {
  //     setShow(false)
  //   } else {
  //     setShow(true)
  //   }
  // }
  // function handleNextClick() {
  //   if (hasNext) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // }
  // const [state, setState] = useState({
  //   email: "",
  //   password: ""
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setState((prevProps) => ({
  //     ...prevProps,
  //     [name]: value
  //   }));
  // };
  const [selectedVegs, setSelectedVegs] = useState(['corn', 'tomato']);
  const [selectedFruits, setSelectedFruits] = useState(['corn', 'tomato']);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // console.log(new URLSearchParams(formData).toString());
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
    console.log([...formData.entries()]);
  };

  const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);


  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // return (
  //   <div>
  //     <MouseTrack />
  //     <img
  //       className="avatar"
  //       src="https://i.imgur.com/7vQD0fPs.jpg"
  //       alt="Gregorio Y. Zara"
  //     />
  //     <p>hello {props.name} </p>
  //     <Title title={props.name} handleClick={handleClick} />
  //     {show ? <Body /> : null}
  //     <ul>{listItems}</ul>
  //     <>
  //       <button onClick={handleNextClick}>
  //         Next
  //       </button>
  //       <h2>
  //         <i>{sculpture.name} </i>
  //         by {sculpture.artist}
  //       </h2>
  //       <h3>
  //         ({index + 1} of {sculptureList.length})
  //       </h3>

  //       <img
  //         src={sculpture.url}
  //         alt={sculpture.alt}
  //       />
  //     </>
  //     <form onSubmit={handleSubmit}>
  //       <div className="form-control">
  //         <label>Email</label>
  //         <input
  //           type="text"
  //           name="email"
  //           value={state.email}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div className="form-control">
  //         <label>Password</label>
  //         <input
  //           type="password"
  //           name="password"
  //           value={state.password}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div className="form-control">
  //         <label></label>
  //         <button type="submit">Login</button>
  //       </div>
  //     </form>
  //     <HookCounter />


  //     <UserContext.Provider value={'vishwas'} >
  //       <Component />
  //     </UserContext.Provider>
  //   </div>


  // );

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        pick your fav fruit:
        <select name="selected fruit" default="orange" onChange={e => {
          const options = [...e.target.selectedOptions];
          const values = options.map(option => option.value);
          setSelectedVegs(values);
        }}>
          <option value="apple">Apple</option>
          <option value="mango">Mango</option>
          <option value="orange">Orange</option>
          <option value="Banana">Banana</option>

        </select>
      </label>
      <br />
      <label>
        Pick all your favorite vegetables:
        <select
          name="selectedVegetables"
          multiple={true}
          defaultValue={['corn', 'tomato']}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>

      <br />
      <progress value={null} />
      <p>Your favorite vegetables: {selectedVegs.join(', ')}</p>
      <p>Your favorite fruit: {selectedVegs.join(', ')}</p>
      <button onClick={() => window.print()}>print</button>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
      <div>
        {data ? (
          <img src={data.message} alt="Logo" width={"100px"}/>
        ) : (
          'Loading...'
        )}

        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
      </div>
    </form>

  )

}

function MainComponent() {
  return <App name="John" />;
}

export default MainComponent;






