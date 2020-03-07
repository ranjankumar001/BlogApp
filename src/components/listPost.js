import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Post=props=>(
    <tr>
        <td>{props.post.title}</td>
        <td>{props.post.author}</td>
        <td>{props.post.description}</td>
        <td> 
            <Link to={"/edit/"+props.post._id}>Edit</Link>
        </td>
        <td> 
            <Link to={"/delete/"+props.post._id}>Delete</Link>
        </td>
    </tr>
)

export default  class listPost extends Component {
    constructor(props){
        super(props)
        this.state={posts:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/post/')
        .then(res=>{
            this.setState({posts:res.data})
        })
        .catch(function(err){
            console.log(err)
        })
    }

    postList(){
        return this.state.posts.map(function(currentPost,i){
            return <Post post={currentPost} key={i}/>
        })
    }

    render(){
        return (
            <div>
                <h2>Post List</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.postList()}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
