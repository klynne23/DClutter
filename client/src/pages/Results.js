import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Charity from "../components/Charity";
import { Container } from "../components/Grid";
import "./main.css";

class Results extends Component {
    state = {
        /* set equal to the response object from API query */
        queryResponse: [],
        /* test data for rendering purposes */
        testData: [
            {
                name: "4 Paws Rescue Team",
                location: "Merrifield, VA 22116",
                phone: "(703) 715-6369",
                accepts: ["pet supplies", "household goods", "calling cards", "gift cards"],
                website: "www.fourpaws.org",
                details: "Accepts: Hand towels and sheets, cat litter and/or cat food, cat carriers, cat beds, small cardboard boxes (used as litter boxes at adoption fairs), cat toys, stamps, calling cards, gift cards. Donated items can be taken to any adoption fair.",
                info: "Dates and locations are available at www.fourpaws.org or call 703-715-MEOW to make other arrangements."
            },
            {
                name: "Second Story - The Abused and Homeless Children's Refuge",
                location: "2100 Gallows Road, Vienna, VA 22182",
                phone: "(703) 506-9191",
                accepts: ["toiletries", "cleaning supplies", "containers", "office supplies"],
                doesnotaccept: ["TVs", "furniture", "stuffed toys"],
                details: "Accepts: Toiletries, cleaning supplies, hotel samples, storage containers and storage bins, and office supplies, (copy paper, ink cartridges, etc.).",
                info: "We accept Monday-Friday, 8am - 9pm, and Saturday/Sundays, 9am - 9pm."
            },
            {
                name: "Bikes for the World",
                location: "11720 Parklawn Dr, Rockville, MD 20852",
                phone: "(703) 740-7856",
                accepts: ["bicycles", "bicycle parts", "tools", "sewing machines"],
                website: "www.bikesfortheworld.org",
                details: "Accepts: Bicycles, bicycle spare parts & accessories, hand tools (wrenches, screwdrivers, and hammers of all types), portable sewing machines.",
                info: "Visit website for local collection schedule www.bikesfortheworld.org or call 703-740-7856 to make arrangements. Bikes for the World picks up bikes at bike shops such as Bob’s Bikes in Poolesville, MD."
            },
            {
                name: "Black Student Fund",
                location: "3636 16th Street, NW, Washington, DC",
                phone: "202-387-1414",
                accepts: ["school supplies", "toys", "office supplies", "clothing"],
                details: "Accepts: School supplies, toys, office supplies, clothes, etc.",
            },
            {
                name: "DC Coalition for the Homeless",
                location: "1234 Massachusetts Ave NW, Washington, DC 20005",
                phone: "202-347-8870",
                accepts: ["clothing", "furniture"],
                details: "Accepts: Clothing items, household items in good conditions such as sofas, beds, and dressers. We pick up and accept drop offs at our various programs sites that are listed on our website."
            }
        ]
    } /* end state */

    render() {
        return (
            <div className="main">
                <Jumbotron >
                    <h1 className="display-1" style={{ color: "white" }}><span id="D">D</span><span id="C">C</span><span id="lutter">lutter</span></h1>
                    <p className="lead" style={{ color: "white" }}>Get rid of things that dont bring you joy and fulfilment</p>
                    <hr id="mainHR"></hr>
                    <p className="navLinks "> <span id="addCharityNav"><a href="/">
                    <svg viewBox="0 0 32 32" class="icon icon-home" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"/></svg>
                     </a> </span><span id="divide">|</span><span id="addCharityNav"><a href="/add"> Add Charity</a> </span></p>

                </Jumbotron>

                <div className="resultsContainer">
                    <Container>
                        <h2 className="searchResultsHeader">Your Search Results</h2>
                        {this.state.testData.map((charity)=>
                            <div className="row text-left" >
                                <Charity
                                data={charity}
                                />
                            </div>
                            )}
                    </Container>
                </div> {/* end resultsContainer */}
                    <div className="container text-center">
                        <a href="/add" className="btn btn-success" role="button">Add a Charity</a>
                        <a href="/" className="btn btn-primary" role="button">Home</a>

                    </div>

            </div>
        );
    }
}

export default Results;
