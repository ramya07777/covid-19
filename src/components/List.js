import React, {useState} from 'react';
import './List.css';
import { deleteContact, editContact } from "../Redux toolkit/Slice";
import { useDispatch } from 'react-redux';

function List({props}) {


  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(props.name);
  const [editedLname, setEditedLname] = useState(props.Lname);
  const [editedStaus, setEditedStatus] = useState(props.status);

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
   dispatch(deleteContact(props.id));
  };

  const handleSaveClick = () => {
    // Update the user's name and email here
    // For now, we're just updating the state in the component
      dispatch(editContact({ id: props.id, name: editedName, lname: editedLname, status: editedStaus  }));
    setIsEditing(false);  
  };

  
  return (

    
    <div className='list'>
    <div className='list__items'>
    <div className='list__name'>

   { isEditing ?
(
        <>
          <input  type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="text" value={editedLname} onChange={(e) => setEditedLname(e.target.value)} />
          <input type="text" value={editedStaus} onChange={(e) => setEditedStatus(e.target.value)} />
   </>
      ) :  (<>
      <p>{props.name} {props.lname}</p>
 
      <p>{props.status}</p>
       </> )}
    </div> 

    { isEditing ? (<button onClick={handleSaveClick} className='edit'>save</button> ):
      (<button onClick={() => setIsEditing(true)} className='edit'>Edit</button> )   }
        
    <button onClick={handleDeleteClick} className='delete'>Delete</button>
    </div>
    </div> 

  
  );
}
 
export default List;