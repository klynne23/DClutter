import React from "react";
import "./style.css";
import { Col } from "../../components/Grid";

function Charity(props) {
    console.log(props.data.name);
    console.log("----------------------")

    // set variables
    var website;
    var details;
    var info;
    var doesnotaccept;
    var pickup;



    if (props.data.website) {
        console.log(props.data.website);
        website = <a href={"//" + props.data.website} target="_blank" rel="noopener noreferrer">{props.data.website}</a>;
    }
    else {
        console.log('no website');
        website = "Unavailable";
    }

    if (props.data.details) {
        console.log(props.data.details);
        details = props.data.details;
    }
    else {
        console.log('no details');
        details = "no details";
    }

    if (props.data.info) {
        console.log(props.data.info);
        info = props.data.info;
    }
    else {
        console.log('no info');
        info = "no additional info"
    }

    if ((props.data.doesnotaccept)) {
        console.log(props.data.doesnotaccept);
        console.log("----------------------\n")
        if (props.data.doesnotaccept.length === 0) {
            
                console.log('no doesnotaccept');
                console.log("\n----------------------\n")
                doesnotaccept = "no specifications";
            
        
        }
        else {
            doesnotaccept = props.data.doesnotaccept.map((category) => category + ", ");
        }

    }

    if (props.data.pickup){
        pickup = props.data.pickup;
        if (pickup){
            pickup = "We pickup!";
        }
        else {
            pickup = "We do not pickup!";
        }
    }
    else {
        pickup = "no info provided";
    }



    return (
           
            <Col size="col-md-12" className="text-left">
            {/* <hr id="charityHR"></hr> */}
                <div className="resultCharity">

                    <h1 style={{ textDecorationLine: "underline" }}>{props.data.name}</h1>
                    <p>Location: {props.data.location}</p>
                    <p>Phone Number: {props.data.phone}</p>
                    {/* <p>Accepts: {props.data.accepts.map((category) => category + ", ")}</p> */}
                    <p>{details}</p>
                    <p>Website: {website}</p>
                    <p>Additional Info: {info}</p>
                    <p>Does Not Accept: {doesnotaccept}</p>
                    <p>Pickup: {pickup}</p>
                </div>

            </Col>

    )

}

export default Charity;