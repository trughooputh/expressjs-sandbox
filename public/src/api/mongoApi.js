import axios from 'axios';  
import { ENV_API } from './../../../app/Config.js'
const ENV = "http://localhost:4000/api";

const api = {
    addTodo : (todo) => {
        return axios.post(`${ENV}/add`, todo);
    },
    getAllTodo: () => {
        return axios.get(`${ENV}/all`);
    },
    updateTodo: (id, todo) => {
        return axios.post(`${ENV}/update/${id}`, todo);
    },
    deleteTodo: (id) => {
        return axios.get(`${ENV}/delete/${id}`);
    }
}

export default api;