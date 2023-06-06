const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "Supernintendo6464",
      database: "trellodb",
    },
  });

  const registerUser = async (user) => {
    return await knex("users").insert({
      email: user.email,
      password: user.ecryptedPassword,
      salt: user.salt,
    });
  };

  const getCredentials = async (email) => {
    let credentials = await knex
    .select("password","salt")
    .from("users")
    .where("email", email);
    credentials = JSON.stringify(credentials);
    return JSON.parse(credentials);
  };

  module.exports = {
    registerUser,
    getCredentials,
  }