import { redirect, useNavigate } from "react-router-dom";

const url = "bebra";

export const loginUser = async (userInfo) => {
  const response = await fetch(url + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });

  if (response.ok) {
    return response.text;
  } else if (!response.ok) {
    throw new Error("Invalid credentials");
  }
};

export const register = async (userInfo) => {
  const response = await fetch(url + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });

  if (response.ok) {
    // useNavigate("/profile");
  } else if (!response.ok) {
    throw new Error("Something went wrong");
  }
};
