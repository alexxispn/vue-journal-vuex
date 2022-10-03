import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-journal-ebd49-default-rtdb.europe-west1.firebasedatabase.app"
});

export default journalApi;
