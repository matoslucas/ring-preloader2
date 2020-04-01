import React, { useReducer } from "react";
import styled from "styled-components";
import "./styles.css";
import Loader from "./com/Loader";
import Configurator from "./com/Configurator";

const initialState = {
  size: 120,
  strokeWidth: 10,
  strokeLinecap: "round",
  timeSpin: 2,
  timeDash: 2,
  bgColor: "#D9DDE4",
  color: "#1a73e8",
  fill: "transparent",
  qty: 1
};

const reducer = (state, action) => {
  var clone = { ...state };
  clone[action.type] = action.value;
  return clone;
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;
export default function App() {
  // const [color, setColor] = useState("#004BA8");

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContainer>
      <Loader {...state} />
      <Configurator
        {...state}
        onChange={obj => {
          // console.log(obj);
          dispatch(obj);
        }}
      />
    </AppContainer>
  );
}
