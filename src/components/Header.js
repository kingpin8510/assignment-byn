import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Sun, Moon } from "lucide-react"
import ToggleSwitch from './ToggleSwitch';

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
          <ToggleSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </nav>
      </div>
    </header>
  )
}

export default Header

