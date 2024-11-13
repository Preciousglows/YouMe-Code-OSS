import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Challenges from "./pages/Challenges";
import ChallengeDetailsPage from "./pages/ChallengeDetailsPage";
import CreateChallengePage from "./pages/CreateChallengePage";
import UserProfile from "./pages/UserProfile";
import Leaderboard from "./pages/Leaderboard";
import Community from "./pages/Community";
import SolutionCommentsPage from "./pages/SolutionCommentsPage";

function App(){

  return (
    <div className="bg-[#0F172A] font-poppins min-h-screen">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            

            
              <Route path="/app" element={
                  <ProtectedRoute>
                        <AppLayout /> 
                  </ProtectedRoute>}>
                  <Route index element={<Challenges />} />
                  <Route path="challenges/:challengeId" element={<ChallengeDetailsPage />} />
                  <Route path="challenges/:challengeId/solutions/:solutionId/comments" element={<SolutionCommentsPage />} />                  <Route path="create-challenge" element={<CreateChallengePage />} />
                  <Route path="profile" element={<UserProfile />}/>
                  <Route path="leaderboard" element={<Leaderboard />} />
                  <Route path="community" element={<Community />} />
              </Route>
          
          </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;