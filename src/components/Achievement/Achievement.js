import React from "react";
import "./AchievementCSS.css";

const Achievement = () => {
  const achievementsData = [
    {
      text: "Achieved a global rank of 200 out of 28,356 participants in LeetCode Weekly Contest 452.",
      link: "https://leetcode.com/contest/weekly-contest-452/ranking/?region=global_v2",
    },
    {
      text: "Solved 1,000+ DSA problems on LeetCode, Codeforces, and CodeChef.",
      link: "/",
    },
    {
      text: "LeetCode 1700+ maximum contest rating, top 10% globally.",
      link: "https://leetcode.com/u/_shvam/",
    },
    {
      text: "CodeChef 1475+ maximum contest rating.",
      link: "https://www.codechef.com/users/safe_zest_16",
    },
    {
      text: "Codeforces 1200+ maximum contest rating.",
      link: "https://codeforces.com/profile/_shvam11",
    },
  ];

  return (
    <>
      <div id="Achievement" className="achievements-section">
        <h2>
          <i className="fa-solid fa-medal section-icon"></i> Achievements
        </h2>
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <i className="fa-solid fa-award achievement-icon"></i>
              <p className="achievement-text">
                {achievement.text}
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  [Link]
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
