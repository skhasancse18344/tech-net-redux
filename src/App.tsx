import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (payload: number) => {
    dispatch(incrementByAmount(payload));
  };
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleIncrement}
          >
            increment
          </button>
          <span className="text-2xl font-bold mt-4">
            Counter Value:
            {count}
          </span>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded ml-2 mt-4"
            onClick={handleDecrement}
          >
            decrement
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded ml-2 mt-4"
            onClick={() => handleIncrementByAmount(5)}
          >
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
