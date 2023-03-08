import SideBar from '../../components/SideBar/SideBar';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';


const ConfigurationPage = (props) => {

    const { userDetails, services } = props;
    
    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'configuration'}/>
                    <UnderConstruction/>
                </div>
            </div>
        </> 
    )
}

export default ConfigurationPage;