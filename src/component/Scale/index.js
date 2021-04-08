/*
 * component: scale
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */
import React from "react";
import {
  RoundScaleContainer,
  BarScaleContainer,
  RoundScaleScale,
  RoundScaleCover,
  RoundScaleTextWrap,
  RoundScaleRange,
  RoundScaleName,
  BarScaleName,
  BarScaleRange,
} from "./styles";

export const RoundScale = ({
  scale,
  baseColor,
  thickness,
  color,
  centerColor,
  noText,
  half,
  size,
  value,
}) => {
  return (
    <RoundScaleContainer half={half} size={size}>
      <RoundScaleScale
        baseColor={baseColor}
        half={half}
        size={size}
        range={scale.range}
        color={color}
        centerColor={centerColor}
      >
        <RoundScaleCover
          thickness={thickness}
          centerColor={centerColor}
          half={half}
          noText={noText}
        >
          <RoundScaleTextWrap half={half}>
            <RoundScaleRange noText={noText}>
              {value ? value : scale.range}
            </RoundScaleRange>
            <RoundScaleName noText={noText}>{scale.name}</RoundScaleName>
          </RoundScaleTextWrap>
        </RoundScaleCover>
      </RoundScaleScale>
    </RoundScaleContainer>
  );
};

export const BarScale = ({
  scale,
  topColor,
  middleColor,
  bottomColor,
  ...props
}) => {
  return (
    <BarScaleContainer {...props}>
      <BarScaleName>{scale.name}</BarScaleName>
      <BarScaleRange
        range={scale.range}
        topColor={topColor}
        middleColor={middleColor}
        bottomColor={bottomColor}
        {...props}
      />
    </BarScaleContainer>
  );
};
