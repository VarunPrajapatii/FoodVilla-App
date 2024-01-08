import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        //Create State
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        console.log("Child - constructor");
    };

    async componentDidMount() {
        //API Calls
        // const data = await fetch("https://api.github.com/users/VarunPrajapatii");
        // const json = await data.json();
        // this.setState({
        //     userInfo: json,
        // })
        // console.log(json);
        console.log("Child - componentDidMount");

        // this.timer = setInterval(() => {
        //     console.log("Varun");    
        // }, 1000);
    }

    componentDidUpdate(prevProp, prevState) {
        console.log("Child - componentDidUpdate");
    };

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("Child - componentWillUnmount")
    }
    

    render() {
        const { count } = this.state;
        console.log("Child - render");

        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this?.state?.userInfo?.name}</h2>
                <img src={this?.state?.userInfo?.avatar_url} />
                <h2>Location: {this?.state?.userInfo?.location}</h2>
                <button 
                    onClick={() => {
                        //We do not mutate state directly
                        //Never do this.state = something
                        this.setState({
                            count: 2,
                        });
                    }}
                > SetCount </button>
            </div>
        );
    };
};

export default Profile;