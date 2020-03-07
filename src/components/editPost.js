import React, { Component } from 'react'

import axios from 'axios'
export default  class editPost extends Component {
    constructor(props){
        super(props)
        this.onChangeTitle=this.onChangeTitle.bind(this)
        this.onChangeAuthor=this.onChangeAuthor.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            title:'',
            author:'',
            description:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/post/'+this.props.match.params.id)
        .then(res=>{
            this.setState({
                title:res.data.title,
                author:res.data.author,
                description:res.data.description
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        const obj={
            title:this.state.title,
            author:this.state.author,
            description:this.state.description
        }
        console.log(obj);

       axios.put('http://localhost:5000/post/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            window.location="/"
    }

    render(){
        return (
            <div>
                <h2>Edit post</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.author}
                        onChange={this.onChangeAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Post" className="btn btn-primary" />
                    </div>
                   
                </form>
            </div>
        )
    }
    
}
