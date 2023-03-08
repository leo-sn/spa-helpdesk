import './DateDisplay.scss';

const DateDisplay = () => {


    const newDate = new Date().toLocaleString();
    
    //TRIMMING the NEWDATE OUTPUT
    const date = newDate.slice(0, newDate.indexOf(','))

    return (

        <div className='currentDate'>
            {date}
        </div>
    )
};

export default DateDisplay;