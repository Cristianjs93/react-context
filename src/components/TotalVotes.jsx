import React, { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const TotalVotes = () => {
   const store = useContext(VotesContext);
   const { votes } = store;

   return <h2 className="total-votes">Total Votes: {votes.totalVotes}</h2>;
};

export default TotalVotes;
