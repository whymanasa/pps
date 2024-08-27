import React, { useState } from "react";
import otherBackground from "../assets/otherBackground.png";
import "../styles/Menu.css";
import { TattooList } from "../helpers/TattooList";
import { AccessoryList } from "../helpers/AccessoryList";
import { HairstyleList } from "../helpers/HairstyleList";
import MenuItem from "../components/MenuItem";


function Menu() {
  const [nameLink, setNameLink] = useState(TattooList);
  const setTattoos = () => setNameLink(TattooList);
  const setAccessories = () => setNameLink(AccessoryList);
  const setHairstyles = () => setNameLink(HairstyleList);

  return (
    <div className="menu" style={{ background: `url(${otherBackground})` }}>
      <div className="buttons">
        <button onClick={setTattoos}>Temp Tattoos</button>
        <button onClick={setAccessories}>Accessories</button>
        <button onClick={setHairstyles}>Hairstyles</button>
      </div>
      <div className="menuList">
        {nameLink.map((nameItem, key) => {
          return (
            <MenuItem
              key={key}
              name={nameItem.name}
              image={nameItem.image}
              price={nameItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
