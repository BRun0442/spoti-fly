import axios from "axios"

const instance = axios.create({
  baseURL: "https://spotifly.cyclic.app"
})

export default instance