import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {useHistory} from "react-router-dom";


import services from "../../utils/services";
import validator from "../../utils/validator";


import "./SignIn.css";

function SignIn() {
  // React States
  const history = useHistory();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  async function handleSubmit(e) {
    //e.preventDeFault();

    if(!validator.isEmail(form.email)){
      setErrors({
        ...errors,
        email: "Email is invalid",
      });
    } else {
      console.log("email is good");
    }

    if(!validator.isPassword(form.password)){
      setErrors({
        ...errors,
        password: "Password is invalid",
      });
    }

    if(!errors.email && !errors.password){
      const response = await services.postLogin(form.email, form.password);
    
      if(response.message){
        setForm({
          ...form,
          password: "",
        })

        setErrors({
          email: "",
          password: "",
          general: response.message.join(". "),
        });
      } else {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
      
        console.log("a");
        history.push("/");
        //window.location.reload();
        // history.push(`/?name=${response.name}`);
      }
    
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-50 border p-4">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
  
          <Button variant="primary" type="submit" style={{ backgroundColor: 'red' }}>
            Submit
          </Button>
        </Form>
  
        {errors.general && (
          <Form.Text style={{ color: "red" }}>{errors.general}</Form.Text>
        )}
      </div>
    </Container>
  );
  
}

export default SignIn;