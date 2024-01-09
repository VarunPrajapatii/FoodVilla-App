import useOnline from "../utils/useOnline";

const Contact = () => {
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>🔴 Offline, Please check your Internet Connection!!</h1>
    }
    return (
        <div>
            <h1>Contact Us Page</h1>
        </div>
    );
};

export default Contact;