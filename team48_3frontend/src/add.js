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
  
  const [productId, setProductId] = useState(1); // or whatever starting number you like

  function addProduct(e) {
    e.preventDefault();
  
    const newProduct = {
      ...product
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
      />
      <input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <input
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <input
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Product Category"
      />
      <input
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Product Image URL"
      />
      <input
        name="rate"
        type="number"
        value={product.rating.rate}
        onChange={handleNestedChange}
        placeholder="Rating Rate"
      />
      <input
        name="count"
        type="number"
        value={product.rating.count}
        onChange={handleNestedChange}
        placeholder="Rating Count"
      />
      <button type="submit">Add Product</button>
    </form>
  ) : null;
}

export default Add;
