const url = "http://localhost:8080/shop";

export const loginUser = async (email, password) => {
  const response = await fetch(url + "/login", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" },
    body: JSON.stringify({email: email, password: password}),
  });

  console.log(response);

  if (response.ok) {
    return response.text();
  } else if (!response.ok) {
    throw new Error(await response.text());
  }
};

export const register = async (email, password) => {
  const response = await fetch(url + "/registration", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email: email, password: password}),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
};
