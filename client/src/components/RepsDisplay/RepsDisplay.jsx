import './RepsDisplay.scss';

import profilePicture from '../../assets/profile-picture.jpeg';

const RepsDisplay = (props) => {

    const { repName, repEmail, repPhone, repCountry } = props.repData;

    return (

        <div className='rep-container'>
            <div className='rep-container__picture-container'>
                <img className='rep-container__picture-container--picture' src={profilePicture} alt='rep'/>
            </div>
            <div className='rep-container__data-container'>
                <h6>Name:</h6>
                <p className='rep-container__data-container--rep-data'>{repName}</p>
                <h6>Phone:</h6>
                <p className='rep-container__data-container--rep-data'>{repPhone}</p>
                <h6>Email:</h6>
                <p className='rep-container__data-container--rep-data'>{repEmail}</p>
                <h6>Country:</h6>
                <p className='rep-container__data-container--rep-data'>{repCountry}</p>

            </div>
        </div>
    )
};

export default RepsDisplay;