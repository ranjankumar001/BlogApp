import React, { Component } from 'react'
import axios from 'axios'

export default  class createPost extends Component {
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
        e.preventDefault();
        const data={
            title:this.state.title,
            author:this.state.author,
            description:this.state.description
        }

        axios.post('http://localhost:5000/post/add',data)
        .then(res=>console.log(res.data))

        console.log(`Form submitted`)
        this.setState({
            title:'',
            author:'',
            description:''
        })
        window.location='/'
    }

    render(){
        return (
            <div>
                <h3> Create New Post</h3>
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
                        <textarea
                        type="text"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Blog" class="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
    
}
