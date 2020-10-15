import React, { useState } from "react";
import {
  Wrap,
  Title,
  Form,
  FormWrap,
  Input,
  Button,
  Error,
} from "./auth.style";

import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar/Navbar";

const Auth = () => {
  const { register, handleSubmit, errors } = useForm();
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("jwt-token", true);
    return setRedirect(true);
  };

  return (
    <Wrap>
      <Title>Войти</Title>
      <Form>
        {redirect && <Redirect to="/home" />}
        <FormWrap onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="email"
            placeholder="Введите email"
            ref={register({
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
              required: true,
            })}
          />
          {errors.email && <Error>Некорректный email адрес</Error>}

          <Input
            type="password"
            name="password"
            placeholder="Введите пароль"
            ref={register({ minLength: 6, required: true })}
          />
          {errors.password && <Error>Некорректный пароль</Error>}

          <Button type="submit">Войти</Button>
        </FormWrap>
      </Form>
    </Wrap>
  );
};

export default Auth;
