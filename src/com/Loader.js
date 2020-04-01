import React from "react";
import styled from "styled-components";

const LoaderStyled = styled.svg`
  animation: spin ${({ timeSpin }) => (timeSpin ? timeSpin + "s" : "1s")} linear
    infinite;
  & .path {
    stroke-dasharray: ${({ circumference }) => circumference};

    animation: dash ${({ timeDash }) => (timeDash ? timeDash + "s" : "2s")}
      linear infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: ${({ circumference }) => circumference};
    }

    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader({
  size = 120,
  strokeWidth = 10,
  strokeLinecap = "round",
  timeSpin = "1s",
  timeDash = "2s",
  bgColor,
  color,
  fill = "transparent",
  qty = 1
}) {
  const pos = size / 2;
  const radius = pos - strokeWidth;
  const circumference = (2 * Math.PI * radius) / qty;
  return (
    <LoaderStyled
      width={size}
      height={size}
      timeSpin={timeSpin}
      timeDash={timeDash}
      circumference={circumference}
    >
      <circle
        stroke={bgColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill={fill}
        r={radius}
        cx={pos}
        cy={pos}
      />
      <circle
        className="path"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill={fill}
        r={radius}
        cx={pos}
        cy={pos}
      />
    </LoaderStyled>
  );
}
