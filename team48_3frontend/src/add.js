import React, { useState, useEffect } from "react";

function Add({ showAddView, isCrudBackVisable }) {
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [addNewProduct, setAddNewProduct] = useState({
    _id: null,
    title: "",
    price: null,
    description: "",
    category: "",
    image: "",
    rating: { rate: null, count: null },
  });

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: parseInt(Math.max(0, value)) });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: Math.max(0, value) });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: Math.max(0, value) },
      });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: Math.max(0, value) },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          alert(errorMessage.message);
        });
      });
  }

  return (
    <>
      {isCrudBackVisable && showAddView && (
        <div className="form">
          <h3 className="motto">Add a new product :</h3>
          <form>
            <label className="formCustomSize">ID</label>
            <input
              type="number"
              placeholder="id?"
              name="_id"
              value={addNewProduct._id}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <br />
            <label className="formCustomSize">Title</label>
            <input
              type="text"
              placeholder="title?"
              name="title"
              value={addNewProduct.title}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <br />
            <label className="formCustomSize">Price</label>
            <input
              type="number"
              placeholder="price?"
              name="price"
              value={addNewProduct.price}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <br />
            <label className="formCustomSize">Description</label>
            <input
              type="text"
              placeholder="description?"
              name="description"
              value={addNewProduct.description}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <br />
            <label className="formCustomSize">Category</label>
            <select
              name="category"
              id="category"
              onChange={handleCategoryChange}
              className="select px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">--Select Category--</option>
              <option value="Pocket Knives">Pocket Knives</option>
              <option value="Daggers">Daggers</option>
              <option value="Swords">Swords</option>
              <option value="Resin">Resin</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Custom">Custom</option>
            </select>
            <label className="formCustomSize">Image</label>
            <select
              name="image"
              required
              onChange={handleChange}
              className="select px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select an image</option>
              {selectedCategory &&
                categoryImages[selectedCategory].map((image) => (
                  <option key={image} value={image}>
                    {image}
                  </option>
                ))}
            </select>
            <br />
            <label className="formCustomSize">Rating</label>
            <input
              type="number"
              placeholder="rate?"
              name="rate"
              value={addNewProduct.rating.rate}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <br />
            <label className="formCustomSize">Count</label>
            <input
              type="number"
              placeholder="count?"
              name="count"
              value={addNewProduct.rating.count}
              onChange={handleChange}
              className="input px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              onClick={handleOnSubmit}
              className="removeProductButton"
            >
              submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Add;
