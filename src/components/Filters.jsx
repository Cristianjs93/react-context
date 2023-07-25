import React from "react";

const Filters = ({ setView }) => {
   const handleView = () => {
      const selectView = document.getElementById("view");
      const viewValue = selectView.value;
      setView(viewValue);

      handleCandidateview();
   };

   const handleCandidateview = () => {
      const allCandidatesVotes = document.querySelectorAll(".votes-info");

      const selectWithCandidates = document.getElementById("select-candidate");
      const selectedCandidate = selectWithCandidates.value;

      allCandidatesVotes.forEach((item) => {
         item.id == selectedCandidate && item.classList.remove("off");
         item.id != selectedCandidate && item.classList.add("off");
         selectedCandidate == "all" && item.classList.remove("off");
      });
   };

   return (
      <div className="filters-box">
         <select id="view" defaultValue="numbers">
            <option value="numbers">Numeric</option>
            <option value="percentage">Percentaje</option>
         </select>

         <select id="select-candidate" defaultValue="all">
            <option value="all">All</option>
            <option value="candidate1">Candidate 1</option>
            <option value="candidate2">Candidate 2</option>
            <option value="candidate3">Candidate 3</option>
            <option value="candidate4">Candidate 4</option>
         </select>

         <button onClick={handleView}>Apply Filter</button>
      </div>
   );
};

export default Filters;
