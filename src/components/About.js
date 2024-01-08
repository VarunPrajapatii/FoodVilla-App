import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";



class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent - constructor");
    }

    componentDidMount() {

        console.log("Parent - componentDidMount");

    }
    
    
    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is the about us page of the app called Food Villa</p>
                <Profile name={"Swechha"}/>
            </div>
        );
    }
}

export default About;