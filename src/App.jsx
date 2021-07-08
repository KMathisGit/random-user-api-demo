import React, { useState, useEffect } from "react";
import "./App.scss";
import { getRandomUsers } from "./api";
import { getRandomQuote } from "./quotes";
import UserCard from "./UserCard";

const _transformDefault = "transform: perspective(750px) rotateX(30deg)";

const handleScroll = (e) => {
  const userCards = Array.from(document.getElementsByClassName("user-card"));
  userCards.forEach((c) => {
    const { y: cardY } = c.getBoundingClientRect();
    if (cardY < window.innerHeight * 0.5 && cardY > 100) {
      c.style = `transform: perspective(0px) rotateX(0deg) scale(1.25); z-index: 2;`;
    } else {
      c.style = `${_transformDefault};`;
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
