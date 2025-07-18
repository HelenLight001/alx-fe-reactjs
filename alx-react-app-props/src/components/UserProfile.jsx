import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "2px solid rgb(54, 140, 197)",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        margin: "16px auto",
        textAlign: "center",
      }}
    >
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
