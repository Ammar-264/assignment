import { Link } from "react-router-dom";
import ButtonAppBar from "../../components/navbar/navbar";
import './signup.css';


function SignUp(){
    return(
        <div>
            <ButtonAppBar/>
            <div className='main'>


            <div className='signUpForm'>
                <div className='inputs'>

                <b>FULL NAME</b><br/>
                <input type='text' className='inp' placeholder='Full Name' /><br/>
                <b>EMAIL </b><br/>
                <input type='email' className='inp' placeholder='Email' /><br/>
                <b>PASSWORD </b><br/>
                <input type='password' className='inp' placeholder='Passsword' /><br/>
                </div>
                <Link to='/login'>already have an account</Link><br/>
                <button>Sign Up</button>

            </div>
            </div>

        </div>

    )
}


export default SignUp;