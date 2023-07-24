import React, { useContext } from "react";
import { Candidate3Context } from "../store/Candidate3Context";

const Candidate3 = () => {
   const store = useContext(Candidate3Context);

   return (
      <button
         style={{ cursor: "pointer" }}
         className="candidate"
         onClick={store.handleVote}>
         Candidate3
      </button>
   );
};

export default Candidate3;
