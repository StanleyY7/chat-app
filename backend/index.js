// Setting up the backend

const express = require("express"); // import express which runs our actual server, in http as for https requires ssl cert from a CA.

const cors = require("cors");

const app = express();
const axios = require("axios");

app.use(express.json());
app.use(cors({ origin: true })); // To avoid cors errors by allowing calls to this server from any origin.

// GET

app.get("/users", async (res) => {
  try {
    const r = await axios.get("https://api.chatengine.io/users/", {
      headers: { "PRIVATE-KEY": "1c959afc-9e19-4da5-b9c7-997e6cebb676" },
    });

    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// POST

app.post("/auth", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username },
      { headers: { "PRIVATE-KEY": "1c959afc-9e19-4da5-b9c7-997e6cebb676" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3000); // running the app on port 3000
