import React from "react"
import { useParams, Link } from "react-router-dom"
import { useProfiles } from "../contexts/ProfileContext"

function ProfileDetails({ profile: propProfile }) {
  const { id } = useParams()
  const { profiles } = useProfiles()
  const profile = propProfile || profiles.find((p) => p.id === id)

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!propProfile && (
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to profiles
        </Link>
      )}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={profile.photo || "/placeholder.svg"}
          alt={profile.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
        <p className="text-gray-600 mb-4">{profile.description}</p>
        <p className="font-bold">
          Location: <span className="font-normal">{profile.location}</span>
        </p>
      </div>
    </div>
  )
}

export default ProfileDetails


