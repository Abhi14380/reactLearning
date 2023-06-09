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
import CreateUser from './createform';
import AllUser from './allusers';
import ViewUser from './viewuser';
import "./TabComponent.css";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log([...formData.entries()]);
  };

  const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <AllUser />;
      case 1:
        return <ViewUser />;
      case 2:
        return <CreateUser />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-component">
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          All User
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Search User 
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Create User
        </div>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );

}


function MainComponent() {
  return <App name="John" />;
}

export default MainComponent;





const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson.email);

  const requestBody = {
    // Include the properties and values you want to pass in the request body
    // For example:
    email: formJson.email,
    // ...
  };

  try {
    const response = await fetch('https://dummyapi.io/data/v1/user/create', {
      method: 'POST',
      headers: {
        'app-id': '639172c734f59a65dd76d340',
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify(requestBody), // Convert the request body to JSON string
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};
