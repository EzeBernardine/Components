import styled from "styled-components";

export const ModalWrap = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  background: ${({ canClose }) =>
    canClose ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.44)"};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  .overlay {
    z-index: -1;
    position: fixed;
    touch-action: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
    transform: ${(props) =>
      props.show ? "translateY(0)" : "translateY(-80vh);"};
    .cannotInspect {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .modalBody {
      position: relative;
      max-width: 500px;
      @media (max-width: 500px) {
        width: 90%;
      }
      width: 100%;

      max-height: 80vh;
      height: max-content;
      overflow: hidden;
      border-radius: 6px;
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      background-color: #fff;
      display: flex;
      justify-content: center;
      .modalWrap {
        height: 100%;
        width: 100%;
        & > header {
          position: relative;
          height: 60px;
          width: 100%;
          background: white;
          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.27);
          right: 0;
          left: 0;
          top: 0;
        }
        .modalHead {
          width: 60%;
          position: absolute;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 10px;
          h2 {
            font-size: 1rem;
            color: #58546b;
            font-weight: bold;
            margin: 0 15px;
            text-align: center;
            padding-bottom: 10px;
          }
        }
        .closeBtn {
          position: relative;
          right: 30px;
          float: right;
          top: 20px;
          cursor: pointer;
        }
      }
      .modalContainer {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
        max-height: 70vh;

        & > div {
          width: 100%;
          min-width: 100%;
        }
        .form {
          margin: 0;
        }
        .title {
          display: none;
        }
      }
    }
  }
`;
