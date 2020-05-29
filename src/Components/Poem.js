import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Content from './../content/poems.json'
import CardList from './Card-list'
class Poem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            text: ""
        }
    }


    render() {

        return (
            <div>
                <CardList content={Content} />

            </div >
        )
    }
}

export default Poem;

