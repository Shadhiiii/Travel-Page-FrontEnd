import Imgg from './shadhiya.jpeg';
import Imagee from './travel4.jpg'
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Nav(){
    const navigate = useNavigate();
    function handleSubmit() {
        navigate('/SignUP')
    }
    return(
        <>
        <>
        <div className="navba">
            <h1>Travel</h1>
            <div className="button">
                        <button onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
        </>
        <div className='navbar'>
            <div className='det'>
            <h1>Welcome to TRAVEL WITH SHADHII!</h1>
            <p>My name is shadhiya,I am from Nilambur</p>
            <p>Welcome to TRAVEL WITH SHADHI,</p>
            <p>your ultimate guide to discovering the world's most</p>
            <p>breathtaking destinations. Join us as we explore hidden gems,</p>
            <p>share travel tips, and inspire your next adventure.</p>
            <p>Whether you're a seasoned traveler or just starting out,</p>
            <p>our page is your passport to wanderlust.</p>
            <p>Let's embark on this journey together!</p>
        </div>
        <div>
            <img src ={Imgg} className='shad'></img>
        </div> 
        </div>  
        <div className='navbar2'>
            <div className='detl'>
            <h1>Services we provide!</h1>
            <p> Our services include personalized travel planning,</p>
            <p>exclusive tour packages, seamless hotel bookings,</p>
            <p>and hassle-free transportation arrangements. </p>
            <p>Whether you're seeking a luxurious getaway,</p>
            <p>an adventurous excursion, or a serene retreat,</p>
            <p>our expert team is dedicated to providing exceptional service</p>
            <p>and ensuring every detail of your trip is perfect.</p>
            <p>Discover the world with us and make your travel dreams a reality!!!</p>
        </div>
        <div className='hello'>
            <img src ={Imagee}></img>
        </div>
        </div>
        </>
        )
}
export default Nav;