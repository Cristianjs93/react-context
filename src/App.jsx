import React, { useState } from "react";
import Candidate from "./components/Candidate";
import TotalVotes from "./components/TotalVotes";
import IndividualVotes from "./components/IndividualVotes";
import Filters from "./components/Filters";
import { VotesProvider } from "./store/VotesContext";

import "./App.css";

function App() {
   const [view, setView] = useState("numbers");
   return (
      <>
         <VotesProvider>
            <div className="main-container">
               <div className="candidates-container">
                  {[1, 2, 3, 4].map((item) => (
                     <Candidate key={item} name={item} />
                  ))}
               </div>
               <div className="votes-container">
                  <Filters setView={setView} />

                  <div className="total-container">
                     <TotalVotes />
                     <IndividualVotes view={view} />
                  </div>
               </div>
            </div>
         </VotesProvider>
      </>
   );
}

export default App;
