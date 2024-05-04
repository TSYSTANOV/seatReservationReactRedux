import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { asyncThunkForTourSlice } from "../redux/tourSlice"
import { addPassengers } from "../redux/passengersReducer"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
function ChooseTour(){
    const dispatch = useDispatch()
    const tours = useSelector((state)=>state.tours)
    const [countPassengers, setCountPassengers] = useState('')
    const [tourID, setTourID] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(asyncThunkForTourSlice())
    },[])
    function createPassenger(tour){
        return {
            id:uuidv4(),
            ticket:'',
            tourID:tour,
            seatPlace:'',
            name:''
        }
    }
    function handleSaveTour(e){
        e.preventDefault()
        if(countPassengers){
            let newPassengers = []
        for(let i = 0; i < +countPassengers; i++){
            newPassengers.push(createPassenger(tourID))
        }
        console.log(newPassengers)
        dispatch(addPassengers(newPassengers))
        navigate('/enter-personal-data')
        }
    }
    return (        
        <>
        <h1 className="title">Выберите тур</h1>
        <main className="person-data">
          <form className="field" onSubmit={handleSaveTour}>
            <label className="field__label">Укажите количество человек (max: 6)</label>
            <select className="field__select" id="tour" name="tour" value={tourID} onChange={(e)=>{
                setTourID(e.target.value)
            }}>
                {tours.map((tour)=>{
                    return <option key={tour.id} value={tour.id}>{tour.tour} ({tour.name})</option>
                })}
            </select>
            <input className="field__input" id="count" name="count" type="number" placeholder="#" min="1" max="6" required="" value={countPassengers} onChange={(e)=>{
                setCountPassengers(e.target.value)
            }}/>
            <button className="btn-confirm" type="submit">Подтвердить</button>
          </form>
        </main>
        </>)
    
}
export {ChooseTour}