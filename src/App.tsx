import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
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
        </div>
      </div>
    </>
  );
}

export default App;
