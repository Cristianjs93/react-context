import React from "react";

const Filters = () => {
   return (
      <div className="filters-box">
         <select name="selectnum" id="num">
            <option value="">Porcentaje</option>
            <option value="">Numerico</option>
         </select>
         <select name="selectcandidate" id="num">
            <option value="">Todos</option>
            <option value="">Candidato 1</option>
            <option value="">Candidato 2</option>
            <option value="">Candidato 3</option>
            <option value="">Candidato 4</option>
         </select>

         <button>Aplicar filtro</button>
      </div>
   );
};

export default Filters;
