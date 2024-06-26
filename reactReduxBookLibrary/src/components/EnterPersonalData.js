import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { correctPassenger, editPassngers } from "../redux/passengersReducer";
function EnterPersonalData() {
  const navigate = useNavigate();
  const passengersData = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  function handleChange(id, value, param) {
    dispatch(editPassngers({ id, value: value, param: param }));
  }
  useEffect(() => {
    if (passengersData.length === 0) {
      navigate("/");
    }
    const howManySubmit = passengersData.filter(
      (item) => item.correct === true
    );
    if (howManySubmit.length === passengersData.length) {
      navigate("/seat-plane");
    }
  }, [passengersData]);

  function handleSubmitForm(e, id) {
    e.preventDefault();
    dispatch(correctPassenger(id));
  }
  return (
    <main className="person-data">
      {passengersData.map((item, index) => {
        return (
          <form
            key={item.id}
            className="person"
            onSubmit={(e) => {
              handleSubmitForm(e, item.id);
            }}
          >
            <h2 className="person__title">Пассажир #${index + 1}</h2>

            <div className="field">
              <label className="field__label">ФИО</label>
              <input
                className="field__input"
                id="name"
                name="name"
                type="text"
                placeholder="Введите ваше ФИО"
                required=""
                value={item.name}
                onChange={(e) => {
                  handleChange(item.id, e.target.value, "name");
                }}
                disabled={item.correct}
              />
            </div>

            <div className="field">
              <label className="field__label">Номер билета (10 цифр)</label>
              <input
                className="field__input"
                id="ticket"
                name="ticket"
                type="text"
                placeholder="Номер билета"
                required=""
                minLength="10"
                maxLength="10"
                value={item.ticket}
                onChange={(e) => {
                  handleChange(item.id, e.target.value, "ticket");
                }}
                disabled={item.correct}
              />
            </div>
            <button className="btn-confirm" type="submit">
              Подтвердить
            </button>
          </form>
        );
      })}
    </main>
  );
}
export { EnterPersonalData };
