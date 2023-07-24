import React, { useState, createContext, useContext } from "react";
import { Candidate1Context } from "../store/Candidate1Context";
import { Candidate2Context } from "../store/Candidate2Context";
import { Candidate3Context } from "../store/Candidate3Context";
import { Candidate4Context } from "../store/Candidate4Context";

export const TotalVotesContext = createContext();

export const TotalVotesProvider = ({ children }) => {
   const [totalVotes, setTotalvotes] = useState(0);

   // const handleTotalVotes = () => {

   // };

   setTotalvotes(
      store1.candidate1Votes +
         store2.candidate2Votes +
         store3.candidate3Votes +
         store4.candidate4Votes
   );

   return (
      <TotalVotesContext.Provider value={{ totalVotes }}>
         {children}
      </TotalVotesContext.Provider>
   );
};
