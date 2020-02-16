import axios from "axios"

export const askSignin = async (username: string, password: string) => {
    return await axios.post(`http://localhost:${process.env.PORT}/api/db/session/signin`, { username, password });
}

export const askSignup = async (username: string, password: string, email: string) => {
    return await axios.post(`http://localhost:${process.env.PORT}/api/db/session/signup`, { username, password, email });
}

export const askLogout = async () => {
    return await axios.post(`http://localhost:${process.env.PORT}/api/db/session/logout`);
}