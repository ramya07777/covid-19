import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import List from './List';



function Sidebar() {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className='sidebar'>
<div className='sidebar__left'>
 <div className='sidebar__home'>
     <Link to={"/"} className="contact__link">
<h1 className='side__text' >Contact</h1>
</Link>
 </div>
 <div className='sidebar__chart'>
 <Link to={"/covid"} className="contact__link">
      <h1 className='side__text'>Chart and Maps</h1>
      </Link>
     </div>
    </div>


    <div className='sidebar__right'>

<div className='sidebar__contact'>
<Link to={"/contact"} className="link">
<button className='create__contact'>Create Contact</button>
</Link>
</div>

<div className='test'>
 { contacts.length > 0 ? (contacts?.map((contact) => (
      <List 
            key={contact.id}
            props={contact}
            />
)) ) : (<div className='no__info'>
<AiFillCloseCircle className='close__icon' />
<p className='no__contact'>No Contact Found Please add contact from create contact button</p>
</div>)

}

</div>

</div>


</div>
    
  );
}

export default Sidebar;