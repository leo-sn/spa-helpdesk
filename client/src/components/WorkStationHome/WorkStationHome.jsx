import './WorkStationHome.scss';
import axios from 'axios';

import DigitalWatch from '../DigitalWatch/DigitalWatch';
import DateDisplay from '../DateDisplay/DateDisplay';

import { useEffect, useState } from 'react';


const WorkStationHome = () => {

    const [coolPhrase, setCoolPhrase] = useState()

    //CALLS FOR A LIST OF PHRASES AND SELECT RANDOMLY ONE IN THE ARRAY
    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
        .then(res => {
    
            const random = Math.floor(Math.random() * res.data.length);
            setCoolPhrase(res.data[random].text);
        })
    },[])

    return (
        <div className='workstationHome-container'>
            <h1 className='workstationHome-container--coolphrase'>{coolPhrase}</h1>
            <div>
                <p>Local Time:</p>
                <DigitalWatch />
            </div>
            <div>
                <DateDisplay/>
            </div>
            
        </div>
    )
}

export default WorkStationHome;