import React, { useState } from "react";

function Add({
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
      {isCrudBackVisable && showAddView && (
        <>
          {console.log("SHOW ADD VIEW: ", showAddView)}
          <p>Test ADD view</p>
        </>
      )}
    </>
  );
}

export default Add;
