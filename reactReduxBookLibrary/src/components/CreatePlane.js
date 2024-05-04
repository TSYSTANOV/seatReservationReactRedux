import { v4 as uuidv4 } from "uuid";
import { CreateExitFuselage } from "./CreateExitFuselage";
import { CreateSeatsFuselage } from "./CreateSeatsFuselage";
import { useSelector } from "react-redux";

function CreatePlane({ scheme, passengersOnLocalStor }) {
  const passengers = useSelector((state) => state.passengers);
  return scheme.map((item) => {
    if (item === "exit") {
      return <CreateExitFuselage key={uuidv4()} />;
    } else {
      return (
        <CreateSeatsFuselage
          key={uuidv4()}
          number={item}
          prev={scheme}
          passengers={passengers}
          passengersOnLocalStor={passengersOnLocalStor}
        />
      );
    }
  });
}
export { CreatePlane };
