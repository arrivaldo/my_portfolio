import React from 'react';
import './Clients2.css';

const Client2 = () => {
  return (
    <>
      <h1
        className="p-title-clients text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]  mobileBig:text-[1.05rem]"
        style={{
          width: "100%",
          color: "#e3e3e3",
          marginBottom: "2%",
          marginTop: '5%',
          padding: '0 6%',
        }}
      >
        Awesome clients that weve helped
      </h1>

      <div className="wrapper">
  <div className="item item1 text-xl">Munich RE</div>
  <div className="item item2 text-xl">FEMSA</div>
  <div className="item item3 text-xl">CLARO 360</div>
  <div className="item item4 text-xl">MIRA</div>
  <div className="item item5 text-xl">Popular Bank</div>
  <div className="item item6 text-xl">Munich RE</div>
  <div className="item item7 text-xl">FEMSA</div>
  <div className="item item8 text-xl">CLARO 360</div>
  <div className="item item9 text-xl">MIRA</div>
  <div className="item item10 text-xl">Popular Bank</div>
</div>
    </>
  );
};

export default Client2;