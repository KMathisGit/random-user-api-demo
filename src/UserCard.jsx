import React from "react";
import "./UserCard.scss";
import linkedinLogo from "../images/linkedin_logo.png";
import githubLogo from "../images/github_logo.png";

const formatPhone = (phone) => `${phone.substr(0, 5)} ${phone.substr(6)}`;

export default function UserCard({ user }) {
  const fullName = `${user.name.first} ${user.name.last}`;
  user.phone = formatPhone(user.phone);
  user.cell = formatPhone(user.cell);

  return (
    <div className="user-card">
      <div className="top-section">
        <img
          className="profile-pic"
          src={user.picture.large}
          alt="user image"
        />
        <div className="personal-info">
          <p className="name">
            <label>Name</label>
            {fullName}
          </p>
          <p className="email">
            <label>Email</label>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <div className="phone-section">
            <p className="phone">
              <label>Primary Phone</label>
              <a href={`tel:+${user.phone}`}>{user.phone}</a>
            </p>
            <p className="cell">
              <label>Cell Phone</label>
              <a href={`tel:+${user.cell}`}>{user.cell}</a>
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
              <img id="linkedin-logo" src={linkedinLogo} alt="linkedin logo" />
            </a>
            <a href="https://www.github.com" target="_blank" title="GitHub">
              <img id="github-logo" src={githubLogo} alt="github logo" />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="quote">{user.quote.quote}</p>
      <p className="author">- {user.quote.author}</p>
    </div>
  );
}
