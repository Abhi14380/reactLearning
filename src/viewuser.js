import React, { useState } from "react";

function ViewUser() {
  const [userData, setUserData] = useState(null); // State to store user data

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const userId = formJson.search;

    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
        method: 'GET',
        headers: {
          'app-id': '639172c734f59a65dd76d340',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setUserData(result); // Store the fetched user data in state
      console.log(result.email);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <label>
          Search User by ID: <input name="search" />
        </label>
        <br />
        <button type="submit">Search</button>
        <hr />
      </form>

      {userData && ( 
        <div key={userData.id}>
          <h2>{userData.id}</h2>
          <h2>{userData.email}</h2>
          <h2>{userData.firstName}</h2>
          <h2>{userData.lastName}</h2>
          <img src={userData.picture} alt="Logo" />
          <br />
          <hr />
        </div>
      )}
    </div>
  );
}

export default ViewUser;
