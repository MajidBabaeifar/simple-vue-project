import axios from "axios"

export class UserService {
    static getAllUsers() {
        let dataUrl = `https://jsonplaceholder.typicode.com/users`
        return axios.get(dataUrl)
    }
}