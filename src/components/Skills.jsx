import React, { useState } from "react";
import "../styles/Skills.css";
import { skillCategories, skillsSectionCopy } from "../data/skillsData";

function iconSrc(slug, hex) {
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}

function Skills() {
  const [brokenIcons, setBrokenIcons] = useState({});

  const markIconBroken = (key) => {
    setBrokenIcons((prev) => {
      if (prev[key]) return prev;
      return { ...prev, [key]: true };
    });
  };

  return (
    <div className="skills-page">
      <section
        id="skills"
        className="skills-intro"
        aria-labelledby="skills-page-title"
      >
        <h2 id="skills-page-title" className="skills-page-title">
          {skillsSectionCopy.title}
        </h2>
      </section>

      <div className="skills-cards-wrap">
        <div className="skills-cards-grid">
          {skillCategories.map((category, catIndex) => (
            <article
              key={category.sectionId}
              id={category.sectionId}
              className={`skill-card${
                category.cardClass === "green"
                  ? " skill-card--accent"
                  : ""
              }`}
            >
              <h3 className="skill-card-title">
                {category.title}
              </h3>

              <ul className="skill-name-grid" role="list">
                {category.skills.map((skill) => {
                  const rowKey = `${catIndex}-${skill.name}`;
                  const iconBroken = brokenIcons[rowKey];

                  return (
                    <li
                      key={rowKey}
                      className="skill-name-item"
                    >
                      <div className="skill-name-chip">
                        <span
                          className="skill-name-icon"
                          aria-hidden="true"
                        >
                          {!iconBroken ? (
                            <img
                              src={iconSrc(
                                skill.iconSlug,
                                skill.iconColor
                              )}
                              alt={`${skill.name} icon`}
                              width={22}
                              height={22}
                              loading="lazy"
                              decoding="async"
                              onError={() =>
                                markIconBroken(rowKey)
                              }
                            />
                          ) : (
                            <span className="skill-name-fallback">
                              {skill.name.slice(0, 1)}
                            </span>
                          )}
                        </span>

                        <span className="skill-name-text">
                          {skill.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;