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
  return (
    <>
      {isCrudBackVisable && showRemoveView && (
        <>
          {console.log("SHOW REMOVE VIEW: ", showRemoveView)}
          <p>Test REMOVE view</p>
        </>
      )}
    </>
  );
}

export default Remove;
