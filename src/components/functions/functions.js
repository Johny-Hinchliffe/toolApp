import { useState } from 'react'

const Dice = ({diceCount, diceSides}) => {
    
    let state = []
    
	for (let i = 0; i < diceCount; i++) {
        console.log({diceCount : i})
        state += Math.round(Math.random() * diceSides - 1) + 1
	}

    console.log(state)
    
}

export default Dice
