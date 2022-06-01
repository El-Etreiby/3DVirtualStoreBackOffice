import'./Backdrop.css';

function Backdrop({show,click}) {

  if(show)
    return  <div className="backdrop" onClick={click}></div>;

  else
    return false;
 
}
export default Backdrop;
