import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateCocpit } from "./CreateCockpit";
import { CreatePlane } from "./CreatePlane";

function SeatPlane() {
  const passengersData = useSelector((state) => state.passengers);
  const tourID = passengersData.length > 0 ? passengersData[0].tourID : null;
  const tourInfo = useSelector((state) => state.tours).find((tour) => {
    if (tourID) {
      if (tour.id === tourID + "") {
        return tour;
      }
    }
  });
  const passengersOnLocalStor = JSON.parse(
    localStorage.getItem("passengersOnLocalStor")
  ).filter((place) => place.tourID === tourID);

  const navigate = useNavigate();
  useEffect(() => {
    if (passengersData.length === 0) {
      navigate("/");
    }
  }, [passengersData]);
  return (
    <main className="person-data">
      <form className="choises-seat">
        <fieldset className="plane" name="plane">
          <CreateCocpit countPassengers={passengersData.length} />
          <CreatePlane
            {...tourInfo}
            passengersOnLocalStor={passengersOnLocalStor}
          />
        </fieldset>
      </form>
    </main>
  );
}
export { SeatPlane };
