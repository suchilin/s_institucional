import React, {Component} from 'react'
import {observer} from 'mobx-react'
import PostStore from '../stores/post'

@observer
class UpdatePost extends Component{
    constructor(props){
        super(props);
        this.updateProperty.bind(this)
    }
    componentDidMount(){
        var slug = this.props.params.slug
        this.props.store.get(slug)
    }

    handleSubmit(e){
        e.preventDefault()
        var slug = this.props.params.slug
        this.props.store.update(slug)
    }

    updateProperty(key,value){
        this.props.store[key] = value
    }

    onChange(e){
        this.updateProperty(e.target.name, e.target.value)
        console.log(this.props.store[e.target.name])
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


class UpdateOnePost extends Component{
    render(){
            return(
                <UpdatePost store={PostStore} params={this.props.match.params} />
            )
    }
}

export default UpdateOnePost
