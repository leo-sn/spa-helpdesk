import '../FindARep/FindARep.scss'
import SideBar from '../../components/SideBar/SideBar';
import RepsMap from '../../components/ClosestRep/ClosestRep';
import RepsForm from '../../components/RepsForm/RepsForm';
import RepsDisplay from '../../components/RepsDisplay/RepsDisplay';

const FindARep = (props) => {

    const { userDetails, services } = props

    const searchHandler = (e) => {
        e.preventDefault();

        console.log(e.target.country.value)
    }

    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'find-a-rep'}/>
                    <div className='workscreen-container__workspace'>
                        <div className='workscreen-container__workspace--up'>
                            <RepsForm searchHandler={searchHandler}/>
                            <RepsDisplay />
                        </div>
                        <div className='workscreen-container__workspace--bottom'>
                            <RepsMap />
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default FindARep;