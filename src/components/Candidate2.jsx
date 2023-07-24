import React, { useContext } from "react";
import { Candidate2Context } from "../store/Candidate2Context";

const Candidate2 = () => {
   const store = useContext(Candidate2Context);
   return (
      <button
         style={{ cursor: "pointer" }}
         className="candidate"
         onClick={store.handleVote}>
         Candidate2
      </button>
   );
};

export default Candidate2;
