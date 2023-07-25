import React, { useContext } from "react";
import { VotesContext } from "../store/VotesContext";

const IndividualVotes = ({ view, candidateView }) => {
   const store = useContext(VotesContext);
   const { votes } = store;

   // const handleClick = (event) => {
   //    const currentElement = event.target;

   //    const selectedElement = document.querySelector(
   //       ".buttons-filters__box__button--selected"
   //    );

   //    if (currentElement !== selectedElement) {
   //       selectedElement &&
   //          selectedElement.classList.remove(
   //             "buttons-filters__box__button--selected"
   //          );

   //       currentElement.classList.toggle(
   //          "buttons-filters__box__button--selected"
   //       );
   //    }
   // };

   if (view == "numbers")
      return candidateView == "all" ? (
         <div className="individuals">
            <h2> candidato 1: {votes.candidate1} votos</h2>
            <h2> candidato 2: {votes.candidate2} votos</h2>
            <h2> candidato 3: {votes.candidate3} votos</h2>
            <h2 style={{ display: "none" }}>
               {" "}
               candidato 4: {votes.candidate4} votos
            </h2>
         </div>
      ) : candidateView == "candidate1" ? (
         <div className="individuals">
            <h2> candidato 1: {votes.candidate1} votos</h2>
         </div>
      ) : candidateView == "candidate2" ? (
         <div className="individuals">
            <h2> candidato 2: {votes.candidate2} votos</h2>
         </div>
      ) : candidateView == "candidate3" ? (
         <div className="individuals">
            <h2> candidato 3: {votes.candidate3} votos</h2>
         </div>
      ) : candidateView == "candidate4" ? (
         <div className="individuals">
            <h2> candidato 4: {votes.candidate4} votos</h2>
         </div>
      ) : null;

   if (view == "percentage")
      return candidateView == "all" ? (
         <div className="individuals">
            <h2>candidato 1: {(votes.candidate1 / votes.totalVotes) * 100}%</h2>
            <h2>candidato 2: {(votes.candidate2 / votes.totalVotes) * 100}%</h2>
            <h2>candidato 3: {(votes.candidate3 / votes.totalVotes) * 100}%</h2>
            <h2>candidato 4: {(votes.candidate4 / votes.totalVotes) * 100}%</h2>
         </div>
      ) : candidateView == "candidate1" ? (
         <div className="individuals">
            <h2>candidato 1: {(votes.candidate1 / votes.totalVotes) * 100}%</h2>
         </div>
      ) : candidateView == "candidate2" ? (
         <div className="individuals">
            <h2>candidato 2: {(votes.candidate2 / votes.totalVotes) * 100}%</h2>
         </div>
      ) : candidateView == "candidate3" ? (
         <div className="individuals">
            <h2>candidato 3: {(votes.candidate3 / votes.totalVotes) * 100}%</h2>
         </div>
      ) : (
         candidateView == "candidate4" && (
            <div className="individuals">
               <h2>
                  candidato 4: {(votes.candidate4 / votes.totalVotes) * 100}%
               </h2>
            </div>
         )
      );
};

export default IndividualVotes;
