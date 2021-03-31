import { useState } from "react"

const Cell = ({x, y, player, switchPlayer, updateGameMatrix}) => {
    const [displayedValue, setDisplayedValue] = useState('-')

    const onCheckCell = () => {
        if(displayedValue == '-') {
            if(player == 1) {
                setDisplayedValue('X')
                updateGameMatrix(x, y, 'X')
                switchPlayer()
                
            } else {
                setDisplayedValue('O')
                updateGameMatrix(x, y, 'O')
                switchPlayer()
            }
        }
        
    }

    return (
    <button className='game-cell' onClick={()=>onCheckCell()}>
        <text>{displayedValue}</text>
    </button>
    )

    
}


export default Cell