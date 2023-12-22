const express = require("express");
const cors = require("cors");
const axios = require("axios");

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "453a766d-7596-4fdc-b6b9-db1f649ce19d" } }
    );
    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(port, function () {
  console.log(`server running on port ${port}`);
});
