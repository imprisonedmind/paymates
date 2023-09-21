import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
const BottomSheetContext = createContext(null);

// Step 2: Create a provider component
function BottomSheetContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bottomSheetChildren, setBottomSheetChildren] = useState(false);

  return (
    <BottomSheetContext.Provider
      value={{ isOpen, setIsOpen, bottomSheetChildren, setBottomSheetChildren }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
}

function useBottomSheetContext() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(
      "useBottomSheetContext must be used within a BottomSheetContextProvider",
    );
  }
  return context;
}

export { BottomSheetContextProvider, useBottomSheetContext };
