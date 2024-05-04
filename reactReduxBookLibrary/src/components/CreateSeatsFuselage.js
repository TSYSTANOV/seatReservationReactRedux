import { useEffect, useState } from "react";
import { addSeatPlaces } from "../redux/passengersReducer";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
let count = 1;
function CreateSeatsFuselage({ number, passengers, passengersOnLocalStor }) {
  const reservedPlacesOfLocalStor = passengersOnLocalStor.map(
    (place) => place.seatPlace
  );

  const dispatch = useDispatch();
  const reservedPlaces = passengers.map((place) => place.seatPlace);
  const [disable, setDisable] = useState(false);
  const disabledInput = reservedPlaces.reduce((acc, item) => {
    if (item.length > 0) {
      acc += 1;
    }
    return acc;
  }, 0);
  useEffect(() => {
    if (disabledInput === passengers.length) {
      setDisable(!disable);
      count = 1;
    }
  }, [disabledInput]);

  const letterArray = ["A", "B", "C", "D", "E", "F"];
  const seatsArray = [];

  function upKey() {
    count++;
  }
  function handleSetSeat(checkedParam, value) {
    dispatch(addSeatPlaces({ checked: checkedParam, place: value }));
    count = 1;
  }
  for (let i = 0; i < number; i++) {
    let seatArr = letterArray.map((letter) => {
      return (
        <li key={uuidv4()} className="seat">
          <label>
            <input
              name="seat"
              type="checkbox"
              value={`${count}${letter}`}
              checked={
                reservedPlaces.includes(`${count}${letter}`) ? true : false
              }
              onChange={(e) => {
                handleSetSeat(e.target.checked, e.target.value);
              }}
              disabled={
                reservedPlaces.includes(`${count}${letter}`)
                  ? false
                  : disable ||
                    reservedPlacesOfLocalStor.includes(`${count}${letter}`)
              }
            />
          </label>
        </li>
      );
    });
    seatsArray.push(seatArr);
    upKey();
  }

  return (
    <ol className="fuselage">
      {seatsArray.map((seats) => {
        return (
          <li key={uuidv4()}>
            <ol className="seats">{seats}</ol>
          </li>
        );
      })}
    </ol>
  );
}
export { CreateSeatsFuselage };
