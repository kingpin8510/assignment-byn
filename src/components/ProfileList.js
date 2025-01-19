// import React, { useState } from 'react';
// import { useProfiles } from '../contexts/ProfileContext';
// import ProfileCard from './ProfileCard';
// import MapView from './MapView';

// function ProfileList() {
//   const { profiles } = useProfiles();
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredProfiles = profiles.filter(profile => 
//     profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     profile.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="md:w-1/2 pr-4">
//         <input
//           type="text"
//           placeholder="Search profiles..."
//           className="w-full p-2 mb-4 border rounded"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {filteredProfiles.map(profile => (
//             <ProfileCard 
//               key={profile.id} 
//               profile={profile} 
//               onSummary={() => setSelectedProfile(profile)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="md:w-1/2 mt-4 md:mt-0">
//         <MapView selectedProfile={selectedProfile} />
//       </div>
//     </div>
//   );
// }

// export default ProfileList;





import React, { useState, useEffect } from "react"
import { useProfiles } from "../contexts/ProfileContext"
import ProfileCard from "./ProfileCard"
import MapView from "./MapView"
import ProfileDetails from "./ProfileDetails"

function ProfileList() {
  const { profiles } = useProfiles()
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect(() => {
    setSelectedProfile(null)
  }, [searchTerm])

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search profiles..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onSummary={() => setSelectedProfile(profile)} />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          {selectedProfile && (
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <ProfileDetails profile={selectedProfile} />
            </div>
          )}
          <div className="h-[400px]">
            <MapView selectedProfile={selectedProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileList


// function ProfileList() {
//   const { profiles } = useProfiles()
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredProfiles = profiles.filter(
//     (profile) =>
//       profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       profile.location.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   return (
//     <div className="container mx-auto px-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search profiles..."
//           className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProfiles.map((profile) => (
//           <ProfileCard key={profile.id} profile={profile} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProfileList
