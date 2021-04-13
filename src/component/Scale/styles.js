import styled from "styled-components";

export const RoundScaleContainer = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  height: ${({ size, half }) =>
    half ? (size ? size / 2 + "px" : "75px") : "auto"};
  width: ${({ size, half }) =>
    half ? (size ? size + "px" : "150px") : "auto"};
  overflow: hidden;
`;

export const RoundScaleScale = styled.div`
  width: ${({ size }) => (size ? size + "px" : "150px")};
  transform: ${({ half }) => (half ? "rotate(-90deg)" : "rotate(0deg)")};
  height: ${({ size }) => (size ? size + "px" : "150px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ range, color, baseColor, centerColor = "black" }) =>
    range < 26
      ? baseColor
        ? baseColor === "transparent"
          ? centerColor
          : baseColor
        : "#555454"
      : range > 26 && range < 50
      ? color || "chartreuse"
      : range > 49
      ? "transparent"
      : "none"};
  background-image: ${({
    range,
    color,
    baseColor,
    centerColor = "black",
    half,
  }) =>
    range < (half ? 51 : 26)
      ? `linear-gradient( ${-(90 - range * (half ? 1.8 : 3.6))}deg, 
        ${
          baseColor
            ? baseColor === "transparent"
              ? centerColor
              : baseColor
            : "#555454"
        } 
          50%, transparent 50%),linear-gradient(90deg, ${
            half ? (baseColor ? baseColor : "transparent") : "transparent"
          } 50%,  ${color || "chartreuse"} 50%)`
      : range > (half ? 51 : 26) && range < (half ? 100 : 50)
      ? `linear-gradient( ${range * (half ? 1.8 : 3.6) - 90}deg,${
          baseColor
            ? baseColor === "transparent"
              ? centerColor
              : baseColor
            : "#555454"
        }  50%, transparent 50%),linear-gradient(90deg, ${
          baseColor
            ? baseColor === "transparent"
              ? centerColor
              : baseColor
            : "#555454"
        }  50%,  ${half ? (color ? color : "chartreuse") : "transparent"} 50%)`
      : (half ? range === 100 : range > 49)
      ? `linear-gradient( ${
          range * (half ? 1.8 : 3.6) - 90
        }deg, transparent 50%, ${
          color || "chartreuse"
        } 50%),linear-gradient(90deg, ${
          baseColor
            ? baseColor === "transparent"
              ? centerColor
              : baseColor
            : "#555454"
        } 50%, ${color || "chartreuse"} 50%)`
      : "none"};
`;
export const RoundScaleCover = styled.div`
  width: ${({ thickness }) => thickness + "%" || "95%"};
  height: ${({ thickness }) => thickness + "%" || "95%"};
  background: ${({ centerColor = "black" }) => centerColor};
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${({ half }) => (half ? "rotate(90deg)" : "rotate(0deg)")};
`;
export const RoundScaleTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ half }) => (half ? "50%" : 0)};
`;
export const RoundScaleRange = styled.h5`
  font-weight: 600;
  margin: 0 0 10px;
  color: ${({ theme }) => (theme ? theme.palette.common.white : "red")};
  display: ${({ noText }) => (noText ? "none" : "block")};
`;
export const RoundScaleName = styled.small`
  display: ${({ noText }) => (noText ? "none" : "block")};
  text-align: center;
  color: ${({ theme }) => (theme ? theme.palette.common.white : "red")};
  font-weight: 600;
`;
// --------------------------divider-------------------
export const BarScaleContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
  height: ${(props) => (props ? props.height + "px" : "300px")};
  width: ${(props) => (props ? props.width + "px" : "300px")};
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const BarScaleName = styled.h5`
  position: absolute;
  top: -20px;
  color: white;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  font-size: 12px;
  margin: 0;
`;
export const BarScaleRange = styled.div`
  min-width: 100%;
  height: ${({ range }) => range + "%"};
  position: relative;
  clip-path: ${({ range, width, height }) =>
    `path("
  M${width / 2},0  
  Q${width / 2},${(range / 100) * height}   0,${(range / 100) * height}  
  H ${(range / 100) * height} ,${width}   
  Q${width / 2},${(range / 100) * height}  ${width / 2} 0  Z 
    ")`};
  background: ${({
    topColor = "white",
    bottomColor = "red",
    middleColor = "blue",
  }) =>
    `linear-gradient(to bottom, ${topColor} 29%, ${middleColor},${bottomColor} 89%)`};

  &:after {
    content: "${({ range }) => `${range}% `}";
    height: 20px;
    text-align: center;
    color: black;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5px;
    margin: auto;
  }
`;
