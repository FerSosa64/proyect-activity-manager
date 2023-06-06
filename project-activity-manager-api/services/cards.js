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

  //CRUD
  //Create
  async function createCard(name, description, list_id, position){    
    const card = await knex("cards").insert({
        name,
        description,
        list_id,
        position,
    })
    return card;
  }

  //Read
  async function getCards(list_id) {
    const cards = await knex("cards").select("*").where("list_id", list_id);
    return cards;
  }

  //Update
  async function updateCard(cardId,name,description,listId,position){
    const result = await knex("cards")
    .where({id:cardId})
    .update({name, description, list_id: listId, position});
    return result;
  }

  //Delete
  async function deleteCard(id){
    await knex("cards").where("id",id).del();
  }

  module.exports = {
    createCard,
    getCards,
    deleteCard,
    updateCard,
  };