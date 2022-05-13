import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div className='containte home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm Brandon
                <br />
                software developer
                </h1>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home