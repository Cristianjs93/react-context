import { useState, createContext } from "react";

export const Candidate2Context = createContext();

export const Candidate2Provider = ({ children }) => {
   const [candidate2Votes, setCandidate2Votes] = useState(0);

   const handleVote = () => {
      setCandidate2Votes(candidate2Votes + 1);
   };

   return (
      <Candidate2Context.Provider value={{ candidate2Votes, handleVote }}>
         {children}
      </Candidate2Context.Provider>
   );
};
