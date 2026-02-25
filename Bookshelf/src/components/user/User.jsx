import { useState } from "react";
import { UserContainer, Image, UserWrapper } from "./User.styled";

export function User() {
  const [name] = useState("Aleea");
  const [image] = useState(`${import.meta.env.BASE_URL}Art Puzzle.jpg`);
  return (
    <>
      <UserWrapper>
        <UserContainer>
          {" "}
          <Image src={image} />
          {name}
          <svg width="20" height="8">
            <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-arrow`} />
          </svg>
        </UserContainer>
      </UserWrapper>
    </>
  );
}
