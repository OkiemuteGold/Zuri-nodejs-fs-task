const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch');

const jsonPlaceholderUrl = "http://jsonplaceholder.typicode.com/posts";
let settings = { method: "Get" };

fetch(jsonPlaceholderUrl, settings)
    .then(res => res.json())
    .then((data, err) => {
        if (err) throw err;

        const postsPath = path.join(__dirname, "posts.json");
        fs.writeFile(postsPath, JSON.stringify(data, null, 2), function () {
            console.log(data);
        });
    });
