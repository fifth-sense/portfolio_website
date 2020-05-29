import React from 'react'

export default class BodyContent extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            data : []
        }
    }

    async componentDidMount(){
        await this.setState({data: this.props})
        console.log(this.state.data)
    }


    render(){
        
        return (
            <div></div>
        )
    }


}