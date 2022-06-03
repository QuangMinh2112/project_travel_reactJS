import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { useInput } from "./hooks";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [isExistMail, setIsExistMail] = useState(false);

  const inputEmail = useInput();
  const inputPassword = useInput();
  const inputRepassword = useInput();
  //   const email = document.getElementById("email");
  //   const password = document.getElementById("password");
  //   const repassword = document.getElementById("re-password");
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
          if (inputRepassword.value !== inputPassword.value) {
            messages.push("Mật khẩu nhập lại không chính xác, hãy thử lại!");
          }
          if (messages.length > 0) {
            error.innerText = messages.join(", ");
          }
          if (messages.length === 0) {
            for (let x of data) {
              if (x.email === inputEmail.value) {
                setIsExistMail(true);
              }
              if (isExistMail === true) {
                messages.push("Email này đã được đăng ký, hãy thử email khác!");
              } else {
                fetch(
                  "https://62850afd3060bbd34743a536.mockapi.io/bee_account",
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: inputEmail.value,
                      password: inputPassword.value,
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    window.location.href = "#";
                  })
                  .catch((error) => console.log(error));
              }
            }
          }
        });
    };
    fetchData();
  }, [inputEmail.value]);

  return (
    <div>
      <Form className="mt-5" onSubmit={handleSubmit} inline>
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
        <FormGroup floating>
          <Input
            id="re-assword"
            type="password"
            placeholder="Re-password"
            value={inputRepassword.value}
            onChange={inputRepassword.onChange}
          />
          <Label for="password">Confirm Password</Label>
        </FormGroup>
        <FormText id="error" color="danger"></FormText>
        <br />
        <Button color="warning" type="submit">
          REGISTER
        </Button>
      </Form>
    </div>
  );
};

export default Register;
