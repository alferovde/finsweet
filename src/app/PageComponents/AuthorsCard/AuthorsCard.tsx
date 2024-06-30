import React from "react";
import style from "./authorscard.module.scss";
import Image from "next/image";
import { AutorsType } from "@/app/Store/interfaces";
import SocialList from "../SocialList/SocialList";
const path = process.env.storage_path;
const AuthorsCard = ({ avatar, name, email }: AutorsType) => {
  return (
    <li className={style.authors_car}>
      <Image src={path + avatar} width={128} height={128} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
      <SocialList />
    </li>
  );
};

export default AuthorsCard;
