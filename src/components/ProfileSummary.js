import React from "react"
import { useParams, Link } from "react-router-dom"
import { useProfiles } from "../contexts/ProfileContext"
import MapView from "./MapView"

function ProfileSummary() {
  const { id } = useParams()
  const { profiles } = useProfiles()
  const profile = profiles.find((p) => p.id === id)

  if (!profile) {
    return <div className="text-center mt-8">Profile not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 dark:text-blue-400 hover:underline mb-4 inline-block">
        &larr; Back to profiles
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 pr-4">
            <img
              src={profile.photo || "/placeholder.svg"}
              alt={profile.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">{profile.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{profile.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold dark:text-white">
                  Age: <span className="font-normal text-gray-600 dark:text-gray-300">{profile.age}</span>
                </p>
                <p className="font-bold dark:text-white">
                  Profession: <span className="font-normal text-gray-600 dark:text-gray-300">{profile.profession}</span>
                </p>
                <p className="font-bold dark:text-white">
                  Role: <span className="font-normal text-gray-600 dark:text-gray-300">{profile.role}</span>
                </p>
              </div>
              <div>
                <p className="font-bold dark:text-white">
                  Location: <span className="font-normal text-gray-600 dark:text-gray-300">{profile.location}</span>
                </p>
                <p className="font-bold dark:text-white">
                  Contact: <span className="font-normal text-gray-600 dark:text-gray-300">{profile.contact}</span>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold dark:text-white">Interests:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {profile.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px]">
        <MapView selectedProfile={profile} />
      </div>
    </div>
  )
}

export default ProfileSummary

