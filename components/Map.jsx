import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";

export default function Map(){
  const center=[6.607534448639861, 3.3389903325009587]
  return (
    <div>
    <MapContainer style={{height:'50vh', width:'100vw'}} center={center} zoom={13}>
  <TileLayer
    url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=tfmWEzXwjTRhZiG2hg5k"
    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    id="map"
  >
    heyll
  </TileLayer>
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}
  {/* </Marker> */}
</MapContainer>
</div>
  );
};

// export default Map;