import React from "react";
import style from "./join_team.module.scss";
import Button from "@/app/StyleComponents/Button/Button";
const JoinOurTeam = () => {
  return (
    <section className={`${style.join__wrapper} container`}>
      <h2>Join our team to be a part of our story</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button>Join Now</Button>
    </section>
  );
};

export default JoinOurTeam;
