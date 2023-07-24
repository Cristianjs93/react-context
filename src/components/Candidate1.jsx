import React, { useContext } from "react";
import { Candidate1Context } from "../store/Candidate1Context";

const Candidate1 = () => {
   const store = useContext(Candidate1Context);

   return (
      <button
         style={{ cursor: "pointer" }}
         className="candidate"
         onClick={store.handleVote}>
         Candidate1
      </button>
   );
};

export default Candidate1;
