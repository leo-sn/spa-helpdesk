import './RepsMap.scss';
import RepMapLoad from '../RepMapLoad/RepMapLoad';

const RepsMap = (props) => {
    
    const { repLocation } = props;

    return (
           <div style={{height: '50vh', width: '100%', overflow: 'hidden', position: 'relative'}} className='reps-map-container'>
                <RepMapLoad location={repLocation}/>
           </div>
    );
};

export default RepsMap;