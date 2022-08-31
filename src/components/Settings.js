import React from 'react'
import Dice from './functions/functions'

const Settings = () => {
  return (<>
  <div>Settings</div>
  <Dice diceCount={2} diceSides={6}/>
  </>
  )
}

export default Settings