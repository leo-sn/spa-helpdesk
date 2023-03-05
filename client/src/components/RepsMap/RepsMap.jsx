import './RepsMap.scss';
import RepMapLoad from '../RepMapLoad/RepMapLoad';

const RepsMap = (props) => {

    return (
           <div style={{height: '50vh', width: '100%'}} className='reps-map-container'>
                <RepMapLoad repData={props.repData}/>
           </div>
    );
};

export default RepsMap;