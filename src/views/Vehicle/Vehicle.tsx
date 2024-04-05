import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const Vehicle = () => {

  const { state } = useLocation();

  return (
    <div className="container">

        <Header/>

        <div className="list" id="list">
          <p className="details-txt"><b>Name:</b> {state.name}</p>
          <p className="details-txt"><b>Model:</b> {state.model}</p>
          <p className="details-txt"><b>Crew:</b> {state.crew}</p>
          <p className="details-txt"><b>Passengers:</b> {state.passengers}</p>
          <p className="details-txt"><b>Cargo Capacity:</b> {state.cargo_capacity}</p>
          <p className="details-txt"><b>Consumables:</b> {state.consumables}</p>
          <p className="details-txt"><b>Cost in Credits:</b> {state.cost_in_credits}</p>
          <p className="details-txt"><b>Length:</b> {state.length}</p>
          <p className="details-txt"><b>Manufacturer:</b> {state.manufacturer}</p>
          <p className="details-txt"><b>Max Atmosphere Speed:</b> {state.max_atmosphering_speed}</p>
          <p className="details-txt"><b>Vehicle Class:</b> {state.vehicle_class}</p>
        </div>
    </div>
  );
};

export default Vehicle;