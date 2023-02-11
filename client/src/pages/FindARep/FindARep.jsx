import '../Home/Home.scss';
import SideBar from '../../components/SideBar/SideBar';

const FindARep = (props) => {

    const { userDetails, services } = props

    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'find-a-rep'}/>
                    <h1>Find-A-Rep</h1>
                </div>
            </div>
        </> 
    )
}

export default FindARep;