import { useState, createContext } from "react";

export const Candidate1Context = createContext();

export const Candidate1Provider = ({ children }) => {
   const [candidate1Votes, setCandidate1Votes] = useState(0);

   const handleVote = () => {
      setCandidate1Votes(candidate1Votes + 1);
   };

   return (
      <Candidate1Context.Provider value={{ candidate1Votes, handleVote }}>
         {children}
      </Candidate1Context.Provider>
   );
};
