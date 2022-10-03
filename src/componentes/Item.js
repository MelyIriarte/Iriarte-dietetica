import { ImEyePlus } from 'react-icons/im'
import { Link } from 'react-router-dom';

function Item({id ,img , precio}) { 
 return (
    <div className='content'>
      <img src={img}  alt="/"  /> 
      <button className='buttonCard' > ${precio} </button>
      <button className='buttonCard-detalle'><Link to={`/item/${id}`}><ImEyePlus fontSize="20px" /></Link></button>
   </div>
  );
}

export default Item;
