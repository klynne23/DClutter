import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import "./main.css";
// import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";
import API from '../utils/API';
import Charity from "../components/Charity";
// import Geocode from '../utils/Geocode';

import MapCom from "../components/MapCom";

class Main extends Component {

    state = {
        zoom: 13,
        categories: [],
        selections: [],
        noSelections: true,
        queryResponse: []
    };

    getCategories = () => {
        API.getCenters()
            .then(res => {
                console.log(res.data);

                // WORKS FINE LOCALLY
                let allCategories = res.data.reduce(function (acc, element) {
                    return acc.concat(element.accepts);
                }, []);


                let uniqueCategories = [...new Set(allCategories)];
                let sortedCategories = uniqueCategories.sort();
                this.setState({ categories: sortedCategories })


                // HEROKU HARD CODING
                // let uniqueCategories = ["pet supplies", "household goods", "calling cards", "gift cards", "baby items", "vehicles", "toiletries", "cleaning supplies", "containers", "office supplies", "bicycles", "bicycle parts", "tools", "sewing machines", "school supplies", "toys", "clothing", "non-perishable food", "furniture", "computer equipment", "musical instruments", "art supplies", "professional services", "warehouse space", "food", "animal feed", "office equipment", "small appliances", "electronics", "large appliances", "antiques", "construction material", "household goods ", "kitchenware", "books"];
                // let sortedCategories = uniqueCategories.sort();
                // this.setState({categories: sortedCategories});


            })
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.getCategories();
    };

    // Input search criteria as an array: this.findByCategories(["clothing", "toys"])
    findByCategories = categories => {
        API.findByCategories(categories)
            .then(res => {
                console.log(res.data);
                this.setState({ queryResponse: res.data })
            })
            .catch(err => console.log(err));
    };


    // UPDATE ONCE CONNECTED TO DB
    // SHOULD CAPTURE THE DATA MAKE A GET REQUEST
    searchButtonClick = () => {
        if (!(this.state.noSelections)) {
            var currentState = this.state.selections;
            var lowercase = currentState.map((category) => category.toLowerCase());
            this.findByCategories(lowercase);
        }
    };

    // ARROW FUNCTIONS FIX THE 'THIS' SCOPE ISSUE
    categoryButtonClick = (e) => {

        // use currentTarget instead of target to get button value
        var clicked = e.currentTarget.value;

        // CHECK IF BUTTON HAS ALREADY BEEN CLICKED, IF NOT PUSH INTO SELECTIONS ARRAY
        if (!(this.state.selections.includes(clicked))) {
            // console.log("not already a selection");
            this.state.selections.push(clicked);
            this.setState({ noSelections: false });
        }


    };

    clearSelections() {
        // SET SELECTIONS STATE EQUAL TO AN EMPTY ARRAY
        this.setState({ selections: [] });
    };

    removeCategory = category => {
        // FITLER THE CURRENT SELECTIONS FOR THE DELETED CATEGORY AND SET STATE EQUAL TO THE RETURNED ARRAY
        const categories = this.state.selections.filter(selection => selection !== category);

        this.setState({ selections: categories });
    };

    render() {

        return (
            <div className="main">
                <Jumbotron >
                    <h1 className="display-1" ><span id="D">D</span><span id="C">C</span><span id="lutter">lutter</span></h1>
                    {/* <p className="lead" >Get rid of things that dont bring you joy and fulfilment</p> */}
                    <hr id="mainHR"></hr>
                    <p className="navLinks ">
                        <span id="addCharityNav">
                            <a id="navLink" href="/">
                                <svg viewBox="0 0 32 32" className="icon icon-home" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z" /></svg>
                            </a>
                        </span>
                        <span id="divide">|</span>
                        <span id="addCharityNav"><a id="navLink" href="/add"> Add Charity</a> </span></p>

                </Jumbotron>

                <div className="searchContainer">
                    <Container>
                        <Row>
                            <Col size="col-md-12">
                            <p className="topQuote">"Get rid of things that dont bring you joy and fulfilment"</p>
                            <p className="bottomQuote"> - Marie Kondo</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="col-md-9">
                                <Container>
                                    <Row>
                                        <Col size="col-md-12">
                                            <h2 id="categorySelect">Lets give away some...</h2>
                                            <div className="searchSelectionDiv">

                                                <div className="categoryButtons">
                                                    {this.state.categories.map((category) => <button key={category} name="currentSelection" value={category} type="button" onClick={this.categoryButtonClick} className="btn btn-outline-dark categoryButton">{category}</button>)}
                                                </div>

                                            </div>{/* end searchSelectionDiv */}
                                        </Col>
                                    </Row>
                                </Container>

                            </Col>
                            <Col size="col-md-3 text-center">
                                <Container>
                                    <Row>
                                        <Col size="col-md-12 ">
                                            <h2 id="categorySelected">Chosen</h2>

                                            <div className="chosenCategories">

                                                <div className="chosenButtons">
                                                    <hr id="charityHR"></hr>
                                                    {this.state.selections.map((category) =>
                                                        <div className="aButton" key={category}>
                                                            <p key={category} id={category} className=" pickedCategoryButton">{category}
                                                                <span className="deleteX" onClick={() => this.removeCategory(category)} >
                                                                    ✘
                                                                </span>
                                                            </p>
                                                            <hr id="charityHR"></hr>
                                                        </div>
                                                    )}
                                                </div> {/* end chosenButtons */}

                                                <button type="button" className="btn btn-outline-info clearButton" onClick={() => this.clearSelections()}>Clear</button>
                                                <button type="button" className="btn btn-outline-success searchButton" onClick={() => this.searchButtonClick()}><span role="img" aria-label="Search">🔍Search</span></button>

                                            </div> {/* chosenCategories */}

                                        </Col>
                                    </Row>
                                </Container>

                            </Col>
                        </Row>
                    </Container>


                    <div className="resultsContainer">
                        <Container>
                            <h2 className="searchResultsHeader">Results</h2>
                            <hr id="charityHR"></hr>
                            <div className="charityMapResults">
                                {this.state.queryResponse.map((charity) =>
                                    <div className="row text-left">


                                        <Col size="col-md-8">
                                            <Charity
                                                data={charity}
                                            />
                                        </Col>
                                        <Col size="col-md-4">
                                            <Row>
                                                <MapCom
                                                    zoom={this.state.zoom}
                                                    data={charity}
                                                />
                                            </Row>

                                        </Col>
                                            <Col size="col-md-12">
                                                <hr id="charityHR"></hr>
                                            </Col>
                                    </div>
                                )}
                            </div>



                        </Container>
                    </div> {/* end resultsContainer */}

                </div> {/** end searchContainer **/}
            </div> /* end main */

        ); // end return
    } // end render
} // end Main

export default Main;
