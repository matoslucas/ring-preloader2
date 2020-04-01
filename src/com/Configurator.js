import React from "react";
import styled from "styled-components";

const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  width: 150px;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  width: 60px;
  padding: 0px;
  border: none;
  margin: 2px;
`;

export default function Configurator({
  size = 120,
  strokeWidth = 10,
  strokeLinecap = "round",
  timeSpin = "1s",
  timeDash = "2s",
  bgColor,
  color,
  fill = "transparent",
  onChange,
  qty
}) {
  /*
  const setDefault = () => {
    onChange({ type: "qty", value: 1 });
    onChange({ type: "strokeWidth", value: 10 });
    onChange({ type: "strokeLinecap", value: "round" });
  };
  const setUmbrella = () => {
    onChange({ type: "umbrella", value: 1 });
    // onChange({ type: "qty", value: 20 });
    // onChange({ type: "strokeWidth", value: 56 });
    // onChange({ type: "strokeLinecap", value: "butt" });
  };
  */
  return (
    <ConfigContainer>
      {/*<Row>
        <Label>Templates:</Label>
        <button onClick={setUmbrella}> Umbrella</button>
        <button onClick={setDefault}> Default</button>
      </Row>*/}
      <Row>
        <Label>Color:</Label>
        <Input
          type="color"
          onChange={e => onChange({ type: "color", value: e.target.value })}
          value={color}
        />
      </Row>
      <Row>
        <Label>BG Color:</Label>
        <Input
          type="color"
          onChange={e => onChange({ type: "bgColor", value: e.target.value })}
          value={bgColor}
        />
      </Row>
      <Row>
        <Label>Size:</Label>
        <Input
          type="number"
          onChange={e => onChange({ type: "size", value: e.target.value })}
          value={size}
          step="1"
        />
      </Row>

      <Row>
        <Label>Qty:</Label>
        <Input
          type="number"
          onChange={e => onChange({ type: "qty", value: e.target.value })}
          value={qty}
          step="1"
        />
      </Row>
      <Row>
        <Label>Stroke Width:</Label>
        <Input
          type="number"
          onChange={e =>
            onChange({ type: "strokeWidth", value: e.target.value })
          }
          value={strokeWidth}
          step="1"
        />
      </Row>
      <Row>
        <Label>Spin time:</Label>
        <Input
          type="number"
          onChange={e => onChange({ type: "timeSpin", value: e.target.value })}
          value={timeSpin}
          step="0.5"
        />
      </Row>

      <Row>
        <Label>Dash time:</Label>
        <Input
          type="number"
          onChange={e => onChange({ type: "timeDash", value: e.target.value })}
          value={timeDash}
          step="0.5"
        />
      </Row>

      <Row>
        <Label>Stroke Linecap:</Label>
        <select
          onChange={e =>
            onChange({ type: "strokeLinecap", value: e.target.value })
          }
          value={strokeLinecap}
        >
          <option value="square">square</option>
          <option value="round">round</option>
          <option value="butt">butt</option>
        </select>
      </Row>
    </ConfigContainer>
  );
}
