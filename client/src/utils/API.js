import axios from "axios";

export default {
    getTasks: function() {
        return axios.get("/api/tasks");
    },
    saveTask: function(taskData) {
        return axios.post("/api/tasks", taskData);
    },
    deleteTask: function(id) {
        return axios.delete("/api/tasks" + id);
    },
    emailTask: function(taskData) {
        return axios.post("/sendemail", taskData);
    },
    updateTask: function(id) {
        return axios.put("/api/tasks/" + id);
    }
};