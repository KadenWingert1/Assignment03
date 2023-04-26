import React, { useState } from "react";

function ShowAll({
  showAllView,
  setShowAllView,
  showAddView,
  setShowAddView,
  showRemoveView,
  setShowRemoveView,
  showUpdateView,
  setShowUpdateView,
  isCrudVisable,
  setIsCrudVisable,
  isCrudBackVisable,
  setCrudBackVisable,
  product,
  setProduct,
  viewer1,
  setViewer1,
  oneProduct,
  setOneProduct,
  viewer2,
  setViewer2,
}) {
  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  const showAllItems = product.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={30} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate: {el.rating.rate} and Count: {el.rating.count} <br />
    </div>
  ));

  const showOneItem = oneProduct.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={30} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: ${el.price} <br />
      Rate: {el.rating.rate} and Count: {el.rating.count} <br />
    </div>
  ));

  return (
    <>
     {isCrudBackVisable && showAllView && (
  <div className="viewAllProducts crud">
    <h1 className="catalogOfProducts">Catalog of Products </h1>
    <div className="show-all-row">
      <h1 className="showAllavailable">Show all available Products:</h1>
      <button className="show-all-btn" onClick={() => getAllProducts()}>Show All Users</button>
    </div>
    <hr></hr>
    {viewer1 && <div className="products">{showAllItems}</div>}
    <hr></hr>
    <div className="oneProductContainer">
      <h1 className="oneProduct">Show one Product by Id:</h1>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="ID"
          onChange={(e) => getOneProduct(e.target.value)}
        />
        <button className="show-one-btn" onClick={() => getOneProduct(document.getElementById("message").value)}>Show</button>

      {viewer2 && <div className="products">{showOneItem}</div>}
    </div>
    <hr></hr>
  </div>
)}
    </>
  );
}

export default ShowAll;
