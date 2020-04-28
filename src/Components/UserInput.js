import React from 'react'

const userInput = (props) => {
  const style = {
    borderRadius: '5px',
    font: 'inherit',
    margin: '10px 0 15px',
    padding: '7px 5px'

  }
  return (
    <input type='text' style={style} onClick={props.edit} value={props.username}/>
  )
};

export default userInput;