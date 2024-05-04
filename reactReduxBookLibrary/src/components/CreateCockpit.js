import { useSelector } from "react-redux";

function CreateCocpit({ countPassengers }) {
  const passengers = useSelector((state) => state.passengers);
  function handleSubmit(e) {
    e.preventDefault();
    const allPlacesReserved = passengers.every((item) => item.seatPlace.length);
    if (allPlacesReserved) {
      const dataLocal = JSON.parse(
        localStorage.getItem("passengersOnLocalStor")
      );

      localStorage.setItem(
        "passengersOnLocalStor",
        JSON.stringify([...passengers, ...dataLocal])
      );
    }
  }
  return (
    <div className="cockpit">
      <h1 className="cockpit-title">Выберите {countPassengers} место</h1>
      <button
        className="cockpit-confirm"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Подтвердить
      </button>
    </div>
  );
}
export { CreateCocpit };
