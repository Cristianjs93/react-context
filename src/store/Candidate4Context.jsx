import { useState, createContext } from "react";

export const Candidate4Context = createContext();

export const Candidate4Provider = ({ children }) => {
   const [candidate4Votes, setCandidate4Votes] = useState(0);

   const handleVote = () => {
      setCandidate4Votes(candidate4Votes + 1);
   };

   return (
      <Candidate4Context.Provider value={{ candidate4Votes, handleVote }}>
         {children}
      </Candidate4Context.Provider>
   );
};
