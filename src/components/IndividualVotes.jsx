import React, { useContext } from "react";
import { Candidate1Context } from "../store/Candidate1Context";
import { Candidate2Context } from "../store/Candidate2Context";
import { Candidate3Context } from "../store/Candidate3Context";
import { Candidate4Context } from "../store/Candidate4Context";
import { TotalVotesContext } from "../store/TotalVotesContext";

const IndividualVotes = ({ view, setView }) => {
   const store1 = useContext(Candidate1Context);
   const store2 = useContext(Candidate2Context);
   const store3 = useContext(Candidate3Context);
   const store4 = useContext(Candidate4Context);
   const votesStore = useContext(TotalVotesContext);
   if (view == "numerico")
      return (
         <div className="individuals">
            <h2> candidato 1: {store1.candidate1Votes} votos</h2>
            <h2> candidato 2: {store2.candidate2Votes} votos</h2>
            <h2> candidato 3: {store3.candidate3Votes} votos</h2>
            <h2> candidato 4: {store4.candidate4Votes} votos</h2>
         </div>
      );

   if (view == "porcentaje")
      return (
         <div className="individuals">
            <h2>
               candidato 1:{" "}
               {(store1.candidate1Votes / votesStore.totalVotes) * 100}%
            </h2>
            <h2>
               candidato 2:{" "}
               {(store2.candidate2Votes / votesStore.totalVotes) * 100}%
            </h2>
            <h2>
               candidato 3:{" "}
               {(store3.candidate3Votes / votesStore.totalVotes) * 100}%
            </h2>
            <h2>
               candidato 4:{" "}
               {(store4.candidate4Votes / votesStore.totalVotes) * 100}%
            </h2>
         </div>
      );
};

export default IndividualVotes;
