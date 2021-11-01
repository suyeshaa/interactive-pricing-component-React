import React, { useState } from "react";

const Main = () => {
  const data = [
    [8, 6],
    [12, 9],
    [16, 12],
    [24, 18],
    [36, 27],
  ];

  const [active, setActive] = useState(false);
  const [val, setVal] = useState(0);
  const [count, setCount] = useState("10K PAGEVIEWS");
  const [price, setPrice] = useState("8");

  const change = (val, tf) => {
    let amt;
    tf ? (amt = 1) : (amt = 0);
    if (val <= 20) {
      setCount("10K PAGEVIEWS");
      setPrice(`${data[0][amt]}`);
    } else if (val <= 40) {
      setCount("50K PAGEVIEWS");
      setPrice(`${data[1][amt]}`);
    } else if (val <= 60) {
      setCount("100K PAGEVIEWS");
      setPrice(`${data[2][amt]}`);
    } else if (val <= 80) {
      setCount("500K PAGEVIEWS");
      setPrice(`${data[3][amt]}`);
    } else if (val <= 100) {
      setCount("1M PAGEVIEWS");
      setPrice(`${data[4][amt]}`);
    }
    console.log(amt, active);
  };

  const toggleClickHandler = () => {
    setActive((prev) => {
      change(val, !prev);
      return !prev;
    });
  };

  const sliderChangeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    change(e.target.value, active);
  };

  return (
    <div className="main">
      <div className="contain">
        <div className="part1">{count}</div>
        <div className="part2">
          <div className="div1">
            $<span>{price}.00</span>
          </div>
          <div className="div2">/month</div>
        </div>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value={val}
          className="range_slider"
          onChange={sliderChangeHandler}
          style={{
            backgroundImage: `linear-gradient(90deg,hsl(174, 77%, 80%), ${val}% , hsl(224, 65%, 95%) 0)`,
          }}
        />
      </div>

      <div className="btm">
        <div className="one">Monthly Billing</div>
        <div
          className={`toggle_btn ${active ? "active" : undefined}`}
          onClick={toggleClickHandler}
        >
          <div className="inner_circle"></div>
        </div>
        <div className="two">Yearly Billing</div>
        <div className="three">
          -25% <span>discount</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
