import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootStore } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationName, setReservationName] = useState('');
  const reservations = useSelector(
    (state: RootStore) => state.reservations.value
  );
  const customers = useSelector((state: RootStore) => state.customers.value);
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard key={name} index={index} name={name} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
