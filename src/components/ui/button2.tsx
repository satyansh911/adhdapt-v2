import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label?: string;
  bgcolor?: string;      // background of inner button layer
  hovercolor?: string;   // outline on hover and focus
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  bgcolor = "#facc15",       // default yellow-400
  hovercolor = "#c3d900",    // default hover/focus outline
}) => {
  return (
    <StyledWrapper bgcolor={bgcolor} hovercolor={hovercolor}>
      <button className="button">
        <div><span>{label}</span></div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ bgcolor: string; hovercolor: string }>`
  .button {
    --stone-50: #fafaf9;
    --stone-800: #292524;
    --button-bg: ${({ bgcolor }) => bgcolor};
    --hover-outline: ${({ hovercolor }) => hovercolor};

    font-size: 1rem;
    cursor: pointer;
    position: relative;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    line-height: 1;
    padding: 1px;
    transform: translate(-4px, -4px);
    outline: 2px solid transparent;
    outline-offset: 5px;
    border-radius: 9999px;
    background-color: var(--stone-800);
    color: var(--stone-800);
    transition:
      transform 150ms ease,
      box-shadow 150ms ease;
    text-align: center;
    box-shadow:
      0.5px 0.5px 0 0 var(--stone-800),
      1px 1px 0 0 var(--stone-800),
      1.5px 1.5px 0 0 var(--stone-800),
      2px 2px 0 0 var(--stone-800),
      2.5px 2.5px 0 0 var(--stone-800),
      3px 3px 0 0 var(--stone-800),
      0 0 0 2px var(--stone-50),
      0.5px 0.5px 0 2px var(--stone-50),
      1px 1px 0 2px var(--stone-50),
      1.5px 1.5px 0 2px var(--stone-50),
      2px 2px 0 2px var(--stone-50),
      2.5px 2.5px 0 2px var(--stone-50),
      3px 3px 0 2px var(--stone-50),
      3.5px 3.5px 0 2px var(--stone-50),
      4px 4px 0 2px var(--stone-50);

    &:hover {
      transform: translate(0, 0);
      box-shadow: 0 0 0 2px var(--hover-outline);
    }

    &:active,
    &:focus-visible {
      outline-color: var(--hover-outline);
    }

    &:focus-visible {
      outline-style: dashed;
    }

    & > div {
      position: relative;
      pointer-events: none;
      background-color: var(--button-bg);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 9999px;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 9999px;
        opacity: 0.5;
        background-image: radial-gradient(
            rgb(255 255 255 / 80%) 20%,
            transparent 20%
          ),
          radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%);
        background-position:
          0 0,
          4px 4px;
        background-size: 8px 8px;
        mix-blend-mode: hard-light;
        animation: dots 0.5s infinite linear;
      }

      & > span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        gap: 0.25rem;
        filter: drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.25));
        color:#fff;

        &:active {
          transform: translateY(2px);
        }
      }
    }
  }

  @keyframes dots {
    0% {
      background-position:
        0 0,
        4px 4px;
    }
    100% {
      background-position:
        8px 0,
        12px 4px;
    }
  }
`;

export default Button;
