import '../FindARep/FindARep.scss'
import SideBar from '../../components/SideBar/SideBar';
import RepsMap from '../../components/ClosestRep/ClosestRep';
import RepsForm from '../../components/RepsForm/RepsForm';
import RepsDisplay from '../../components/RepsDisplay/RepsDisplay';
import axios from 'axios';

import { useState } from 'react';

const FindARep = (props) => {

    const { repData, setRepData } = useState('');
    const { userDetails, services } = props;


    



    const searchHandler = (e) => {
        e.preventDefault();

        const zipcode = e.target.zipcode.value;
        const country = e.target.country.value;

        axios.get(`${process.env.REACT_APP_API_URL}/find-a-rep/rep-search?zipcode=${zipcode.toLowerCase()}&country=${country.toLowerCase()}`)
        .then(res => {
            console.log(res)
        })
        //Here goes the logic to call the back-end and get the rep-data

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