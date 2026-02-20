const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "T-shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 3,
    name: "Watch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
  }
];

app.get("/", (req, res) => {
  res.send("My API is Running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});