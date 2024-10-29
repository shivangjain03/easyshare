import axios from "axios";

const SendEmail = (data) => axios.post('/api/send', data); // Pass data as an argument

export default {
    SendEmail
};
