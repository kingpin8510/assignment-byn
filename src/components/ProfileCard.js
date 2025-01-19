import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <img
        src={profile.photo || "/placeholder.svg"}
        alt={profile.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-bold mb-1 dark:text-white">{profile.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {profile.profession}
      </p>
      <div className="flex justify-center">
        <Link
          to={`/profile/${profile.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
        >
          View Summary
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
