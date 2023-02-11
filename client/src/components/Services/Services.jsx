import './Services.scss';
import { Link, useParams} from 'react-router-dom';

const Services = (props) => {

    const { service, icon } = props;

    return(
        <>
        <Link to='/login'>
            <div className='service-selector'>
                <img src={icon} className='service-selector--icon'/>
                <h4>{service}</h4>
            </div>
        </Link>
        </>
    )
}

export default Services;