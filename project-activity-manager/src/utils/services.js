import axios from "axios";
/*
async function postLogin(email, password) {
    const options = {
      method: "POST",
      url: "http://localhost:3001/user/login",
      data: { email: email, password: password },
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      return {
        message: e.response.data.error,
      };
    }
}*/

async function postLogin(email, password) {
  const data = JSON.stringify({
    "email": email,
    "password": password
  });

  const options = {
    method: "POST",
    url: "http://localhost:3001/user/login",
    data: data,
    headers: {
      "Content-Type": "application/json"
    }
  };


  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    return {
      message: e.response.data.error,
    };
  }
}

async function postRegister(email, password) {
  const data = JSON.stringify({
    "email": email,
    "password": password
  });

  const options = {
    method: "POST",
    url: "http://localhost:3001/user/register",
    data: data,
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    return {
      message: e.response.data.error,
    };
  }
}


  export default {
    postLogin,
    postRegister,
  };