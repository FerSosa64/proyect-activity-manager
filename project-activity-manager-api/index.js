const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { getBoards } = require("./services/boards");
const { getLists } = require("./services/lists");
const { getCards } = require("./services/cards");
const { updateCard } = require("./services/cards");
const { deleteCard } = require("./services/cards");
const { createCard } = require("./services/cards");


const { isEmail, isPassword } = require("./utils/validator");

app.use(bodyParser.json());

require('dotenv').config();
const cors = require('cors');

const userRouter = require('./routes/user.routes');

//utils
app.use(cors());

app.use("/user", userRouter);

/*
app.post("/login/", function (req, res) {
  // 0. TODO: middleware

  // 1. verificacion de los parametros (formato)
  if (isEmail(req.body.email)) {
    console.log("valido");
  } else {
    console.log("no es valido");
  }

  if (isPassword(req.body.password)) {
    console.log("password valido");
  } else {
    console.log("password no es valido");
  }

  // 2. TODO: ejecucion del procedimiento
  // 2.1 validacion en base de datos

  // 3. TODO: mandar una respuesta para cada escenario

  // 4. TODO: control de excepciones try catch
  res.send({
    success: true,
  });
});
*/
//Get boards
app.get("/users/:userId/boards", async function (req, res){
  const userId = req.params.userId;
  const boards = await getBoards(userId);
  console.log(boards);

  res.json(boards);
})

//Create
app.post("/users/:userId/boards/:boardId/lists", async function(req,res){
  const {name,description,list_id,position}=req.body;
  const newCard = await createCard(name,description,list_id,position);
  res.json(newCard);
})


//Read
app.get("/users/:userId/boards/:boardId/lists", async function (req, res){
  const boardId = req.params.boardId;
  const lists = await getLists(boardId);
  console.log(lists);

  let cards=[];

  for(let i = 0; i < lists.length; i++){
    const listId = lists[i].id;
    const listName = lists[i].name;
    const cardsInList = await getCards(listId);
    cards.push({listId: listId,listName: listName, cards: cardsInList});
  }

  res.json(cards);
});

//Update
app.put(
  "/users/:userId/boards/:boardId/lists/:listId/cards/:cardId",
  async function (req,res){
    const cardId = req.params.cardId;
    const {name,description,listId,position} = req.body;
    console.log(req.body);
    const result = await updateCard(
      cardId,
      name,
      description,
      listId,
      position
    );
    res.json(result);
  }
)

//Delete
app.delete("/users/:userId/boards/:boardId/lists/:listId/cards/:cardId",
  async function (req, res){
    const cardId = req.params.cardId;
    console.log(cardId);
    const result = await deleteCard(cardId);
    res.json(result);
  }
)

app.listen(3001);
