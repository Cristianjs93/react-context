import React, { useContext, useState } from "react";
import { Candidate1Context } from "../store/Candidate1Context";
import { Candidate2Context } from "../store/Candidate2Context";
import { Candidate3Context } from "../store/Candidate3Context";
import { Candidate4Context } from "../store/Candidate4Context";
// import { TotalVotesContext } from "../store/TotalVotesContext";

const TotalVotos = () => {
   const [totalVotes, setTotalvotes] = useState(0);

   const store1 = useContext(Candidate1Context);
   const store2 = useContext(Candidate2Context);
   const store3 = useContext(Candidate3Context);
   const store4 = useContext(Candidate4Context);
   // const store = useContext(TotalVotesContext);

   return (
      <div className="total-votos">
         Total de votos:
         {store1.candidate1Votes +
            store2.candidate2Votes +
            store3.candidate3Votes +
            store4.candidate4Votes}
      </div>
   );
};

export default TotalVotos;
