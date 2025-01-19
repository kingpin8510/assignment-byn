// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ProfileProvider } from './contexts/ProfileContext';
// import Header from './components/Header';
// import ProfileList from './components/ProfileList';
// import AdminPanel from './components/AdminPanel';
// import ProfileDetails from './components/ProfileDetails';

// function App() {
//   return (
//     <ProfileProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-100">
//           <Header />
//           <main className="container mx-auto px-4 py-8">
//             <Routes>
//               <Route path="/" element={<ProfileList />} />
//               <Route path="/admin" element={<AdminPanel />} />
//               <Route path="/profile/:id" element={<ProfileDetails />} />
//             </Routes>
//           </main>
//         </div>
//       </Router>
//     </ProfileProvider>
//   );
// }

// export default App;

import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { ProfileProvider } from "./contexts/ProfileContext"
import Header from "./components/Header"
import ProfileList from "./components/ProfileList"
import AdminPanel from "./components/AdminPanel"
import ProfileSummary from "./components/ProfileSummary"
import Login from "./components/Login"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ProfileProvider>
      <Router>
        <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <Header
              toggleTheme={toggleTheme}
              isDarkMode={isDarkMode}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
            <main className="container mx-auto px-4 py-8 w-full">
              <Routes>
                <Route path="/" element={<ProfileList />} />
                <Route path="/profile/:id" element={<ProfileSummary />} />
                <Route path="/admin" element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" replace />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ProfileProvider>
  )
}

export default App

