import React from "react";

const Filters = ({ view, setView }) => {
   const handleView = (event) => {
      const select = document.getElementById("view");
      const value = select.value;
      setView(value);
   };
   return (
      <div className="filters-box">
         <select
            name="select-view"
            id="view"
            defaultValue="numerico"
            // onChange={handleView}
         >
            <option value="numerico">Numerico</option>
            <option value="porcentaje">Porcentaje</option>
         </select>
         <select name="select-candidate" id="candidate">
            <option value="todos">Todos</option>
            <option value="c1">Candidato 1</option>
            <option value="c2">Candidato 2</option>
            <option value="c3">Candidato 3</option>
            <option value="c4">Candidato 4</option>
         </select>

         <button onClick={handleView}>Aplicar filtro</button>
      </div>
   );
};

export default Filters;
