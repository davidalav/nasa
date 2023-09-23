import planets from '../images/planets.png'
import './style.css'
const Home = () => {
    return(
        <div className='home'>
            <img className='planet' src={planets}></img>
        </div>
    )
}

export default Home