import React, { useEffect, useState } from "react";
import InfoTour from "./components/Tour/InfoTour";
import Login from "./components/Tour/Login";
// import Register from "./components/Tour/Register";

const App = () => {
  //Phần code cho List Tour
  const [listTour, setListTour] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/tour_travel")
        .then((response) => response.json())
        .then((data) => {
          setListTour(data);
          // console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <Login />
      {/* <Register /> */}
      {listTour.map(
        ({
          id,
          name,
          image,
          adults_price,
          children_price,
          oldster_price,
          content,
        }) => {
          return (
            <InfoTour
              id={id}
              name={name}
              image={image}
              adults_price={adults_price}
              children_price={children_price}
              oldster_price={oldster_price}
              content={content}
            />
          );
        }
      )}
    </div>
  );
};

export default App;
