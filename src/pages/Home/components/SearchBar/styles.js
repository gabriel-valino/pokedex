import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px;
  padding-left: 18px;
  background-color: #fff;

  input {
    border: none;
    outline: none;
    font-size: 18px;
    flex: 1;
  }

  input:focus {
    box-shadow: none;
  }

  button {
    display: flex;
    border: none;
    padding: 6px;
    background-color: ${(props) => props.theme.red};
    border-radius: 10px;
    cursor: pointer;
    box-shadow: #ff535088 5px 5px 15px;
    align-items: center;
    border: 2px transparent solid;

    &:focus {
      border: 2px ${(props) => props.theme['dark']} solid;
    }
  }

  button:hover {
    background-color: #ff1c1c;
  }

`