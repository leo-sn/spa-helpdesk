import './WelcomeBlock.scss';
import logo from '../../assets/icons/phone-book.png';

const WelcomeBlock = (props) => {

    const { userDetail } = props;

    return (
        <div className='welcome-block-container'>
            
            <h3>SPA-FRONTDESK</h3>
            <img className='welcome-block-container--logo' src={logo}></img>
            <h5>Welcome, {userDetail.given_name}</h5>

        </div>
    )
}

export default WelcomeBlock;