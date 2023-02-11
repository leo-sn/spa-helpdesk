import '../TakeANote/TakeANote.scss';
import SideBar from '../../components/SideBar/SideBar';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';


const TakeANote = (props) => {

    const { userDetails, services } = props;
    
    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'take-a-note'}/>
                    <UnderConstruction/>
                </div>
            </div>
        </> 
    )
}

export default TakeANote;