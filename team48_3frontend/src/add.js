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
