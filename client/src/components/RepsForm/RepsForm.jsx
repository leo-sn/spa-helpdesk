import './RepsForm.scss';

const RepsForm = (props) => {

    const { searchHandler } = props;

    return (

        <div className='rep-form-container'>
                <form className='rep-form-container__form' onSubmit={searchHandler}>
                    <label for="zipcode">ZipCode:</label>
                    <input type="text" name="zipcode" placeholder='Zipcode' required></input>
                    <label for="country">Country:</label>
                    <select type="text" name="country" for="country" required>Country:
                        <option value="">Select Country</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option></select>
                    <button>Search</button>
                </form>
        </div>
    )
};

export default RepsForm;