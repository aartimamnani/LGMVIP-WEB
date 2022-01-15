import React, { useState } from "react";
import Loader from "./Loader";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const loadData = async () => {
    setIsLoader(true);
    setData([]);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonData = await response.json();
    console.log(jsonData["data"]);
    setTimeout(() => {
      setData(jsonData["data"]);
      setIsLoader(false);
    }, 2000);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h1>LGM-USERS</h1>
        </div>
        <div className="btn-container">
          <button onClick={loadData}>GET USERS</button>
        </div>
      </nav>

      <div className="main">
        {data.map(({ id, avatar, first_name, last_name, email }) => (
          <div className="card" key={id}>
            <div className="image">
              <img src={avatar} alt="" />
            </div>
            <div className="info">
              <h3 className="name">{first_name + " " + last_name}</h3>
              <h4 className="email">{email}</h4>
              <div className="number">
                <span className="card-num">{id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Loader show={isLoader} />
    </div>
  );
};

export default MainPage;