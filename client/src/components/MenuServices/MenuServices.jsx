import './MenuServices.scss'
import Services from '../Services/Services'

const MenuServices = (props) => {

    const { currentServices, pageActive } = props;

    
    return (
        <div className='services-tab-container'>
        {currentServices.map((service, index) => {
            return <Services service={service.title} icon={service.iconPath} key={index} pageActive={pageActive}/>
        })}
        </div>
    )
}

export default MenuServices;