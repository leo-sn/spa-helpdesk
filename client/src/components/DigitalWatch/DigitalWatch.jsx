import './DigitalWatch.scss'

import { useState } from 'react';

const DigitalWatch = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, setCTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time)
    }

    setInterval(updateTime,1000)

    return (
        <div className='time'>
            {time}
        </div>
    )
}

export default DigitalWatch;