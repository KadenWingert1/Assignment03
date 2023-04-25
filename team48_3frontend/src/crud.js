import React, { useState } from "react"; 
import { Products } from "./Products";

function Crud({
  isCrudVisable,
  setIsCrudVisable,
  setShowAllView,
  showAddView,
  setShowAddView,
  showRemoveView,
  setShowRemoveView,
  showUpdateView,
  setShowUpdateView,
  isCrudBackVisable,
  setCrudBackVisable
}) {

  return (
    <div>
      {isCrudVisable == true && (
        <div>
          <button
            key="All"
            className="crudButtons"
            onClick={() => {
              setShowAllView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            View All
          </button>

          <button
            key="Add"
            className="crudButtons"
            onClick={() => {
              setShowAddView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Add
          </button>

          <button
            key="Remove"
            className="crudButtons"
            onClick={() => {
              setShowRemoveView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Remove
          </button>

          <button
            key="Update"
            className="crudButtons"
            onClick={() => {
              setShowUpdateView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Update
          </button>

        </div>
      )}
    </div>
  );
}

export default Crud;
