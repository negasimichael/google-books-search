import axios from "axios";

export default {
    googleBooks: function(query) {
        console.log('Nick')
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },
    getBooks: function() {
        console.log('Nick')
        return axios.get("/api/books").then(result => result.data);
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id).then(result => result.data);
    },
    // delete the book given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    }
};
