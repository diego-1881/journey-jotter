import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => {}}>
      <h1>Map</h1>
      <h2>
        Position:
        <span className={styles.position}>
          {lat}, {lng}
        </span>
      </h2>
      <button onClick={() => setSearchParams({ lat: 38.7223, lng: -9.1393 })}>Change pos</button>
    </div>
  );
}

export default Map;
