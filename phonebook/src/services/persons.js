import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}
const update = (person) => {
  return axios.put(`${baseUrl}/${person.id}`, person)
}

export default { 
  getAll: getAll, 
  create: create, 
  remove: remove, 
  update: update 
}