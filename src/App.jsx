import { useState } from "react";
import SearchBar from "./SearchBar";
import InfoBox from "./InfoBox"
function App() {
   const [weatherInfo, setWeatherInfo] = useState(null);
  return (
    <>
    <SearchBar updateInfo={setWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}

export default App;