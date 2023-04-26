import React, { useState } from "react";

function Update({
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
  const [productId, setProductId] = useState("");

  function getOneProduct() {
    console.log(productId);
    if (productId >= 1 && productId <= 20) {
      const dataArr = [];
      fetch("http://localhost:4000/" + productId)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", productId);
          console.log(data);
          dataArr.push(data);
          setOneProduct(dataArr);
        });
        if(!dataArr){
      setViewer2(false);
        }
        else{
          setViewer2(true);
        }
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

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
      {isCrudBackVisable && showUpdateView && (
        <div className="viewAllProducts crud">
          <div className="oneProductContainer">
            <h1 className="oneProduct">Show one Product by Id:</h1>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="ID"
              value={productId}
              onChange={handleProductIdChange}
            />
            <button className="show-one-btn" onClick={getOneProduct}>
              Show
            </button>

            {viewer2 && <div className="products">{showOneItem}</div>}
          </div>
          <hr></hr>
        </div>
      )}
    </>
  );
}

export default Update;
