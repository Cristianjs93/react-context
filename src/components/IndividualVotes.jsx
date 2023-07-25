import React, { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const IndividualVotes = ({ view }) => {
   const store = useContext(VotesContext);
   const { votes } = store;

   if (view == "numbers")
      return (
         <div className="individuals">
            <h2 id="candidate1" className="votes-info">
               Candidate 1: {votes.candidate1} votos
            </h2>
            <h2 id="candidate2" className="votes-info">
               Candidate 2: {votes.candidate2} votos
            </h2>
            <h2 id="candidate3" className="votes-info">
               Candidate 3: {votes.candidate3} votos
            </h2>
            <h2 id="candidate4" className="votes-info">
               Candidate 4: {votes.candidate4} votos
            </h2>
         </div>
      );

   if (view == "percentage")
      return (
         <div className="individuals">
            <h2 id="candidate1" className="votes-info">
               Candidate 1:{" "}
               {((votes.candidate1 / votes.totalVotes) * 100).toFixed(2)}%
            </h2>
            <h2 id="candidate2" className="votes-info">
               Candidate 2:{" "}
               {((votes.candidate2 / votes.totalVotes) * 100).toFixed(2)}%
            </h2>
            <h2 id="candidate3" className="votes-info">
               Candidate 3:{" "}
               {((votes.candidate3 / votes.totalVotes) * 100).toFixed(2)}%
            </h2>
            <h2 id="candidate4" className="votes-info">
               Candidate 4:{" "}
               {((votes.candidate4 / votes.totalVotes) * 100).toFixed(2)}%
            </h2>
         </div>
      );
};

export default IndividualVotes;
