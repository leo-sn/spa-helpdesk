
const Home = (userDetails) => {

    const user = userDetails.user;

    const logout = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        );
    };

    return ( 
        <div className="container">
            <h1>Home</h1>
            <div className="">
                <h2>Profile</h2>
                <input type="text" defaultValue={user.name} placeholder="Username"></input>
                <input type="text" defaultValue={user.email} placeholder="Email"></input>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
};

export default Home;