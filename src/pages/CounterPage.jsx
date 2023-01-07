import { useState } from "react"

const counterPage = ({ initialCount }) => {

    const [count, setCount] = useState(initialCount);

    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setValueToAdd(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

  return (
    <div className="container">
        <div className="counter">
            <h1>Count is {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="number"
                value={valueToAdd || ""}
                onChange={handleChange}
                />
                <button>Add it!</button>
            </form>
        </div>
    </div>
  );
}

export default counterPage