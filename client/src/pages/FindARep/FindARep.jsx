import '../FindARep/FindARep.scss'
import SideBar from '../../components/SideBar/SideBar';
import RepsMap from '../../components/ClosestRep/ClosestRep';
import RepsForm from '../../components/RepsForm/RepsForm';
import RepsDisplay from '../../components/RepsDisplay/RepsDisplay';

import { useState } from 'react';

const FindARep = (props) => {

    const { repData, setRepData } = useState('');
    const { userDetails, services } = props;


    



    const searchHandler = (e) => {
        e.preventDefault();

        //Here goes the logic to call the back-end and get the rep-data

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
                            <RepsDisplay repData={repData}/>
                        </div>
                        <div className='workscreen-container__workspace--bottom'>
                            <RepsMap repData={repData} />
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default FindARep;