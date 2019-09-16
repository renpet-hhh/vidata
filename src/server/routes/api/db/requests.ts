import axios from "axios";

export const askUserAlreadyExists = async (username: string): Promise<boolean> => {
    const res = await axios.post("http://localhost:9228/api/db/exists", {
        type: "username",
        name: username
    });
    return res.data;
}

