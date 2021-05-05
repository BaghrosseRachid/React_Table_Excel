import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "../App.css";
import { Wrapper, SomeWrapper, TableRow, TableCell } from "../ui";
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";

const TableExcel = () => {
  //récupération des données depuis notre API une fois la page load
  useEffect(() => {
    getData();
  }, []);

  //state représente de contenue de notre tableau
  const [grid, setGrid] = useState([]);
  //repérer le position du Click droit
  const [rightClickIndex, setRightClickIndex] = useState(0);
  // state où on va stocker la somme des colonnes séléctionées
  const [sum, setSum] = useState(0);

  //condition globale nécessaire pour faire le calcul de sommesert à controler les deux sens de selection
  //aussi pour assurer que c'est une selection pour calculer la somme
  const areCellsDiff = (start, end) => {
    return ( 
      // case de départ et d'arrivé ayant différent position ligne colone
      (end.i !== start.i && end.j !== start.j) ||
      // ayant la mm ligne mais diff colones
      (end.i === start.i && end.j !== start.j) ||
      // ayant diff lignes mais mm colones
      (end.i !== start.i && end.j === start.j)
    );
  };

  const getData = async () => {
    await axios
      .get("https://node-excel.herokuapp.com/api/students")
      .then((res) => {
        setGrid(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // fonction permet de calculer la somme selon la nature de selection
  const calculeSomme = ({ start, end }) => {
    // console.log({start,end})
    setRightClickIndex(start.i);
    if (areCellsDiff(start, end)) {
      var somme = 0;
      if (
        //type de selection soit sur la mm ligne ou mm colonne soit différentes lignes et colonnes sens ----->
        start.i > end.i ||
        start.j > end.j ||
        (start.i > end.i && start.j > end.j)
      ) {
        for (var k = end.i; k <= start.i; k++) {
          for (var l = end.j; l <= start.j; l++) {
            somme += parseInt(grid[k][l].value);
          }
        }
           //type de selection soit sur la mm ligne ou mm colonne soit différentes lignes et colonnes sens <-----
      } else {
        for (var k = start.i; k <= end.i; k++) {
          for (var l = start.j; l <= end.j; l++) {
            somme += parseInt(grid[k][l].value);
          }
        }
      }
      //mise à jour de state
      setSum(somme);
       // sum diff de 0 implique qu'on a déja selectionné des cases afin de
       // calculer la somme sans oublier de verifier que le type  de selection est une case

    } else if (start.i === end.i && start.j === end.j && sum !== 0) {
      const G = grid.map((row) => [...row]);
      G[start.i][start.j] = { ...G[start.i][start.j], value: sum };
     // console.log(sum);
      setGrid(G);
      setSum(0);
    }
  };
  //handlechange grid
  const handleChangeGrid = (changes) => {
    const G = grid.map((row) => [...row]);
    changes.forEach(({ cell, row, col, value }) => {
      if (!isNaN(value)) {
        G[row][col] = { ...G[row][col], value: value };
      } else {
        alert("veuillez rentrer un nombre !!! ");
      }
    });
    setGrid(G);
  };
  //traitement de click droit
  const handleContextMenu = () => {
    const G = grid.map((row, index) => [...row]);
    for (var t = 0; t < G[0].length; t++) {
      //on récupère la ligne de la cellule selectionné
      var temp = G[rightClickIndex][t];
      // deux classes css à appliquer selon l'état de cellulle
      if (temp.className === "redCells") temp.className = "whiteCells";
      else if (temp.className === "whiteCells") temp.className = "redCells";
      //principe de permutatin 
      G[rightClickIndex][t] = temp;
    }
    setGrid(G);
  };

  return (
    <Wrapper>
      <ReactDataSheet
        data={grid}
        cellRenderer={TableCell}
        sheetRenderer={SomeWrapper}
        rowRenderer={TableRow}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={(changes) => handleChangeGrid(changes)}
        onSelect={({ start, end }) => calculeSomme({ start, end })}
        onContextMenu={handleContextMenu}
      />
    </Wrapper>
  );
};
export default TableExcel;
