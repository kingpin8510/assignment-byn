import React, { useState } from "react"
import { useProfiles } from "../contexts/ProfileContext"

function AdminPanel() {
  const { profiles, addProfile, editProfile, deleteProfile } = useProfiles()
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    description: "",
    location: "",
    latitude: "",
    longitude: "",
    contact: "",
    interests: "",
    age: "",
    profession: "",
    role: "",
  })
  const [editingId, setEditingId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: name === "interests" ? value.split(",") : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const profileData = {
      ...formData,
      latitude: Number.parseFloat(formData.latitude),
      longitude: Number.parseFloat(formData.longitude),
      age: Number.parseInt(formData.age),
    }
    if (editingId) {
      editProfile(editingId, profileData)
      setEditingId(null)
    } else {
      addProfile(profileData)
    }
    setFormData({
      name: "",
      photo: "",
      description: "",
      location: "",
      latitude: "",
      longitude: "",
      contact: "",
      interests: "",
      age: "",
      profession: "",
      role: "",
    })
  }

  const handleEdit = (profile) => {
    setFormData({
      ...profile,
      interests: profile.interests.join(","),
      latitude: profile.latitude.toString(),
      longitude: profile.longitude.toString(),
      age: profile.age.toString(),
    })
    setEditingId(profile.id)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Profession"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded mt-4 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        ></textarea>
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="Interests (comma-separated)"
          className="w-full p-2 border rounded mt-4 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {editingId ? "Update Profile" : "Add Profile"}
        </button>
      </form>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Existing Profiles</h3>
        {profiles.map((profile) => (
          <div key={profile.id} className="mb-4 p-4 border rounded dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white">{profile.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{profile.profession}</p>
            <div className="mt-2">
              <button
                onClick={() => handleEdit(profile)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel

