import './WorkStationHome.scss';

import DigitalWatch from '../DigitalWatch/DigitalWatch';
import DateDisplay from '../DateDisplay/DateDisplay';

const WorkStationHome = () => {




    return (
        <div className='workstationHome-container'>
            <h1>Welcome! Cool Phrase goes Here</h1>
            <div>
                <DigitalWatch />
            </div>
            <div>
                <DateDisplay/>
            </div>
            
        </div>
    )
}

export default WorkStationHome;