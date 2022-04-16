import React, { useState } from "react";
import {
   useJsApiLoader,
   GoogleMap,
   Marker,
   Autocomplete,
} from "@react-google-maps/api";
import { Wrapper } from "./Maps.styles";
const containerStyle = {
   width: "100vw",
   height: "87vh",
};
// const center = { lat: 6.50721, lng: 3.20178 };
const libraries = ["places"];
const Map = ({ center }) => {
   const [map, setMap] = useState(null);
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCtm7vk6Jbe_S8lNMbVfTJivNT01QEeBHQ",
      libraries,
   });
   if (!isLoaded) {
      return (
         <div>
            <h1 style={{ color: "black" }}>Not Loaded</h1>
         </div>
      );
   }
   return (
      <Wrapper>
         <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={(map) => setMap(map)}
         >
            <Marker position={center} />
            {/* Child components, such as markers, info windows, etc. */}
         </GoogleMap>
         <button onClick={() => map.panTo(center)}>location</button>
      </Wrapper>
   );
};
export default Map;
