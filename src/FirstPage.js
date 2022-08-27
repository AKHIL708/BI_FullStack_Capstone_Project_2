import React from "react";
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <>
      <div className="firstPageNavbar">
        <h1>Food Ordering Portal</h1>
      </div>
      <div className="img">
        <Link to={"/mainSection"}>
          <img
            className="pizzaImg"
            src="https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg"
            alt="pizza img"
          />{" "}
        </Link>
        <Link to={"/mainSection"}>
          {" "}
          <img
            className="pizzaImg"
            src="https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg"
            alt="pizza img"
          />{" "}
        </Link>
      </div>
    </>
  );
}
