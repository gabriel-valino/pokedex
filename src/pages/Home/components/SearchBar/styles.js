import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
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

  img {
    padding: 8px;
    background-color: ${(props) => props.theme.red};
    border-radius: 10px;
    cursor: pointer;
    box-shadow: #ff535088 5px 5px 15px;
  }

  img:hover {
    background-color: ${(props) => props.theme['red-500']};
  }
`