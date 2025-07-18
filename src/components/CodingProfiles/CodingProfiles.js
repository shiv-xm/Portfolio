import React from "react";
import "./CodingProfileCSS.css";

const CodingProfilesSection = () => {
  const codingProfiles = [
    {
      link: "https://leetcode.com/u/_shvam/",
      icon: "https://cdn-1.webcatalog.io/catalog/leetcode/leetcode-social-preview.png?v=1714774949349",
    },
    {
      link: "https://codeforces.com/profile/_shvam11",
      icon: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-social-preview.png?v=1714773964567",
    },

    {
      link: "https://atcoder.jp/users/shvam",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOKfQMWgupGFJsJbrlHLt3oea4hmgg6Qq-g&s",
    },
  ];

  return (
    <div id="Coding-profiles" className="coding-profiles-section">
      <h2>
        <i className="fa-solid fa-code"></i> My Programming Profiles
      </h2>
      <div className="coding-profiles-container">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-link"
          >
            <img
              draggable="false"
              src={profile.icon}
              alt={`${profile.platform} icon`}
              className="coding-profile-icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfilesSection;
