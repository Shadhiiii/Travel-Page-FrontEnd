import Immage from './error.png';
import './errorstyle.css';
import { useNavigate } from 'react-router-dom';
function Err(){
    const navigate = useNavigate();
    function handleSubmit1() {
        navigate('/SignUP')
        }
    function handleSubmit2() {
        navigate('/Home')
        }    
    return(
        <>
            <div className="nav5">
                <div className="nav6">
                    <h1>404 ERROR!</h1>
                </div>
                <img src ={Immage} className='shad'></img>
                <div className="button">
                    <button onClick={handleSubmit1}>Sign Up</button>
                    <button onClick={handleSubmit2}>Home</button>
                </div>
            </div>
        </>
    )
 }
 export default Err;
