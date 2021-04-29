import axios from "axios";

export const requestApi = {
    postRequest(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}