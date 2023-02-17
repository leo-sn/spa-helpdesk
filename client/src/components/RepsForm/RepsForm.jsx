import './RepsForm.scss';

const RepsForm = (props) => {

    const { searchHandler } = props;

    return (

        <div className='rep-form-container'>
                <form className='rep-form-container__form' onSubmit={searchHandler}>
                    <label for="zipcode">ZipCode:</label>
                    <input type="text" name="zipcode" placeholder='V6Y 0G5'></input>
                    <label for="country">Country:</label>
                    <input type="text" name="country" placeholder='Canada'></input>
                    <button>Search</button>
                </form>
        </div>
    )
};

export default RepsForm;