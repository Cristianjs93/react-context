import { useState, createContext } from "react";

export const Candidate3Context = createContext();

export const Candidate3Provider = ({ children }) => {
   const [candidate3Votes, setCandidate3Votes] = useState(0);

   const handleVote = () => {
      setCandidate3Votes(candidate3Votes + 1);
   };

   return (
      <Candidate3Context.Provider value={{ candidate3Votes, handleVote }}>
         {children}
      </Candidate3Context.Provider>
   );
};
