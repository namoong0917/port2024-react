import React from "react";

const skillText = [
  {
    title: "꿈을 설계하고 디자인하다.",
    desc: "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Aliquid est odio ex optio corporis nobis, sint minima rerum error nostrum quos! Reprehenderit nihil esse illo suscipit qui accusamus laborum dolore.",
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Aliquid est odio ex optio corporis nobis, sint minima rerum error nostrum quos! Reprehenderit nihil esse illo suscipit qui accusamus laborum dolore.",
  },
  {
    title: "나에게 정직하다.",
    desc: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Aliquid est odio ex optio corporis nobis, sint minima rerum error nostrum quos! Reprehenderit nihil esse illo suscipit qui accusamus laborum dolore.",
  },
];

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill_inner">
        <h2 className="skill_title">
          challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
