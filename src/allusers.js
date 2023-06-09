import React, { useEffect, useState } from "react";

function AllUser() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyapi.io/data/v1/user?limit=1000', {
          method: 'GET',
          headers: {
            'app-id': '639172c734f59a65dd76d340',
          },
        });
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && data.data.map(person => (
        <div key={person.id}>
          <h2>{person.id}</h2>
          <h2>{person.email}</h2>
          <h2>{person.firstName}</h2>
          <h2>{person.lastName}</h2>
          <img src={person.picture} alt="Logo" />
          <br />
        <hr/>
        </div>
      ))}
    </div>
  );
}

export default AllUser;

