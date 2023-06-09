import React, { useState } from "react";
import "./CreateUser.css"; 

function CreateUser() {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const requestBody = {
      firstName: formJson.firstName,
      lastName: formJson.lastName,
      email: formJson.email,
      picture: formJson.picture, // Include picture in the requestBody
    };

    try {
      const response = await fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
          'app-id': '639172c734f59a65dd76d340',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSuccessMessage("User created successfully!"); 
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>} 
      <form method="post" onSubmit={handleSubmit}>
        <label>
          First Name: <input name="firstName" />
          <br />
          Last Name: <input name="lastName" />
          <br />
          Email: <input name="email" />
          <br />
          Picture: <input name="picture" /> 
        </label>
        <br />
        <button type="reset">Reset</button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
