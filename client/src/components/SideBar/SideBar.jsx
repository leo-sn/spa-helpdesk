
import './SideBar.scss';
import MenuServices from '../MenuServices/MenuServices'
import WelcomeBlock from '../WelcomeBlock/WelcomeBlock';


const SideBar = (props) => {

    const { currentServices, userDetails, pageActive } = props;

    const user = userDetails;
    const logout = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        )
    }

    return (
        <>
        <div className='sidebar-container'>
            <WelcomeBlock userDetail={user}/>
            <MenuServices currentServices={currentServices} pageActive={pageActive}/>
            <div className='sidebar-container__bottom-bar'>
                <div className='sidebar-container__bottom-bar--notification'>
                    <p id='notification-bar'> This notification identify as a very long notification message </p>
                </div>
                <div className='sidebar-container__bottom-bar--welcome-logout'>
                    <p>Welcome, {user.given_name}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar;