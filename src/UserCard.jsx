import React from "react";
import "./UserCard.scss";

const formatPhone = (phone) => {
  return `(${phone.substring(0,3)}) ${phone.substring(4)}`;
}

export default function UserCard({ user }) {
  const fullName = `${user.name.first} ${user.name.last}`;
  

  return (
    <div className="user-card">
      <div className="top-section">
        <img src={user.picture.large} alt="user image" />
        <div class="personal-info">
          <p className="name">
            <label>Name</label>{fullName}</p>
          <p class="email"><label>Email</label>{user.email}</p>
          <div className="phone-section">
            <p class="phone"><label>Primary Phone</label>{formatPhone(user.phone)}</p>
            <p class="cell"><label>Cell Phone</label>{formatPhone(user.cell)}</p>
          </div>
          
        </div>
      </div>

      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis est dolores architecto amet rerum aperiam voluptatum molestiae quasi itaque, dolor nesciunt nisi obcaecati quaerat sint quidem eligendi ad eaque!</p>
    </div>
  );
}
