import React, { useState } from 'react'
import Button from "./Button";

const TodoRow = ({children, deleteTask}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      className="flex justify-between items-center py-1"
    >
        {children}
        {hovered && (
          <Button 
            text="X" 
            variant="small" 
            onClick={deleteTask} 
            className="absolute right-0 top-0 bg-red-600"
          />
        )}
    </div>
  )
}

export default TodoRow;