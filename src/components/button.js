import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  display: inline-block;
  background-color: #06c;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: calc(14 / 9);
  margin: 0 0 1.75rem;
  min-width: 10rem;
  padding: calc((1rem + 0.25rem) / 2) 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #00478f;
  }

  &:focus {
    background-color: #00478f;
    -webkit-transition: background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;
    transition: background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;
  }

  &:active {
    background-color: #002142;
    -webkit-transition: background-color 0s, box-shadow 0.1s ease-in-out;
    transition: background-color 0s, box-shadow 0.1s ease-in-out;
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled,
  &:focus:disabled {
    background-color: rgba(0, 102, 204, 0.3);
    color: rgba(255, 255, 255, 0.3);
    cursor: default;
  }

  &:nth-child(2) {
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 40em) {
    display: block;
    width: 100%;

    &:nth-child(2) {
      margin-left: auto;
    }
  }
`

const Button = ({ text, clickHandler, isDisabled }) => (
  <StyledButton type="button" tabIndex="0" onClick={clickHandler} disabled={isDisabled}>
    {text}
  </StyledButton>
)

export default Button
