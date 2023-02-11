import '../BookARoom/BookARoom.scss';
import SideBar from '../../components/SideBar/SideBar';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';

const BookARoom = (props) => {

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

export default BookARoom;