import { Grid } from 'semantic-ui-react'  
import React, { useState } from 'react';
import Cell from './cell'

const GameGrid = () => { 
  const [matrixResult, setMatrixResult] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ])

  const defaultMatrix = [
    '-','-','-',
    '-','-','-',
    '-','-','-',
  ];

  const [gameMatrix, setGameMatrix] = useState(defaultMatrix)

  const [winnerSymbol, setWinnerSymbol] = useState('')

  const [player, SetPlayer] = useState(1)

  const checkResult = () => {
    for(var result = 0; result < matrixResult.length; result++) { //check if there is a winner
        let resultIndex1 = matrixResult[result][0]
        let resultIndex2 = matrixResult[result][1]
        let resultIndex3 = matrixResult[result][2]
        let result1Value = gameMatrix[resultIndex1]

        if(result1Value != '-' && result1Value == gameMatrix[resultIndex2] && gameMatrix[resultIndex2] ==  gameMatrix[resultIndex3]) {
          setWinnerSymbol(result1Value)
          setTimeout(function(){
            setGameMatrix(defaultMatrix) //Reset game
         }, 2000);//wait 2 seconds
        }
    }
    //Null match
    let matrixIsFull = gameMatrix.find((cellValue)=> cellValue == '-') == undefined ? true : false
    console.log(gameMatrix.find((cellValue)=> cellValue == '-'))
    console.log(matrixIsFull)
    if(matrixIsFull) {
      setWinnerSymbol('Aucun (égalité)')
      setGameMatrix(defaultMatrix) //Reset game
    }
  }

  const switchPlayer = () => { //Change player
    if(player == 1) {
      SetPlayer(0)
    } else {
      SetPlayer(1)
    }
  }

  //Update checked cell in matrix game
  const updateGameMatrix = (x, y, value) => {
    let cellIndex = 3*x+y //find cellIndex by its coordinate 
    let newGameMatrix = gameMatrix //Editable matrix
    newGameMatrix[cellIndex] = value //Edit checked cell value in matrix
    setGameMatrix(newGameMatrix) //Update matrix game
    checkResult() //Check if there is a winner
  }

  return (
    <div>
      <p style={{visibility: winnerSymbol != '' ? 'visible' : 'hidden' }}>Le gagnant est : {winnerSymbol}</p>
      <Grid columns={3} divided className="game-grid">
      <Grid.Row>
        <Grid.Column>
          <Cell x={0} y={0} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)} />
        </Grid.Column>
        <Grid.Column>
          <Cell x={0} y={1} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)} />
        </Grid.Column>
        <Grid.Column>
          <Cell x={0} y={2} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)} />
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row>
        <Grid.Column>
          <Cell x={1} y={0} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
        <Grid.Column>
          <Cell x={1} y={1} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
        <Grid.Column>
          <Cell x={1} y={2} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row>
        <Grid.Column>
          <Cell  x={2} y={0} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
        <Grid.Column>
          <Cell x={2} y={1} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
        <Grid.Column>
          <Cell x={2} y={2} player={player} switchPlayer={switchPlayer} updateGameMatrix={(x, y, value)=>updateGameMatrix(x, y, value)}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  )
}

export default GameGrid;