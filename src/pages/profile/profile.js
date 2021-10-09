import ButtonAppBar from '../../components/navbar/navbar';
import './profile.css';
import img from '../../asssests/img.jpg'

export default function Profile(){
    return (
        <div>
            <ButtonAppBar/>
            <div className=''>
            <div className='profilePage'>
                <div className='imgSection'>
                    <img src={img} />
                </div>
                <div className='infoSection'>
                    <h2>Damy Name</h2>
                    <p>lorem ipsum bio data helllo world</p>

                </div>

            </div>


            </div>

        </div>

    )
}