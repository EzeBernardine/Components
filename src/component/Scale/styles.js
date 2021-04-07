import styled from "styled-components";

export const RoundStyles = styled.div`
  height: ${({ height, half }) =>
    half ? (height ? height / 2 : "75px") : "auto"};
  width: ${({ height, half }) => (half ? (height ? height : "150px") : "auto")};
  overflow: hidden;
  .scale-range {
    width: ${({ height }) => (height ? height : "150px")};
    transform: ${({ half }) => (half ? "rotate(-90deg)" : "rotate(0deg)")};
    height: ${({ height }) => (height ? height : "150px")};
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
          }  50%,  ${
            half ? (color ? color : "chartreuse") : "transparent"
          } 50%)`
        : (half
          ? range === 100
          : range > 49)
        ? `linear-gradient( ${range * (half ? 1.8 : 3.6) -
            90}deg, transparent 50%, ${color ||
            "chartreuse"} 50%),linear-gradient(90deg, ${
            baseColor
              ? baseColor === "transparent"
                ? centerColor
                : baseColor
              : "#555454"
          } 50%, ${color || "chartreuse"} 50%)`
        : "none"};
    & > .scale-cover {
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
      & > .scale-test {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: ${({ half }) => (half ? "34%" : 0)};
        h5 {
          font-weight: 500;
          display: ${({ noText }) => (noText ? "none" : "block")};
        }
        small {
          display: ${({ noText }) => (noText ? "none" : "block")};
          text-align: center;
          color: #8798ad;
          font-weight: 500;
        }
      }
    }
  }
`;

export const BarStyles = styled.div`



height: ${(props) => (props ? props.height + "px" : "300px")};
width: ${(props) => (props ? props.width + "px" : "300px")};
display: flex;
align-items: flex-end;
position: relative;
& > .name {
  position: absolute;
  top: -20px;
  color: white;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  font-size: 12px;
}
& > .scale-range {
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
    headBgColor = "white",
    bottomgColor = "red",
    rangeBgColor = "blue",
  }) =>
    `linear-gradient(to bottom, ${headBgColor} 29%, ${rangeBgColor},${bottomgColor} 89%)`};

  &:after {
    content: '${({ range }) => `${range}% `}';
    height: 20px;
    text-align: center;
   color: black;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5px;
    margin: auto;
  }
}
`;
