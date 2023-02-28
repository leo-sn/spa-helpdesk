import './FindARepConfigModal.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FindARepConfigModal = (props) => {

    const [repList, setRepList] = useState([]);
    const [selectedRep, setSelectedRep] = useState({});


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/find-a-rep/reps`)
        .then(res => {
            setRepList(res.data)
        })
      },[]);

    return (
        <div className='sales-rep-config-container'>
            <div className='sales-rep-config-container__wrapper'>
                <div className='sales-rep-config-container__wrapper--class-list'>
                    {repList.map((rep) => {
                        return <p onClick={() => {setSelectedRep(rep);console.log('selected rep', rep)}}>{rep.repName}</p>
                    })}
                </div>
                <div className='sales-rep-config-container__wrapper--update-form'>
                    <form>
                        <label>Name:</label>
                        <input type='text' name="name" value={selectedRep.repName} onChange={(e) => {setSelectedRep({repName: e.target.value}); console.log(e.target.value)}}></input>
                        <label>Email:</label>
                        <input type='text' value={selectedRep.repEmail} onChange={(e) => {setSelectedRep({repEmail: e.target.value}); console.log(e.target.value)}}></input>
                        <label>Phone:</label>
                        <input type='text' value={selectedRep.repPhone} onChange={(e) => {setSelectedRep({repPhone: e.target.value}); console.log(e.target.value)}}></input>
                        <label>Country:</label>
                        <input type='text' value={selectedRep.repCountry} onChange={(e) => {setSelectedRep({repCountry: e.target.value}); console.log(e.target.value)}}></input>
                        <label>Rep Zipcodes:</label>
                        <textarea type='text' value={selectedRep.repLocations}></textarea>
                    </form>
                </div>
            </div>
            <div className='sales-rep-config-container__button-container'>
                <button className='sales-rep-config-container__close-button' onClick={() => {
                    props.setSalesConfigModal(false)
                }}>Cancel
                </button>
                <button className='sales-rep-config-container__save-button' onClick={() => {
                    props.setSalesConfigModal(false)
                }}>Save
                </button>
            </div>
        </div>
    )
}

export default FindARepConfigModal;