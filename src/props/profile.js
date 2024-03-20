import React from "react";
import TextComponent from "./text-component";

function Profile() {
  const person = {
    name: "kiran",
    age: 23
  };

  return (
    <TextComponent>   data={person}</TextComponent>
  );
}

export default Profile;
