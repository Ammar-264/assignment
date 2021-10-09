import { Link } from "react-router-dom";
import ButtonAppBar from "../../components/navbar/navbar";
import './login.css';


function LogIn(){
    return(
        <div>
            <ButtonAppBar/>
            <div className='main'>


            <div className='logInForm'>
                <div className='inputs'>

             
                <b>EMAIL </b><br/>
                <input type='email' className='inp' placeholder='Email' /><br/>
                <b>PASSWORD </b><br/>
                <input type='password' className='inp' placeholder='Passsword' /><br/>
                </div>
               <Link className='link' to='/signup' >Dont Have An Account?</Link><br/>
                <button>LogIn </button>

            </div>
            </div>

        </div>

    )
}


export default LogIn;