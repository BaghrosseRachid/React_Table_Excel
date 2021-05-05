import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: max-content;
  box-sizing: border-box;
  
`;

export const SomeWrapper = styled.table`
  width:300px;
  height:100px;
  border: 3px solid black;
  margin-top: 100px;
  border-collapse: collapse;
  border-spacing: 2px;
  border-color: Yellow;
  
`;

export const TableRow = styled.tr`
 
`;

export const TableCell = styled.td`
  background: white !important;
  font-family: sans-serif;
  padding: 3px;
  text-align: center;
 
  
  &.redCells {
    background: red !important;
    color:white;
  }
  &.whiteCells {
    background: white !important;
    color:black;
  }
 
  width: 100px;
  padding: 0;
  border: 1px solid black;

  &.selected {
    & > span {
      display: block;
      border: 2px solid darkblue;
     
    }
  }

 

`;
