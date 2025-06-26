import React from 'react';
import styled from 'styled-components';

interface HoverButtonProps {
  text: string;
  imgSrc: string;
  alt?: string;
  link: string; // URL to redirect to
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, imgSrc, alt, link }) => {
  return (
    <StyledWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" className="cta">
        <span className="hover-underline-animation">{text}</span>
        <img src={imgSrc} alt={alt} className="logo" />
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-decoration: none;
    color: black;
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px 10px;
    white-space: nowrap; /* <-- prevents text from wrapping */
  }

  .hover-underline-animation {
    position: relative;
    padding-bottom: 4px;
    letter-spacing: 2px;  /* ⬅️ reduced spacing to fit better */
    font-size: 14px;
    text-transform: uppercase;
    white-space: nowrap; /* ensures text stays on one line */
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .logo {
    width: full;
    height: 48px;
    transition: transform 0.3s ease;
  }

  .cta:hover .logo {
    transform: translateX(30px);
  }
`;


export default HoverButton;
