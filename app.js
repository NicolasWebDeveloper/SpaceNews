const express = require("express");
const https = require("https");
const fs = require("fs");
const ejs = require("ejs");
const port = 3000;
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));






app.get("/", (req, res) => {
    res.render("index", {
        data: getData()
    });
});

app.get("/articles/:id", (req, res) => {
    let id = req.params.id;
    let data = getData();
    let found = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id != id) continue;
        found = true;
        res.render("article", {
            data: data[i]
        });
    }
    if (!found) res.send("Not found!");
});

app.listen(port, () => {
    console.log("Server started on Port " + port);
});

function apiCall() {
    const url = "";
    https.get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", (test) => {
            console.log(data);
            fs.writeFile("data.json", data, (error) => {
                if (error) console.log(error);
            });
        });

    });
}

function getData() {
    let data = fs.readFileSync("data.json", "utf-8");
    data = JSON.parse(data)
    return data;
}

setInterval(() => {
    apiCall();
}, 1000 * 60 * 60)
