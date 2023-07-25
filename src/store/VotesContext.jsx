import { useState, createContext } from "react";

export const VotesContext = createContext();

export const VotesProvider = ({ children }) => {
   const [votes, setVotes] = useState({
      candidate1: 0,
      candidate2: 0,
      candidate3: 0,
      candidate4: 0,
      totalVotes: 0
   });

   const handleVotes = (name) => {
      setVotes({
         ...votes,
         [name]: votes[name] + 1,
         totalVotes: votes.totalVotes + 1
      });
   };

   return (
      <VotesContext.Provider
         value={{
            votes,
            handleVotes
         }}>
         {children}
      </VotesContext.Provider>
   );
};
