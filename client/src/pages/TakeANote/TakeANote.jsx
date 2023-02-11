import '../TakeANote/TakeANote.scss';
import SideBar from '../../components/SideBar/SideBar';
import UnderConstruction from '../../components/UncerConstruction/UnderConstruction';


const TakeANote = (props) => {

    const { userDetails, services } = props;
    
    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={' active'}/>
                    <UnderConstruction/>
                </div>
            </div>
        </> 
    )
}

export default TakeANote;