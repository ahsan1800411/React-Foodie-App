import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardTypes {
  id: string;
  food: string[];
  name: string;
}
export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const [customerFoodInput, setCustomerFoodInput] = useState('');
  const dispatch = useDispatch();
  const addCustomerFood = () => {
    if (!customerFoodInput) return;
    dispatch(addFoodToCustomer({ id, food: customerFoodInput }));
    setCustomerFoodInput('');
  };
  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map((food) => {
            return <p key={food}>{food}</p>;
          })}
        </div>
        <div className='customer-food-input-container'>
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={addCustomerFood}>Add</button>
        </div>
      </div>
    </div>
  );
}
