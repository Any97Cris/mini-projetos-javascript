const openModal = () => {
    document.getElementById('modal')
    .classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal')
    .classList.remove('active')
}

const tempClient = {
    nome: "Pidge Holt",
    email:'pidge@pidge.com',
    celular: '(92) 99635-7415',
    cidade: 'Terra'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

//CRUD - CREATE READ UPDATE DELETE

//CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

//CRUD - READ
const readClient = () => getLocalStorage();

//CRUD - UPDATE
const updateClient = (index,client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

//CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1);
    setLocalStorage(dbClient)
}


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)