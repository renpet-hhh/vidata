import axios from "axios";

export const askSaveAvatar = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return await axios.post("http://localhost:9228/api/db/avatar/save", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}