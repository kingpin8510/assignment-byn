import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Sun, Moon } from "lucide-react"

// function Header({ toggleTheme, isDarkMode, isAuthenticated, setIsAuthenticated }) {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     setIsAuthenticated(false)
//     navigate("/")
//   }

//   return (
//     <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           Profile Explorer
//         </Link>
//         <nav className="flex items-center">
//           <Link to="/" className="mr-4">
//             Home
//           </Link>
//           {isAuthenticated ? (
//             <>
//               <Link to="/admin" className="mr-4">
//                 Admin
//               </Link>
//               <button onClick={handleLogout} className="mr-4">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="mr-4">
//               Admin
//             </Link>
//           )}
//           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
//           </button>
//         </nav>
//       </div>
//     </header>
//   )
// }

function Header({ toggleTheme, isDarkMode, isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate("/")
  }

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold transform transition-transform hover:scale-110">
          Profile Explorer
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="hover:text-yellow-300 transition-colors">
                Admin
              </Link>
              <button onClick={handleLogout} className="hover:text-yellow-300 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-yellow-300 transition-colors">
              Login
            </Link>
          )}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {isDarkMode ? <Sun size={24} className="animate-spin" /> : <Moon size={24} className="animate-spin" />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

