import React, {Component} from 'react'
import {observer} from 'mobx-react'
import ProductorStore from '../stores/productores'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';

@observer
class ProductorList extends Component{
    componentDidMount(){
        this.props.store.all(1);
    }

    handleProductores(page){
        this.props.store.all(page)
    }
    
    render(){
            return(
            <div id="dtposts">
                <h1>Productores</h1>
                <table className="tposts">
                    <tbody>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>CURP</th>
                        <th>RFC</th>
                    </tr>
                    {
                        this.props.store.objects.map((productor)=>{
                            return(
                                <tr key={productor.id}>
                                    <td>
                                        {productor.nombre}
                                    </td>
                                    <td>
                                        {productor.curp}
                                    </td>
                                    <td>
                                        {productor.rfc}
                                    </td>
                                    <td><Link to={'/productores/'+productor.id}><i className='material-icons' >arrow forward</i></Link>
                                    </td>
                                </tr>
                            )
                            })
                    }
                        </tbody>
                    </table>
                        

                        {!!this.props.store.previous?<button onClick={this.handleProductores.bind(this, this.props.store.previous)}> { "<<" } </button>:'' }
                        <span>pagina {this.props.store.page} of {this.props.store.pages}</span>
                        {!!this.props.store.next?<button onClick={this.handleProductores.bind(this, this.props.store.next)}> { ">>" } </button>:''}
                   
                </div>
        )
    }
}

class ListProductores extends Component{
    render(){
        return(
            <ProductorList 
                store={ProductorStore}
                history={this.props.history}
            />
            )
    }
}

export default ListProductores
