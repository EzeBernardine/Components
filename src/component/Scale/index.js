/*
 * component: scale
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */
import React from "react";
import {
  RoundScaleContainer,
  BarScaleContainer,
  Scale,
  Cover,
  TextWrap,
  Range,
  Name,
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
      <Scale
        baseColor={baseColor}
        half={half}
        size={size}
        range={scale.range}
        color={color}
        centerColor={centerColor}
      >
        <Cover
          thickness={thickness}
          centerColor={centerColor}
          half={half}
          noText={noText}
        >
          <TextWrap half={half}>
            <Range noText={noText}> {value ? value : scale.range}</Range>
            <Name noText={noText}>{scale.name}</Name>
          </TextWrap>
        </Cover>
      </Scale>
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
