import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div className='containter home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm Brandon,
                <br />
                Software Developer / College Student
                </h1>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home