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
  setViewer2
}) {
  const [productId, setProductId] = useState("");

  const handleRemoveProduct = () => {
    fetch(`http://localhost:4000/remove/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`Product ${productId} removed`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      {isCrudBackVisable && showRemoveView && (
        <>
          <div>
            <h3>Remove a product:</h3>
            <input
              type="text"
              placeholder="Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleRemoveProduct}>Remove Product</button>
          </div>
        </>
      )}
    </>
  );
}

export default Remove;
