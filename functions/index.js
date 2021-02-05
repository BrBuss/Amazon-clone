const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HXOmuKZlUwyjOEkivYq6sBGxXbgXNprmspIYeAoDI1750vjl738mIn7brow6A0iXYWk5IZVlBDciwEArgz31mSz00sbO52Ply"
);
//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) => response.status(200).send("Hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment received >>>>>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //Ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-bss/us-central1/api
