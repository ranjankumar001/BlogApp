import React, { Component } from 'react'
import axios from 'axios'

export default class deletePost  extends Component {
    constructor(props){
        super(props)

        this.state={
            title:'',
            author:'',
            description:''
        }
    }

    componentDidMount(){
        axios.delete('http://localhost:5000/post/'+this.props.match.params.id)
            .then(res=>{
                    this.setState({
                        title:'',
                        author:'',
                        description:''
                    })
            })
            .catch(function(error){
                console.log(error)
            })

            window.location="/"
    }
    render(){
        return (
            <div>
                <h2>Delete post</h2>
            </div>
        )
    }
    
}
