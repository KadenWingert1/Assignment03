import React, { useState, useEffect } from "react";

function Add({ showAddView, isCrudBackVisable }) {
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
      setAddNewProduct({ ...addNewProduct, _id: parseInt(Math.max(0,value)) });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: Math.max(0,value) });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({ ...addNewProduct, rating: { rate: Math.max(0,value) } });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: Math.max(0,value) },
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
        <>
          <div>
            <h3>Add a new product :</h3>
            <form>
              <input
                type="number"
                min="0"
                placeholder="id?"
                name="_id"
                value={addNewProduct._id}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="title?"
                name="title"
                value={addNewProduct.title}
                onChange={handleChange}
              />
              <input
                type="number"
                min="0"
                placeholder="price?"
                name="price"
                value={addNewProduct.price}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="description?"
                name="description"
                value={addNewProduct.description}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="category?"
                name="category"
                value={addNewProduct.category}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="image?"
                name="image"
                value={addNewProduct.image}
                onChange={handleChange}
              />
              <input
                type="number"
                min="0"
                placeholder="rate? (1-5)"
                name="rate"
                value={addNewProduct.rating.rate}
                onChange={handleChange}
              />
              <input
                type="number"
                min="0"
                placeholder="count?"
                name="count"
                value={addNewProduct.rating.count}
                onChange={handleChange}
              />
              <button type="submit" onClick={handleOnSubmit}>
                submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Add;
