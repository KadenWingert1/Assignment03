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
}) {
  return (
    <>
      {isCrudBackVisable && showAllView && (
        <>
          {console.log("SHOW ALL VIEW: ", showAllView)}
          <p>Test Show ALL view</p>
        </>
      )}
    </>
  );
}

export default ShowAll;
