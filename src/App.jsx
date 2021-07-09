import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import { getRandomUsers } from "./api";
import { getRandomQuote } from "./quotes";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [userCards, setUserCards] = useState([]);

  const addUserCardRef = useCallback((ref) => {
    setUserCards((state) => [...state, ref]);
  }, []);

  const handleScroll = useCallback(
    (e) => {
      let section = Math.floor(
        window.scrollY / (document.body.clientHeight / 21)
      );
      debugger;
      userCards.forEach((c, i) => {
        if (section === i) c.classList.add("centered");
        else c.classList.remove("centered");
        // const { y: cardY } = c.getBoundingClientRect();
        // // if card is near center of view add 'centered' class
        // if (cardY < window.innerHeight * 0.5 && cardY > 100) {
        //   c.classList.contains("centered") ? null : c.classList.add("centered");
        // } else c.classList.remove("centered");
      });
    },
    [userCards]
  );

  useEffect(() => {
    getRandomUsers(20).then((users) => {
      users.forEach((u) => (u.quote = getRandomQuote()));
      return setUsers(users);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (userCards && userCards.length > 0) {
      userCards[0].classList.add("centered");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userCards]);

  return (
    <div className="App">
      <div className="users">
        {users.map((u, i) => (
          <UserCard
            key={u.login.uuid}
            user={u}
            addUserCardRef={addUserCardRef}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
