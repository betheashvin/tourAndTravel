import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island..."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner..."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;