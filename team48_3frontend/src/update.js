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
}) {
  return (
    <>
      {isCrudBackVisable && showUpdateView && (
        <>
          {console.log("SHOW UPDATE VIEW: ", showUpdateView)}
          <p>Test UPDATE view</p>
        </>
      )}
    </>
  );
}

export default Update;
