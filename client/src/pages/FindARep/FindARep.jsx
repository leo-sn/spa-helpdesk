import '../FindARep/FindARep.scss'
import SideBar from '../../components/SideBar/SideBar';
import RepsMap from '../../components/RepsMap/RepsMap';
import RepsForm from '../../components/RepsForm/RepsForm';
import RepsDisplay from '../../components/RepsDisplay/RepsDisplay';
import FindARepConfigModal from '../../components/FindARepConfigModal/FindARepConfigModal';
import axios from 'axios';
import { useState } from 'react';

const FindARep = (props) => {

    const { userDetails, services } = props;

    const [ repData, setRepData ] = useState({
        "repId":'',
        "repName":'',
        "repEmail":'',
        "repPhone":'',
        "repCountry":'',
        "repPicture":'',
        "repGeolocation":false
    });

    const [repGeolocation, setRepGeolocation] = useState({lat:25.790654,lng:-80.130045})
    
    const [ salesConfigModal, setSalesConfigModal ] = useState(false)

    const salesConfigModalHandler = (e) => {
        setSalesConfigModal(true);
    }
    

    const searchHandler = (e) => {
        e.preventDefault();

        const zipcode = e.target.zipcode.value;
        const country = e.target.country.value;

        axios.get(`${process.env.REACT_APP_API_URL}/find-a-rep/rep-search?zipcode=${zipcode.toLowerCase()}&country=${country.toLowerCase()}`)
        .then(res => {

            setRepData({
                "repId":res.data.repId,
                "repName":res.data.repName,
                "repEmail":res.data.repEmail,
                "repPhone":res.data.repPhone,
                "repCountry":res.data.repCountry,
                "repPicture":res.data.repPicture,
                "repGeolocation": res.data.repGeolocation
            })

            setRepGeolocation(res.data.repGeolocation)
        })

    }
    return (
        <>
            <div className='home-container'>
                <div className='workscreen-container'>
                    <SideBar currentServices={services} userDetails={userDetails} pageActive={'find-a-rep'}/>
                    <div className='workscreen-container__workspace'>
                        <div className='workscreen-container__workspace--up'>
                            <RepsForm searchHandler={searchHandler}/>
                            <RepsDisplay repData={repData}/>
                        </div>
                        <div className='workscreen-container__workspace--bottom'>
                            <RepsMap repData={repData} repLocation={repGeolocation} />
                        </div>
                        <div className='workscreen-container__workspace--configure-container'>
                            <p>Need to update the sales list?</p>
                            <button className='workscreen-container__workspace--configure-button' onClick={() => {salesConfigModalHandler()}}>Click Here</button>
                        </div>
                    </div>
                </div>
                {salesConfigModal && <FindARepConfigModal setSalesConfigModal={setSalesConfigModal} />}
            </div>


        </> 
    )
}

export default FindARep;