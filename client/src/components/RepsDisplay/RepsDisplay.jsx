import './RepsDisplay.scss';

import profilePicture from '../../assets/profile-picture.jpeg';

const RepsDisplay = (props) => {

    const { repData } = props;

    return (

        <div className='rep-container'>
            <div className='rep-container__picture-container'>
                <img className='rep-container__picture-container--picture' src={profilePicture} alt='rep picture'/>
            </div>
            <div>
                <h6>Name:</h6>
                <p className='rep-container__picture-container--rep-data'>John Cena</p>
                <h6>Phone:</h6>
                <p className='rep-container__picture-container--rep-data'>+1 111-111-1111</p>
                <h6>Email:</h6>
                <p className='rep-container__picture-container--rep-data'>email@email.com</p>
                <h6>Country:</h6>
                <p className='rep-container__picture-container--rep-data'>Canada</p>

            </div>
        </div>
    )
};

export default RepsDisplay;