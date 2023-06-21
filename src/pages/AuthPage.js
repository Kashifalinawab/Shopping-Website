import React from "react";

function AuthPage(props) {
  const SignInHandler = () => {
    alert("SignIn Successfully ");
  };
  const SignUpHandler = () => {
    alert("SignUp Yourself ");
  };
  return (
    <div>
      <h1>Please Login Yourself </h1>
      <input type="text" placeholder="Email Id" />
      <input type="password" placeholder="Password" />
      <button onClick={SignInHandler}>SignIn</button>
      <button onClick={SignUpHandler}>SignUp</button>
    </div>
  );
}

export default AuthPage;
