import React, {Component} from 'react'
import {observer} from 'mobx-react'
import ProductorStore from '../stores/productores'
import AsiembraStore from '../stores/asiembraStore'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

@observer
class ProductorList extends Component{
    componentDidMount(){
        this.props.store.all(1);
    }

    handleProductores(page){
        this.props.store.all(page)
    }

    ChangeFilterBy(event){
        this.props.astore.productorFilterType = event.target.value
    }

    FiltrarProductoresPor(event){
        event.preventDefault()
        var params = {}
        if(this.props.astore.productorFilterType=='nombre'){
            params = {'nombre':this.props.astore.productorFilterValue}
        }
        if(this.props.astore.productorFilterType=='curp'){
            params = {'curp':this.props.astore.productorFilterValue}
        }
        this.props.store.filter(1, params)
    }


    changeProductorFilterValue(event){
        this.props.astore.productorFilterValue = event.target.value
    }

    productorDetail(productor_id){
        console.log(this.props.history.push('/productores/'+productor_id+'/'))
    }
    
    render(){
            return(
            <div id="dtposts">
                <form onSubmit={this.FiltrarProductoresPor.bind(this)}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <TextField 
                            hintText="Filtrar productores por"    
                            floatingLabelText="Filtrar por:"
                            onChange={this.changeProductorFilterValue.bind(this)}
                            fullWidth={true}
                        />
                        <RaisedButton 
                            onClick={this.FiltrarProductoresPor.bind(this)}
                            disabled={!!!this.props.astore.productorFilterValue}
                        >Buscar</RaisedButton>

                    </div>
                        <br />
                    <RadioButtonGroup 
                        style={{display: 'flex'}} 
                        name="filteBy" defaultSelected="nombre"
                        onChange={this.ChangeFilterBy.bind(this)}
                    >
                            <RadioButton
                                value="nombre"
                                label="Nombre"
                            />
                            <RadioButton
                                value="curp"
                                label="CURP"
                            />
                    </RadioButtonGroup>
                </form>
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
                                    <td>
                                        <IconButton
                                            tooltip='ir al detallado de informacion del productor'
                                            onClick={this.productorDetail.bind(this, productor.id)}
                                        >
                                            <NavigationArrowForward />
                                        </IconButton>
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
                astore={AsiembraStore}
                history={this.props.history}
            />
            )
    }
}

export default ListProductores
