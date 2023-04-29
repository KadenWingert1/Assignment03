import React, { useState } from "react";

function Remove({
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
  const [productTitle, setProductTitle] = useState("");

  function deleteProduct(title) {
    console.log("Deleting product: " + title);
    fetch("http://localhost:4000/deleteProduct", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: productTitle,
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Error:" + err));
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteProduct(productTitle);
  };

  return (
    <>
      {isCrudBackVisable && showRemoveView && (
        <div>
          <h1>Delete a Product</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              placeholder="Product Title"
              required
              className="input"
            />
            <button type="submit">Delete Product</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Remove;
