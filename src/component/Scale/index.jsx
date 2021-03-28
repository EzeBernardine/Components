/*
 * component: scale
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */
import React from "react";
import { RoundStyles, BarStyles } from "./styles";

export const RoundScale = ({
  scale,
  baseColor,
  thickness,
  color,
  centerColor,
  noText,
  half,
  height,
  width,
  value,
}) => {
  return (
    <RoundStyles
      className="scale-scale"
      range={scale.range}
      baseColor={baseColor}
      color={color}
      centerColor={centerColor}
      thickness={thickness}
      noText={noText}
      half={half}
      height={height}
      width={width}
    >
      <div className="scale-range">
        <div className="scale-cover">
          <div className="scale-test">
            <h5> {value ? value : scale.range}</h5>
            <small>{scale.name}</small>
          </div>
        </div>
      </div>
    </RoundStyles>
  );
};

export const BarScale = ({ scale, headBgColor, bottomgColor, ...props }) => {
  return (
    <>
      <BarStyles
        className="stack"
        range={scale.range}
        headBgColor={headBgColor}
        rangeBgColor="#00FFCCCF"
        bottomgColor={bottomgColor}
        {...props}
      >
        <span className="name">{scale.name}</span>
        <div className="scale-range" />
      </BarStyles>
    </>
  );
};
