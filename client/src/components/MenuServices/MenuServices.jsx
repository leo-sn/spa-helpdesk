import './MenuServices.scss'
import Services from '../Services/Services'


const MenuServices = (props) => {

    const { currentServices } = props;

    return (
        <div className='services-tab-container'>
        {currentServices.map((service) => {
            return <Services service={service.title} icon={service.iconPath}/>
        })}
        </div>
    )
}

export default MenuServices;