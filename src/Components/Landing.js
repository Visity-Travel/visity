import React, { Component } from 'react'
import * as mt from '@material-ui/core'
import '../App.css'
import {
    Link
} from "react-router-dom";

export default class Landing extends Component {
    state = {
        searchVal: "",
        categories: ["Food", "Nature", "Language", "City", "Museum"],
        destinations: ["Tokyo", "Milan", "Shanghai", "Miami", "Phuket", "Rome"]
    }

    handleSearchValue = (event) => {
        this.setState({ searchVal: event.target.value })
    }

    render() {
        return (
            <div class="App" style={{ marginTop: "1%" }}>
                <mt.Typography variant="h2">Visity</mt.Typography>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <mt.Card style={{ width: "84%", display: "flex", justifyContent: "center" }}>
                        <mt.CardContent style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <mt.TextField
                                placeholder="Where do you want to go?"
                                style={{ width: "100%" }}
                                onChange={this.handleSearchValue}
                            />
                        </mt.CardContent>
                        <mt.CardActions>
                            <mt.Button>
                                <Link to={`/explore/search:` + this.state.searchVal}>
                                    search
                                </Link>
                            </mt.Button>
                        </mt.CardActions>
                    </mt.Card>
                </div>

                <mt.Typography variant="h4" style={{ marginTop: "7%", marginBottom: "2%" }}>Catergories</mt.Typography>
                <mt.AppBar color="transparent" position="static" >
                    <mt.Tabs variant="scrollable">
                        {this.state.categories.map(
                            (category) =>
                                <mt.Card style={{ minWidth: "390px", marginRight: "2%" }}>
                                    <mt.CardHeader
                                        title={category + " Tours"}
                                        subheader="prices between $50-$80"
                                    />
                                    <mt.CardMedia
                                        style={{ height: "10em" }}
                                        image={require("../Images/" + category + ".jpg")}
                                    />
                                    <mt.CardActions style={{ justifyContent: "center" }}>
                                        <mt.Button onClick={this.handleTours} style={{ width: "70%" }}>View {category} Tours</mt.Button>
                                    </mt.CardActions>
                                </mt.Card>
                        )}
                    </mt.Tabs>
                </mt.AppBar>

                <mt.Typography variant="h4" style={{ marginTop: "7%", marginBottom: "2%" }}>Top Destinations</mt.Typography>
                <mt.AppBar color="transparent" position="static" >
                    <mt.Tabs variant="scrollable">
                        {this.state.destinations.map(
                            (destination) =>
                                <mt.Card style={{ minWidth: "390px" }}>
                                    <mt.CardHeader
                                        title={destination + " Tours"}
                                        subheader="prices between $50-$80"
                                    />
                                    <mt.CardMedia
                                        style={{ height: "10em" }}
                                        image={require("../Images/" + destination + ".jpg")}
                                    />
                                    <mt.CardActions style={{ justifyContent: "center" }}>
                                        <mt.Button style={{ width: "70%" }}>View {destination} Tours</mt.Button>
                                    </mt.CardActions>
                                </mt.Card>
                        )}
                    </mt.Tabs>
                </mt.AppBar>

                <mt.Typography variant="h4" style={{ marginTop: "7%", marginBottom: "2%" }}>Top Tours</mt.Typography>
                <mt.AppBar color="transparent" position="static" >
                    <mt.Tabs variant="scrollable">
                        {this.state.categories.map(
                            (category) =>
                                <mt.Card style={{ minWidth: "390px", marginRight: "2%" }}>
                                    <mt.CardHeader
                                        title={category + " Tours"}
                                        subheader="prices between $50-$80"
                                    />
                                    <mt.CardMedia
                                        style={{ height: "10em" }}
                                        image={require("../Images/" + category + ".jpg")}
                                    />
                                    <mt.CardActions style={{ justifyContent: "center" }}>
                                        <mt.Button style={{ width: "70%" }}>View {category} Tours</mt.Button>
                                    </mt.CardActions>
                                </mt.Card>
                        )}
                    </mt.Tabs>
                </mt.AppBar>
            </div>
        );
    }
}