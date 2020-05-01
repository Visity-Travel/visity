import React, { Component } from 'react'
import * as mt from '@material-ui/core'
import '../App.css'

export default class Explore extends Component {
    state = {
        searchVal: ""
    }

    handleSearchValue = (event) => {
        this.setState({ searchVal: event.target.value })
    }

    render() {
        return (
            <div class="App" style={{ marginTop: "1%" }}>
                <mt.Typography variant="h2">Visity - Trips</mt.Typography>
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
                                Search
                            </mt.Button>
                        </mt.CardActions>
                    </mt.Card>
                </div>
            </div>
        );
    }
}