import axios from "axios";

export const askSaveAvatar = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return await axios.post(`http://localhost:${process.env.PORT}/api/db/avatar/save`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}