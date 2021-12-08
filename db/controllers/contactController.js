const express = require("express");
const database = require("../database");
var cors = require("cors");
const app = express();
app.use(cors());

const getAllContacts = async (request, response, next) => {
  let result = await database.execute("SELECT * FROM contacts");
  console.log(result);
  return response.json(result[0]);
};

const create = async (request, response, next) => {
  const { name, email } = request.query;
  const result = await database.execute(
    `insert into contacts(name,email) VALUES("${name}","${email}")`
  );
  console.log(name, email);
  response.send(request.query);
};

const update = async (request, response, next) => {
  const { name, email, id } = request.query;
  const result = await database.execute(
    `update contacts set name = "${name}",email="${email}" where id = ${id}`
  );
  console.log(name, email, id);
  response.send(request.query);
};

const deleter = async (request, response, next) => {
  const { id } = request.query;
  const result = await database.execute(
    `DELETE FROM contacts WHERE id = ${id};`
  );
  console.log(id);
  response.send(request.query);
};

const getByName = async (request, response, next) => {
  response.send("get by id Name");
};
module.exports = { getAllContacts, create, getByName, update, deleter };
