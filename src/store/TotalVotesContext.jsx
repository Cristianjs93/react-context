import React, { useState, createContext } from "react";

export const TotalVotesContext = createContext();

export const TotalVotesProvider = ({ children }) => {
   const [totalVotes, setTotalVotes] = useState(0);

   const handleTotalVotes = (newValue) => {
      setTotalVotes(newValue);
   };

   return (
      <TotalVotesContext.Provider value={{ totalVotes, handleTotalVotes }}>
         {children}
      </TotalVotesContext.Provider>
   );
};
