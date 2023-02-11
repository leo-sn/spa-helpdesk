import '../Home/Home.scss';
import SideBar from '../../components/SideBar/SideBar';
import WorkStation from '../../components/WorkStation/WorkStation';
import homeIcon from '../../assets/icons/home.png';
import findARepIcon from '../../assets/icons/user.png';
import takeANoteIcon from '../../assets/icons/pencil.png';
import bookARoomIcon from '../../assets/icons/meeting.png';


const Home = (userDetails) => {

    const services = [
        {title:'HOME', iconPath: homeIcon}, 
        {title:'FIND-A-REP', iconPath:findARepIcon},
        {title: 'TAKE-A-NOTE', iconPath:takeANoteIcon},
        {title:'BOOK-A-ROOM', iconPath:bookARoomIcon}];

    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={}/>
                    <WorkStation/>
                </div>
            </div>
        </> 
    )
}

export default Home;