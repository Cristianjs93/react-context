import React from "react";

const Filters = ({ setView, setCandidateView }) => {
   const handleView = () => {
      const selectView = document.getElementById("view");
      const viewValue = selectView.value;
      setView(viewValue);

      const selectCandidate = document.getElementById("candidate");
      const candidateValue = selectCandidate.value;
      setCandidateView(candidateValue);
   };

   return (
      <div className="filters-box">
         <select name="select-view" id="view" defaultValue="numbers">
            <option value="numbers">Numerico</option>
            <option value="percentage">Porcentaje</option>
         </select>
         <select name="select-candidate" id="candidate" defaultValue="all">
            <option value="all">Todos</option>
            <option value="candidate1">Candidato 1</option>
            <option value="candidate2">Candidato 2</option>
            <option value="candidate3">Candidato 3</option>
            <option value="candidate4">Candidato 4</option>
         </select>

         <button onClick={handleView}>Aplicar filtro</button>
      </div>
   );
};

export default Filters;
