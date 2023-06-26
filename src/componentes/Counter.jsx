import { useCounter } from '../hooks/useCounter';

const Counter = () => {

    const { value, increment, decrement, reset } = useCounter(0)

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Ejercicio Hook Perzonalizado</h1>
            <h2>useCounter</h2>
            <div style={{display: "flex", justifyContent: "space-evenly", borderRadius: "3px", marginBottom: "42px", width: "50%"}}>
                <button onClick={increment}>
                    +
                </button>
                <p>Valor del contador: {value}</p>
                <button onClick={decrement}>
                    -
                </button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Counter;
