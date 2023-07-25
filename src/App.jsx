import React, { useState } from "react";
import Candidate1 from "./components/Candidate1";
import Candidate2 from "./components/Candidate2";
import Candidate3 from "./components/Candidate3";
import Candidate4 from "./components/Candidate4";
import TotalVotes from "./components/TotalVotes";
import IndividualVotes from "./components/IndividualVotes";
import Filters from "./components/Filters";
import { Candidate1Provider } from "./store/Candidate1Context";
import { Candidate2Provider } from "./store/Candidate2Context";
import { Candidate3Provider } from "./store/Candidate3Context";
import { Candidate4Provider } from "./store/Candidate4Context";
import { TotalVotesProvider } from "./store/TotalVotesContext";

import "./App.css";

function App() {
   const [view, setView] = useState("numerico");
   const [candidateView, setCandidateView] = useState("todos");
   return (
      <>
         <TotalVotesProvider>
            <Candidate1Provider>
               <Candidate2Provider>
                  <Candidate3Provider>
                     <Candidate4Provider>
                        <div className="main-container">
                           <div className="candidates-container">
                              <Candidate1 />
                              <Candidate2 />
                              <Candidate3 />
                              <Candidate4 />
                           </div>
                           <div className="votes-container">
                              <Filters
                                 setView={setView}
                                 setCandidateView={setCandidateView}
                              />

                              <div className="total-container">
                                 <TotalVotes />
                                 <IndividualVotes
                                    view={view}
                                    candidateView={candidateView}
                                 />
                              </div>
                           </div>
                        </div>
                     </Candidate4Provider>
                  </Candidate3Provider>
               </Candidate2Provider>
            </Candidate1Provider>
         </TotalVotesProvider>
      </>
   );
}

export default App;
