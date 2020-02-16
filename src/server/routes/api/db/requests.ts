import axios from "axios";

export const askUserAlreadyExists = async (username: string): Promise<boolean> => {
    const res = await axios.post(`http://localhost:${process.env.PORT}/api/db/exists`, {
        type: "username",
        name: username
    });
    return res.data;
}

