import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { useInput } from "./hooks";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [isExistMail, setIsExistMail] = useState(false);

  const inputEmail = useInput();
  const inputPassword = useInput();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const error = document.getElementById("error");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/bee_account")
        .then((response) => response.json())
        .then((data) => {
          let messages = [];
          if (inputEmail.value === "" || inputEmail.value === null) {
            messages.push("Không được để trống email");
          }
          if (inputPassword.value.length < 8) {
            messages.push("Mật khẩu ít nhất từ 8 ký tự trở lên");
          }
          if (messages.length > 0) {
            error.innerText = messages.join(", ");
          }
          if (messages.length === 0) {
            for (let x of data) {
              if (x.email === inputEmail.value) {
                setIsExistMail(true);
                email.setAttribute("class", "is-valid form-control");
                if (x.password === inputPassword.value) {
                  password.setAttribute("class", "is-valid form-control");
                  window.location.href = "#";
                  localStorage.setItem(
                    "loginSucces",
                    JSON.stringify({ email: inputEmail.value, status: true })
                  );
                  break;
                } else {
                  password.removeAttribute("class", "is-valid form-control");
                  password.setAttribute("class", "is-invalid form-control");
                  error.innerText = "Mật khẩu không đúng, hãy thử lại";
                  break;
                }
              }
              if (isExistMail === false) {
                email.removeAttribute("class", "is-valid form-control");
                email.setAttribute("class", "is-invalid form-control");
                error.innerText = "Email chưa được đăng ký";
              }
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [
    inputEmail.value,
    inputPassword.value,
    email,
    password,
    error,
    isExistMail,
  ]);

  return (
    <div>
      <Form className="mt-5" onSubmit={handleSubmit} inline>
        <h2 style={{ color: "orange" }}>LOGIN</h2>
        <FormGroup floating>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={inputEmail.value}
            onChange={inputEmail.onChange}
          />
          <Label for="email">Email</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={inputPassword.value}
            onChange={inputPassword.onChange}
          />
          <Label for="password">Password</Label>
        </FormGroup>
        <FormText id="error" color="danger"></FormText>
        <br />
        <Button color="warning" type="submit">
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default Login;
