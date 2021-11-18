import { Button } from "@material-ui/core";
import { useState } from "react";
import "./styles.css";

const useSum = () => {
  const [value, setValue] = useState(0);

  const incremento = () => {
    setValue(value + 1);
  };
  const decremento = () => {
    if (value <= 0) {
      setValue(0);
    } else setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  return { value, incremento, decremento, reset };
};

export default function App() {
  const { value, incremento, decremento, reset } = useSum();
  const counterLeft = useSum();
  const counterRight = useSum();
  return (
    <div className="App">
      <h1>Haciendo Pruebas</h1>
      <h1>{value}</h1>
      <Button key="button1" onClick={incremento}>
        +
      </Button>
      <Button key="button2" onClick={decremento}>
        -
      </Button>
      <Button key="button3" onClick={reset}>
        reset
      </Button>
      <h1>{counterLeft.value}</h1>
      <Button
        key="counterLeft1"
        variant="outlined"
        onClick={counterLeft.incremento}
      >
        +
      </Button>
      <Button
        key="counterLeft2"
        variant="contained"
        onClick={counterLeft.decremento}
      >
        -
      </Button>
      <Button key="counterLeft3" onClick={counterLeft.reset}>
        reset
      </Button>
      <h1>{counterRight.value}</h1>
      <Button key="counterRight1" onClick={counterRight.incremento}>
        +
      </Button>
      <Button key="counterRight2" onClick={counterRight.decremento}>
        -
      </Button>
      <Button key="counterRight3" onClick={counterRight.reset}>
        reset
      </Button>
    </div>
  );
}
