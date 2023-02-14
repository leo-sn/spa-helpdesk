import '../Home/Home.scss';
import SideBar from '../../components/SideBar/SideBar';
import WorkStationHome from '../../components/WorkStationHome/WorkStationHome';


const Home = (props) => {

    const { userDetails, services } = props

    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'home'}/>
                    <WorkStationHome/>
                </div>
            </div>
        </> 
    )
}

export default Home;