import React, { useContext } from "react";
import { Candidate4Context } from "../store/Candidate4Context";

const Candidate4 = () => {
   const store = useContext(Candidate4Context);

   return (
      <button
         style={{ cursor: "pointer" }}
         className="candidate"
         onClick={store.handleVote}>
         Candidate4
      </button>
   );
};

export default Candidate4;
