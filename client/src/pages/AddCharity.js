import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./main.css";
import API from '../utils/API';
import Geocode from '../utils/Geocode';

class Charities extends Component {
    state = {
        name: "",
        location: "",
        phone: "",
        accepts: "",
        doesnotaccept: "",
        website: "",
        email: "",
        details: "",
        info: "",

    } // end state

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    addCenter = centerData => {
        API.saveCenter(centerData)
          .then(res => console.log("Center data received. Thank you!"))
          .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.name && this.state.phone && this.state.location && this.state.accepts) {
            let centerData = {
                name: this.state.name,
                location: this.state.location,
                phone: this.state.phone,
                accepts: this.state.accepts,
                doesnotaccept: this.state.doesnotaccept,
                website: this.state.website,
                email: this.state.email,
                details: this.state.details,
                info: this.state.info,
                verified: false
            };

            Geocode.getLatLong()
                .then(res => {
                    centerData.lat = res.data.results[0].geometry.location.lat;
                    centerData.lng = res.data.results[0].geometry.location.lng
                })
                .catch(err => console.log(err));

            this.addCenter(centerData);

            this.setState({
                name: "",
                location: "",
                phone: "",
                accepts: "",
                doesnotaccept: "",
                website: "",
                email: "",
                details: "",
                info: "",
            });
        }
    };

    render() {
        return (
            <div>
                <Jumbotron >
                    <h1 className="display-1" style={{ color: "white" }}><span id="D">D</span><span id="C">C</span><span id="lutter">lutter</span></h1>
                    <p className="lead" style={{ color: "white" }}>Get rid of things that dont bring you joy and fulfilment</p>
                    <hr id="mainHR"></hr>
                    <p className="navLinks "> <span id="addCharityNav"><a href="/">
                    <svg viewBox="0 0 32 32" className="icon icon-home" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"/></svg>
                     </a>
                     </span>
                     {/* <span id="divide">|</span><span id="addCharityNav"><a href="/add"> Add Charity</a> </span> */}
                     </p>
                </Jumbotron>

                <Container>
                        <Row>
                            <Col size="col-md-12">
                        <h2 className="addCharityHeader">Please Enter Your Charity Info Below</h2>
                            </Col>
                        </Row>
                    <Row>
                        <Col size="col-md-1"></Col>
                        <Col size="col-md-10 formDiv">
                            <form>
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name='name'
                                    text="Name"
                                    placeholder="John Doe (required)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.location}
                                    onChange={this.handleInputChange}
                                    name='location'
                                    text="Address"
                                    placeholder="123 Main Street (required)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.phone}
                                    onChange={this.handleInputChange}
                                    name='phone'
                                    text="Phone #"
                                    placeholder="(234)-567-8901 (required)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.accepts}
                                    onChange={this.handleInputChange}
                                    name='accepts'
                                    text="Accepts"
                                    placeholder="Linens, Vehicles, Furniture etc (required)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.doesnotaccept}
                                    onChange={this.handleInputChange}
                                    name='doesnotaccept'
                                    text="Does Not Accept"
                                    placeholder="(optional)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.webiste}
                                    onChange={this.handleInputChange}
                                    name='website'
                                    text="Website"
                                    placeholder="(optional)"
                                />
                                <br></br>
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name='email'
                                    text="Email"
                                    placeholder="(optional)"
                                />
                                <br></br>
                                <TextArea
                                    value={this.state.details}
                                    onChange={this.handleInputChange}
                                    name="details"
                                    text="Details"
                                    placeholder="Specific Details (optional)"
                                />
                                <br></br>
                                <TextArea
                                    value={this.state.info}
                                    onChange={this.handleInputChange}
                                    name="info"
                                    text="Additional Information"
                                    placeholder="Any Additional Information (optional)"
                                />
                                <br></br>
                                <FormBtn
                                    disabled={!(this.state.name && this.state.phone && this.state.location && this.state.accepts)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Charity
                            </FormBtn>
                            </form>
                        </Col>
                        <Col size="col-md-1"></Col>

                    </Row>
                    <div className="container text-center">
                        <a href="/" className="btn btn-success" role="button">Home</a>
                        <a href="/results" className="btn btn-primary" role="button">View Results</a>

                    </div>
                </Container>
            </div>
        )
    }
};

export default Charities;
