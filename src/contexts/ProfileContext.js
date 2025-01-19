import React, { createContext, useState, useContext } from "react"

const ProfileContext = createContext()

export const useProfiles = () => useContext(ProfileContext)

const initialProfiles = [
  {
    id: "1",
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Software Engineer with 5 years of experience in web development.",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    contact: "john.doe@example.com",
    interests: ["Coding", "Hiking", "Photography"],
    age: 28,
    profession: "Software Engineer",
    role: "Full Stack Developer",
  },
  {
    id: "2",
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Marketing specialist with a keen eye for trends.",
    location: "New York, NY",
    latitude: 40.7128,
    longitude: -74.006,
    contact: "jane.smith@example.com",
    interests: ["Digital Marketing", "Travel", "Yoga"],
    age: 32,
    profession: "Marketing",
    role: "Senior Marketing Manager",
  },
  {
    id: "3",
    name: "Mike Johnson",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Experienced project manager with a track record of delivering complex projects.",
    location: "Chicago, IL",
    latitude: 41.8781,
    longitude: -87.6298,
    contact: "mike.johnson@example.com",
    interests: ["Project Management", "Golf", "Reading"],
    age: 40,
    profession: "Project Management",
    role: "Senior Project Manager",
  },
  {
    id: "4",
    name: "Emily Brown",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Graphic designer specializing in brand identity and packaging design.",
    location: "Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437,
    contact: "emily.brown@example.com",
    interests: ["Graphic Design", "Art", "Fashion"],
    age: 26,
    profession: "Graphic Design",
    role: "Senior Graphic Designer",
  },
  {
    id: "5",
    name: "David Lee",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Data scientist with a PhD in Machine Learning.",
    location: "Seattle, WA",
    latitude: 47.6062,
    longitude: -122.3321,
    contact: "david.lee@example.com",
    interests: ["Machine Learning", "Chess", "Cooking"],
    age: 35,
    profession: "Data Science",
    role: "Lead Data Scientist",
  },
]

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(initialProfiles)

  const addProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now().toString() }])
  }

  const editProfile = (id, updatedProfile) => {
    setProfiles(profiles.map((profile) => (profile.id === id ? { ...profile, ...updatedProfile } : profile)))
  }

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id))
  }

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, editProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

