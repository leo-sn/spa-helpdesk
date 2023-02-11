import '../Home/Home.scss';
import SideBar from '../../components/SideBar/SideBar';
import WorkStation from '../../components/WorkStation/WorkStation';


const Home = (props) => {

    const { userDetails, services } = props

    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'home'}/>
                    <WorkStation/>
                </div>
            </div>
        </> 
    )
}

export default Home;