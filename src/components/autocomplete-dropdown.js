import React from "react"
import styled from "styled-components"
import Select, { components } from "react-select"

import dropDownArrow from "../images/ontario-dropdown-arrow.svg"

const DownChevron = styled.div`
  background: url(${dropDownArrow});
  background-size: 100%;
  width: 2rem;
  height: 2rem;
  position: relative;
  right: 0.2rem;
  top: -0.2rem;
`

const ErrorDiv = styled.div`
  background-color: #ffecee;
  border-left: 4px solid #cd0000;
  color: #cd0000;
  padding: 1rem;
  position: relative;
  margin-bottom: 1.5rem;
`

const StyledSelectLabel = styled.span`
  color: #1a1a1a;
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.1875rem;
  font-weight: 700;
  letter-spacing: 0.025rem;
  line-height: 1.56;
`

const StyledDropDown = styled.div`
  margin-bottom: 3rem;
  .ontario-input {
    margin-bottom: 1rem;
  }
  .dropdownError {
    border: 3px solid #cd0000;
  }
  &:focus {
    border: thin solid blue;
  }
`

const customSelectStyles = {
  control: () => ({}),
  input: () => ({
    border: "2px solid #1a1a1a",
    borderRadius: "4px",
    boxSizing: "border-box",
    padding: ".625rem 1rem",
    maxWidth: "46em",
    lineHeight: "1.5",
    color: "#1a1a1a",
    fontSize: "1rem",
    fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
}),
  menu: () => ({
    backgroundColor: "white",
    width: "calc(100% - 4px)",
    marginTop: "1.8rem",
    border: "2px solid #1a1a1a",
    borderTop: "1px solid grey",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    position: "absolute",
    zIndex: "100",
    padding: "1rem 0",
  }),
  menuList: () => ({
    maxHeight: "150px",
    backgroundColor: "white",
    overflowY: "auto",
  }),
  indicatorsContainer: () => ({
    marginTop: "-2rem",
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  dropdownIndicator: () => ({
    float: "right",
    width: "26px",
    position: "relative",
    right: "0.5rem",
    top: "-0.3rem",
  }),
  placeholder: () => ({
    color: "#666",
    position: "absolute",
    padding: ".625rem 1rem",
    top: "0.2rem",
    focus: "border: thin solid red;"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 1
    const transition = "opacity 300ms"
    return { ...provided, opacity, transition,
      width: "calc(100% - 50px)",
      padding: ".625rem 1rem",
    }
  },
}

const DropDownIcon = () => {
  return <DownChevron />
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  )
}

const AutocompleteDropdown = ({
  selectId,
  selectTitle,
  selectOptions,
  selectOptionComponent,
  selectValue,
  getSelectOptionLabel,
  getSelectOptionValue,
  onSelectChange,
  selectError,
  selectErrorMessage,
  placeholerText,
  noOptionsText,
}) => {
  // This allows us to pass in a customized option component for the dropdown menu
  const CustomOption = selectOptionComponent
  const customSelectComponents = CustomOption ? { DropdownIndicator, Option: CustomOption } : { DropdownIndicator }

  return (
    <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
      <div className="ontario-small-12 ontario-medium-8 ontario-large-6 ontario-columns ontario-small-centered">
        <label className="ontario-label" htmlFor={selectId}>
          <StyledSelectLabel>{selectTitle}</StyledSelectLabel>
        </label>
        <StyledDropDown>
          <Select
            placeholder={placeholerText}
            value={[selectValue]}
            components={customSelectComponents}
            styles={customSelectStyles}
            id={selectId}
            name={selectId}
            options={selectOptions}
            getOptionLabel={getSelectOptionLabel}
            getOptionValue={getSelectOptionValue}
            onChange={onSelectChange}
            noOptionsMessage={() => noOptionsText}
          />
        </StyledDropDown>
        {selectError && <ErrorDiv>{selectErrorMessage}</ErrorDiv>}
      </div>
    </div>
  )
}

export default AutocompleteDropdown
