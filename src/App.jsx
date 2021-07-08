import React, { useState, useEffect } from "react";
import "./App.scss";
import { getRandomUsers } from "./api";
import { getRandomQuote } from "./quotes";
import UserCard from "./UserCard";

const _transformDefault = "transform: perspective(750px) rotateX(25deg)";

const handleScroll = (e) => {
  const userCards = Array.from(document.getElementsByClassName("user-card"));
  const approxCenter = window.innerHeight * 0.4;
  userCards.forEach((c) => {
    const cardY = c.getBoundingClientRect().y;
    //  check if in view, if so calc scale
    if (true) {
      let distanceFromCenter = Math.abs(approxCenter - cardY / 2);
      // in center region - use max scale
      if (distanceFromCenter < window.innerHeight * 0.3) {
        c.style = `${_transformDefault} scale(1.3); z-index: 2;`;
      }
      // else if (distanceFromCenter < window.innerHeight * 0.3) {
      //   c.style = `${_transformDefault} scale(1.45);`;
      // } else if (distanceFromCenter < window.innerHeight * 0.315) {
      //   c.style = `${_transformDefault} scale(1.3);`;
      // } else if (distanceFromCenter < window.innerHeight * 0.33) {
      //   c.style = `${_transformDefault} scale(1.15);`;
      // } else if (distanceFromCenter < window.innerHeight * 0.355) {
      //   c.style = `${_transformDefault} scale(1);`;
      // } else if (distanceFromCenter < window.innerHeight * 0.37) {
      //   c.style = `${_transformDefault} scale(0.9);`;
      // }
      else {
        c.style = `${_transformDefault};`;
      }
    }
  });
};

const handleWheel = () => {};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRandomUsers(20).then((users) => {
      users.forEach((u) => (u.quote = getRandomQuote()));
      return setUsers(users);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="users">
        {users.map((u, i) => (
          <UserCard key={u.login.uuid} user={u} />
        ))}
      </div>
    </div>
  );
}

export default App;
