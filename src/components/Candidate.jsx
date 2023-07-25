import React, { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const Candidate = ({ name }) => {
   const store = useContext(VotesContext);

   return (
      <button
         className="candidate"
         name={`candidate${name}`}
         onClick={(event) => store.handleVotes(event.target.name)}>
         Candidate{name}
      </button>
   );
};

export default Candidate;
