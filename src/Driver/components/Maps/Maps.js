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
   height: "70vh",
};
const center = { lat: 6.4474, lng: 3.3903 };
const Map = () => {
   const [map, setMap] = useState(null);
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCtm7vk6Jbe_S8lNMbVfTJivNT01QEeBHQ",
      libraries: ["places"],
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
            zoom={15}
            onLoad={(map) => setMap(map)}
         >
            <Marker position={center} />
            {/* Child components, such as markers, info windows, etc. */}
         </GoogleMap>
         <div>
            <Autocomplete>
               <input type="text" placeholder="Origin" />
            </Autocomplete>
         </div>
         <div>
            <input type="text" placeholder="Destination" />
         </div>
         <button onClick={() => map.panTo(center)}>location</button>
      </Wrapper>
   );
};
export default Map;
