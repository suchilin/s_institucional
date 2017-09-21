import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {browserHistory} from 'react-router'
import PostStore from '../stores/post'
var auth = require('../auth')

@observer
class CreatePost extends Component{
    constructor(props){
        super(props);
        this.updateProperty.bind(this)
        this.slugify.bind(this)
    }

    slugify(text){
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    handleSubmit(e){
        e.preventDefault()
        var title = this.props.store.title
        var user = auth.getUser().pk
        this.props.store.slug = this.slugify(title)
        this.props.store.autor = user
        var status_ = this.props.store.create()
        if(status_===201){
            browserHistory.push('/admin/posts/update/'+this.props.store.slug+'/')
        }
    }

    updateProperty(key,value){
        this.props.store[key] = value
    }

    onChange(e){
        this.updateProperty(e.target.name, e.target.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>
                    Title:
                    <input type='text' value={this.props.store.title} size={this.props.store.title.length} name="title" onChange={this.onChange.bind(this)} />
                </label>
            </div>
            <div>
                <label>
                    Body:
                    <textarea value={this.props.store.body} rows="20" cols='50' name="body" onChange={this.onChange.bind(this)} />
                </label>
            </div>
                <input type='submit' value='Guardar' />
            </form>
        )
    }
}


class CreateOnePost extends Component{
    render(){
            return(
                <CreatePost store={PostStore} params={this.props.params} />
            )
    }
}

export default CreateOnePost

