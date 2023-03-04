import './FindARepConfigModal.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FindARepConfigModal = (props) => {

    const [repList, setRepList] = useState([]);
    const [selectedRep, setSelectedRep] = useState({});

    const [repName, setRepName] = useState('');
    const [repEmail, setRepEmail] = useState('');
    const [repPhone, setRepPhone] = useState('');
    const [repCountry, setRepCountry] = useState('');
    const [repLocations, setRepLocations] = useState('');
    const [repActive, setRepActive] = useState(false)

    const updateRepRequest = () => {

        let updatedRepData = {
            repId: selectedRep.repId,
            repName: repName,
            repEmail: repEmail,
            repPhone: repPhone,
            repCountry: repCountry,
            repLocations: repLocations
        }

        if(updatedRepData.repId != '') { // PUT request in case this is an existing REP
            axios.put(`${process.env.REACT_APP_API_URL}/find-a-rep/reps`, updatedRepData)
        } else {
            axios.post(`${process.env.REACT_APP_API_URL}/find-a-rep/reps`, updatedRepData)
        }

    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/find-a-rep/reps`)
        .then(res => {

            let repListPlusNew = res.data;
            let newRep = {
                repId: '',
                repName: 'Add New',
                repEmail: '',
                repPhone: '',
                repCountry: '',
                repLocations: ''
            }
            
            repListPlusNew.sort(function(a, b) {
                var textA = a.repName.toUpperCase();
                var textB = b.repName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            repListPlusNew.unshift(newRep)

            setRepList(repListPlusNew)
        })
      },[]);

    return (
        <div className='sales-rep-config-container'>
            <div className='sales-rep-config-container__wrapper'>
                <div className='sales-rep-config-container__wrapper--class-list'>
                    {repList.map((rep, index) => {
                        return <p key={index} onClick={() => {
                            setSelectedRep(rep);
                            setRepName(rep.repName);
                            setRepEmail(rep.repEmail);
                            setRepCountry(rep.repCountry);
                            setRepPhone(rep.repPhone);
                            setRepLocations(rep.repLocations);
                        }}>{rep.repName}</p>
                    })}
                </div>
                <div className='sales-rep-config-container__wrapper--update-form'>
                    <form>
                        <label>Name:</label>
                        <input type='text' name="name" value={repName} onChange={(e) => {
                            setRepName(e.target.value);}}>
                        </input>
                        <label>Email:</label>
                        <input type='text' value={repEmail} onChange={(e) => {
                            setRepEmail(e.target.value);}}>
                        </input>
                        <label>Phone:</label>
                        <input type='text' value={repPhone} onChange={(e) => {
                            setRepPhone(e.target.value);}}>
                        </input>
                        <label>Country:</label>
                        <input type='text' value={repCountry} onChange={(e) => {
                            setRepCountry(e.target.value);}}>
                        </input>
                        <label>Rep Zipcodes:</label>
                        <textarea type='text' value={repLocations} onChange={(e) => {
                            setRepLocations(e.target.value)}}>
                        </textarea>
                    </form>
                </div>
            </div>
            <div className='sales-rep-config-container__button-container'>
                <button className='sales-rep-config-container__close-button' onClick={() => {
                    props.setSalesConfigModal(false)
                }}>Cancel
                </button>
                <button className='sales-rep-config-container__save-button' onClick={() => {
                    updateRepRequest();
                    props.setSalesConfigModal(false);
                }}>Save
                </button>
            </div>
        </div>
    )
}

export default FindARepConfigModal;