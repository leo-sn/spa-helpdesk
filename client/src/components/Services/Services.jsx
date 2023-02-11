import './Services.scss';
import { Link } from 'react-router-dom';

const Services = (props) => {

    const { service, icon, pageActive } = props;

    return(
        <>
        <Link to={service.toLowerCase() === 'home' ? '/' : `/${service.toLowerCase()}`}>
            <div className={'service-selector' + (pageActive === service.toLowerCase() ? ' active' : '')}>
                <img src={icon} className='service-selector--icon'/>
                <h4>{service}</h4>
            </div>
        </Link>
        </>
    )
}

export default Services;