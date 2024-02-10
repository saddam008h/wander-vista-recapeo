import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import TableList from './TableList';
import TableListTwo from './TableListTwo';



function ButtonGroup() {

  const [showComponentOne, setShowComponentOne] = useState(true);

  const showComponent = (componentOne) => {
    setShowComponentOne(componentOne);
  };

  return (
<>
    
    <Button.Group>
     
      <Button  onClick={() => showComponent(true)}   color="gray">Categorys</Button>
      <Button  onClick={() => showComponent(false)} color="gray">Buses</Button>
       
    </Button.Group>

{ showComponentOne ? <TableList /> : <TableListTwo />  }

</>
  );
}


 

export default ButtonGroup

 
// const ButtonGroup = () => {
  

//   return (
//     <div>
//       <button onClick={() => showComponent(true)}>Show Component One</button>
//       <button onClick={() => showComponent(false)}>Show Component Two</button>

//       {showComponentOne ? <ComponentOne /> : <ComponentTwo />}
//     </div>
//   );
// };

// export default ButtonGroup;
