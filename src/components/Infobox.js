import React from 'react';
import "./Infobox.css";

function Infobox({title, cases, total, ...props}) {
  return (
    <div onClick={props.onClick} className='infobox'>
    <div className='info___info'>
<p className='info__title'>{title}</p>
<p className='info__cases'>{cases}</p>
<p className='info__total'>{total} total</p>
    </div>

</div>
  );
}

export default Infobox;