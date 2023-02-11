import './Services.scss';
import { Link , useParams } from 'react-router-dom';

const Services = (props) => {

    const { service, icon, pageActive } = props;
    let pageAccessed = useParams();

    return(
        <>
        <Link to={`${service.toLowerCase()}`}>
            <div className={'service-selector ' + `${pageAccessed === service.toLowerCase() && pageActive}`}>
                <img src={icon} className='service-selector--icon'/>
                <h4>{service}</h4>
            </div>
        </Link>
        </>
    )
}

export default Services;