import React, { useState, useEffect } from "react";
import api from "../../axios/config"; //importa a api

/**
 * vídeo referencia: https://www.youtube.com/watch?v=NbhoeLj6lBs
 * 
 * get -- retorna todas
 * get/${id} --retorna com o ID
 * 
 * redefinir senha (GET)
 * identifier - email
 * string - senha
 * 
 * cadastro (POST)
 * 
 * usuario (GET)
 * 
 * login (GET)
 */





function Regras() {


//GET API
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    try{
      const response = await api.get("/posts");
      const data = response.data;
      setUsers(data);
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

//POST API
const [name, setName] = useState()
const [email, setEmail] = useState()
const [date, setDate] = useState()
const [password, setPassword] = useState()

const createUser = async (event) => {
  event.preventDefault();
  const user = {name, email, userId: 1};
  await api.post("/posts", {
    body: user,
  })
}
return (
    <div>
{/* GET API RETURN */}
{/* <h1>Usuários</h1>
<br />
{users.length === 0 ? <p>Carregando...</p> : (
  users.map((user) => (
    <div className="user" key={user.id}>
      <h2>{user.title}</h2>
      <p>{user.title}</p>
    </div>
  ))
)} */}

{/* POST API RETURN */}
<h1>Inserir</h1>
<form onSubmit={(event) => createUser(event)}>
  <div>
    {/**htmlFor indica qual input está se referindo */}
    <label htmlFor="title">Título:</label>
    <input type="text" name="title" id="title" placeholder="Digite o título" onChange={(event) => setName(event.target.value)} />
  </div>
  <div>
    <label htmlFor="body">Conteúdo:</label>
    <textarea name="body" id="body" placeholder="Digite o conteúdo" onChange={(event) => setEmail(event.target.value)} ></textarea>
  </div>
  <input type="submit"  value="criar usuário" />
</form>
    </div>
  );
}

export default Regras;