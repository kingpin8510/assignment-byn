// import React from 'react';
// import { Link } from 'react-router-dom';

// function ProfileCard({ profile, onSummary }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <img src={profile.photo || "/placeholder.svg"} alt={profile.name} className="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 className="text-xl font-bold mb-2">{profile.name}</h2>
//       <p className="text-gray-600 mb-4">{profile.description}</p>
//       <div className="flex justify-between">
//         <button 
//           onClick={onSummary}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Summary
//         </button>
//         <Link 
//           to={`/profile/${profile.id}`}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;

import React from "react"
import { Link } from "react-router-dom"

function ProfileCard({ profile }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <img
        src={profile.photo || "/placeholder.svg"}
        alt={profile.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-bold mb-1 dark:text-white">{profile.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{profile.profession}</p>
      <div className="flex justify-center">
        <Link
          to={`/profile/${profile.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
        >
          View Summary
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard


