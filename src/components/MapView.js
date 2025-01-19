// import React from "react"
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import { useProfiles } from "../contexts/ProfileContext"
// import "leaflet/dist/leaflet.css"
// import L from "leaflet"

// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// })

// function MapView({ selectedProfile }) {
//   const { profiles } = useProfiles()
//   const defaultPosition = [39.8283, -98.5795] // Center of the US
//   const position = selectedProfile ? [selectedProfile.latitude, selectedProfile.longitude] : defaultPosition
//   const zoom = selectedProfile ? 13 : 4

//   return (
//     <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {selectedProfile ? (
//         <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
//           <Popup>
//             <div>
//               <h3>{selectedProfile.name}</h3>
//               <p>{selectedProfile.location}</p>
//             </div>
//           </Popup>
//         </Marker>
//       ) : (
//         profiles.map((profile) => (
//           <Marker key={profile.id} position={[profile.latitude, profile.longitude]}>
//             <Popup>
//               <div>
//                 <h3>{profile.name}</h3>
//                 <p>{profile.location}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))
//       )}
//     </MapContainer>
//   )
// }

// export default MapView

import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useProfiles } from "../contexts/ProfileContext"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

function MapView({ selectedProfile }) {
  const { profiles } = useProfiles()
  const centerPosition = [39.8283, -98.5795] // Center of the US
  const zoom = selectedProfile ? 13 : 4

  return (
    <MapContainer
      center={selectedProfile ? [selectedProfile.latitude, selectedProfile.longitude] : centerPosition}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedProfile ? (
        <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
          <Popup>
            <div>
              <h3 className="font-bold">{selectedProfile.name}</h3>
              <p>{selectedProfile.location}</p>
            </div>
          </Popup>
        </Marker>
      ) : (
        profiles.map((profile) => (
          <Marker key={profile.id} position={[profile.latitude, profile.longitude]}>
            <Popup>
              <div>
                <h3 className="font-bold">{profile.name}</h3>
                <p>{profile.location}</p>
              </div>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  )
}

export default MapView

