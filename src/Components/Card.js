import React from 'react';
import Content from './../content/poems.json'
import BodyContent from './Bodycontent'

var content = null
var contentArray = ["abcd", <br></br>,"adjhiuas"]

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            poems: [],
            da: []
        }
    }

    async componentDidMount() {
        await this.setState({ poems: this.props.poem })
        content = this.props.poem.content
        contentArray = content.split("\n")
        // console.log("content array",contentArray)
        var datas = []
        contentArray.forEach(element => {
           datas.push(element)
           datas.push(<br></br>)
           
        });
      
        await this.setState({da : datas})
        // console.log(datas)
    }

    render() {
        var con = this.state.poems.content
        console.log(con)

        return (


            <div className='card-container'>
                <img alt='poem 3' src={process.env.PUBLIC_URL + 'poem3.jpg'}className='imagesize'/>
                <p>{this.state.da}</p>
         
            </div>
        )
        
    }
}
export default Card;
