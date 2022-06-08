import React from "react";

const index = () => {
  return (
    <div className="container">
      <Login />
      <Register />
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

export default index;
