import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "Java", color: "linear-gradient(135deg, #f89820, #e67e22)" },
    { name: "C", color: "linear-gradient(135deg, #283593, #1a237e)" },
    { name: "Python", color: "linear-gradient(135deg, #3776AB, #FFD43B)" },
    { name: "HTML", color: "linear-gradient(135deg, #E44D26, #F16529)" },
    { name: "CSS3", color: "linear-gradient(135deg, #264de4, #2965f1)" },
    { name: "JavaScript", color: "linear-gradient(135deg, #f7df1e, #f39c12)" },
    { name: "Three.js", color: "linear-gradient(135deg, #888888ff, #504f4fff)" },
    { name: "React.js", color: "linear-gradient(135deg, #61dafb, #007ACC)" },
    { name: "Node.js", color: "linear-gradient(135deg, #3c873a, #2e7d32)" },
    { name: "Express.js", color: "linear-gradient(135deg, #000000, #434343)" },
    { name: "SQL", color: "linear-gradient(135deg, #00758f, #003b57)" },
    { name: "MongoDB", color: "linear-gradient(135deg, #4DB33D, #2E7D32)" },
    { name: "Vercel", color: "linear-gradient(135deg, #1a1a1a, #414040ff)" },
    { name: "Render", color: "linear-gradient(135deg, #4f46e5, #3b82f6)" },
    { name: "Cloudinary", color: "linear-gradient(135deg, #3448c5, #4287f5)" },
    { name: "Git", color: "linear-gradient(135deg, #F1502F, #d84315)" },
    { name: "GitHub", color: "linear-gradient(135deg, #24292f, #000000)" },
    { name: "Excel", color: "linear-gradient(135deg, #06df6b94, #014503ff)" },
    { name: "Power Bi", color: "linear-gradient(135deg, #dae50694, #f9f50eff)" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        Skills <span className="highlight">I Known</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="skill-badge"
            style={{ background: skill.color }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;