import React, { useState } from "react";

function Add({ showAddView }) {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  // Category-image mapping
  const categoryImages = {
    "Pocket Knives": [
      "pocketKnife.png",
      "fanghornPocketKnife.png",
      "wispPocketKnife.png",
    ],
    Daggers: ["tolkienDagger.png", "kunaiDagger.png"],
    Swords: ["heleldrSword.png", "seaxSword.png", "katanaSword.png"],
    Resin: [
      "mapleLeafResin.png",
      "redwoodResin.png",
      "oceanResin.png",
      "buckeyeResin.png",
    ],
    Jewelry: ["mjolnirJewelry.png"],
    Custom: ["custom.png"],
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const [productId, setProductId] = useState(1); // or whatever starting number you like

  function addProduct(e) {
    //e.preventDefault();

    const newProduct = {
      ...product,
    };

    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  const handleNestedChange = (e) => {
    setProduct({
      ...product,
      rating: {
        ...product.rating,
        [e.target.name]: Number(e.target.value),
      },
    });
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Only return the form if showAddView is true
  return showAddView ? (
    <form onSubmit={addProduct}>
      <input
        name="title"
        value={product.title}
        onChange={handleChange}
        placeholder="Product Title"
        className="input"
      />
      <input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Product Price"
        className="input"
      />
      <input
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        className="input"
      />
      <label>Category</label>
      <select
        name="category"
        id="category"
        onChange={handleCategoryChange}
        className="select"
      >
        <option value="">--Select Category--</option>
        <option value="Pocket Knives">Pocket Knives</option>
        <option value="Daggers">Daggers</option>
        <option value="Swords">Swords</option>
        <option value="Resin">Resin</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Custom">Custom</option>
      </select>

      <label>Image</label>
      <select name="image" required onChange={handleChange} className="select">
        <option value="">Select an image</option>
        {selectedCategory &&
          categoryImages[selectedCategory].map((image) => (
            <option key={image} value={image}>
              {image}
            </option>
          ))}
      </select>

      <input
        name="rate"
        type="number"
        value={product.rating.rate}
        onChange={handleNestedChange}
        placeholder="Rating Rate"
        className="input"
      />
      <input
        name="count"
        type="number"
        value={product.rating.count}
        onChange={handleNestedChange}
        placeholder="Rating Count"
        className="input"
      />
      <button type="submit">Add Product</button>
    </form>
  ) : null;
}

export default Add;
