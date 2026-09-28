const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "DevSecOps Task Manager is running"
    });
});

function add(a, b) {
    return a + b;
}

module.exports = { app, add };

if (require.main === module) {

    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });

}