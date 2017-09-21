import React, {Component} from 'react'
import {observer} from 'mobx-react'
import ProductorStore from '../stores/productores'
import PredioStore from '../stores/predios'
import AsiembraStore from '../stores/asiembraStore'
import CultivoStore from '../stores/cultivos.js'
import {Button, Dialog, DialogTitle, DialogBody, DialogHeader, DialogFooter} from 'react-mdc-web'
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import { TextValidator, AutoCompleteValidator } from 'react-material-ui-form-validator';
import {ValidatorForm} from 'react-form-validator-core';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts'

Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}

@observer
class ReadProductor extends Component{
    componentDidMount(){
    var id = this.props.params.id;
    this.props.store.get(id).then(()=>{
        var params = {'productor':id}
        this.props.pstore.filter(1, params)
        this.props.astore.all()
        })
    }

    componentWillMount() {
        ValidatorForm.addValidationRule('isCultivoIn', (value) => {
            if(value==''){
                return true;
            }
            if (this.props.astore.cultivos.indexOf(value)==-1) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isVariedadIn', (value) => {
            if(value==''){
                return true;
            }
            if (this.props.astore.variedades.indexOf(this.props.cstore.variedad)==-1) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('maxSuperficie', (value) => {
            var sup = parseFloat(value) + this.props.astore.superficie_pv17;
            if(parseFloat(this.props.pstore.superficie_elegible)<sup){
                false;
            }
            return true;
        });
    }

    handleUpdateInput=(name, value)=>{
        this.props.cstore[name] = value;
        if(name=='nombre')
        {
            this.props.astore.filterCultivos(value)
        }
    }

    handleChange(event){
        this.props.cstore[event.target.name] = event.target.value
        if(event.target.name == 'superficie'){
            var sup = parseFloat(event.target.value) + this.props.astore.superficie_pv17;
            if(parseFloat(this.props.pstore.superficie_elegible)<sup){
                this.props.astore.superficieError = 'La superficie a sembrar es mayor a la superficie elegible'
            }else{
                this.props.astore.superficieError = ''
            }
        }

    }

    handleNewRequest(){
        this.props.astore.getVariedades(this.props.cstore.cultivo)
    }

    handleSubmit(){
        if(this.props.cstore.superficie==''){
            this.props.astore.superficieError = 'Este campo es requerido'
        }
        if(this.props.astore.superficieError == ''){
        this.props.cstore.ciclo = 'pv17'
        this.props.cstore.nombre_generico = this.props.cstore.nombre.split(' ')[0] 
        this.props.cstore.predio=this.props.pstore.id
        this.props.cstore.create()
        setTimeout(()=>{
            this.openDialog(this.props.pstore.folio_predio, this.props.pstore.id)
        },200)
        }
    }

    openDialog(ftitle, predio_id){
        this.props.cstore.nombre=''
        this.props.cstore.variedad=''
        this.props.cstore.superficie=''
        this.props.cstore.rendimiento= ''
        this.props.astore.ftitle=ftitle
        this.props.astore.superficie_pv17 = 0
        var params = {'predio':predio_id}
        this.props.pstore.get(predio_id)
        this.props.cstore.filter(1, params)
        setTimeout(()=>{
        this.props.cstore.objects.map((c)=>{
            if(c.ciclo=='pv17'){
                this.props.astore.superficie_pv17 += c.superficie
            }    
        })
            this.props.astore.cicloDict = this.props.cstore.objects.groupBy('ciclo')
            this.props.astore.is_open=true
        },500)
    }

    deleteCultivo(id){
        this.props.cstore.delete(id)
        //this.props.astore.is_open=false
        setTimeout(()=>{
            this.openDialog(this.props.pstore.folio_predio, this.props.pstore.id)
        }, 500)
    }

    handleASiembra(event){
        var sagarpa_logo = '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'
        var self = this;
        const {vfs} = vfsFonts.pdfMake;
        pdfMake.vfs = vfs;
        var bodyplus = [
             [
                 {text:'Municipio', bold:true},
                 {text:'Localidad', bold:true},
                 {text:'Folio', bold:true},
                 {text:'Cultivo', bold:true},
                 {text:'Variedad', bold:true},
                 {text:'Superficie', bold:true},
                 {text:'Rendimiento', bold:true}
             ]
        ]
        var predios = []
        this.props.pstore.objects.map((predio)=>{
            var params = {'predio':predio.id, 'ciclo':event.target.value}
            //this.props.cstore.objects = []
            this.props.cstore.filter(1,params).then((data)=>{
                this.props.cstore.objects.map((cultivo)=>{
                    console.log(cultivo.nombre)
                    bodyplus.push([
                        predio.municipio, 
                        predio.ejido, 
                        predio.folio_predio,
                        cultivo.nombre,
                        cultivo.variedad,
                        cultivo.superficie,
                        cultivo.rendimiento
                    ])
                })
            })
        })
        setTimeout(()=>{
        var docDefinition = {
           content: [
             {
                columns:[
                    {
                        image:'data:image/png;base64,'+sagarpa_logo,
                        width: 200
                    },
                    {
                        width: '20%',
                        text: ''
                    },
                    {
                        width:'50%',
                        text:'Aviso de siembra', style:'header' 
                    }
                 ]
             },
               { text:[
                            {text: '\n\nProductor:  ', bold:true},
                            {text:this.props.store.nombre},
                            {text:'\nCURP: ', bold:true},
                            {text:this.props.store.curp}
                        ]
               },
               { 
                   text: '\nPOR ACUERDO No. 01 DE LA SESIÓN DE FECHA 06 DE MARZO DEL 2015 DEL CONSEJO ESTATAL DE DESARROLLO RURAL SUSTENTABLE DEL ESTADO DE DURANGO.\n\n',
                   alignment:'justify'
               },
             { 
                 columns:[
                     {width:'*', text:''},
                     {
                         width:'auto',
                         table:{
                             body:bodyplus
                         }
                     },
                     {width:'*', text:''},
                 ]
             },
             {
                   text: '\n\nMANIFIESTO QUE SI POR CAUSA DE FUERZA MAYOR NO FUERA POSIBLE REALIZAR LA SIEMBRA Y SUPERFICIE DEL CULTIVO ANUNCIADO, ME COMPROMETO A QUE SE DARA AVISO AL CADER RESPECTIVO PARA REGISTRAR EL CAMBIO DE CULTIVO, TENIENDO COMO FECHA LIMITE PARA HACERLO EL 15 DE AGOSTO DEL AÑO EN CURSO.',
                   alignment: 'justify'

             },

           ],

           styles: {
             header: {
               fontSize: 22,
               bold: true,
               alignment: 'center'
             },
             anotherStyle: {
               italic: true,
               alignment: 'right'
             }
           }
         };
            pdfMake.createPdf(docDefinition).getDataUrl(function(result){
                self.props.astore.apdf = result
            })
            this.props.astore.asd_open = true;
        },500)
    }

    render(){
        return(
            <div>
            <h1>Productor {this.props.store.nombre}</h1>
                <table className='tpredio'>
                    <tr>
                        <td><b>CURP</b></td>
                        <td>{this.props.store.curp}</td>
                        <td><b>Id SURI</b></td>
                        <td>{this.props.store.id_suri}</td>
                        <td><b>RFC</b></td>
                        <td>{this.props.store.rfc}</td>
                    </tr>
                    <tr>
                        <td><b>F. de nac.</b></td>
                        <td>{this.props.store.fecha_nacimiento}</td>
                        <td><b>Es persona fisica</b></td>
                        <td>
                            {
                                this.props.store.persona_fisica
                            ?
                            <i className='material-icons' >check</i>
                            :
                            <i className='material-icons' >close</i>
                            }
                        </td>
                        <td><b>Padron unico</b></td>
                        <td>
                            {
                                this.props.store.registro_padron
                                ?
                                <i className='material-icons' >check</i>
                                :
                                <i className='material-icons' >close</i>
                            }
                        </td>
                    </tr>
                </table>
                <h2>Acciones</h2>
                Imprimir aviso de siembra
                Ciclo 
                <select onChange={this.handleASiembra.bind(this)}>
                    <option value='pv17'>Pv17</option>
                    <option value='pv16'>Pv16</option>
                    <option value='pv15'>Pv15</option>
                </select>
                <h2>Predios</h2>
                {this.props.pstore.objects.map((predio, id)=>{
                    return(
                    <div key={id}>
                        <div className="predioTitle">
                            Folio: {predio.folio_predio}
                        </div>
                        <div className="predioBody">
                            <table className='tpredio'>
                                    <tr>
                                        <td><b>DDR</b></td>
                                        <td>{predio.ddr}</td> 
                                        <td><b>Cader</b></td>
                                        <td>{predio.cader}</td> 
                                        <td><b>Municipio</b></td>
                                        <td>{predio.municipio}</td> 
                                        <td><b>Ejido</b></td>
                                        <td>{predio.ejido}</td> 
                                    </tr>
                                    <tr>
                                        <td><b>Id unico</b></td>
                                        <td>{predio.id_unico}</td>
                                        <td><b>Superficie total</b></td>
                                        <td>{predio.superficie_total}</td>
                                        <td><b>Superficie elegible</b></td>
                                        <td>{predio.superficie_elegible}</td>
                                    </tr>
                                </table>
                                <br />



                                <Button 
                                    raised 
                                    primary
                                    onClick={this.openDialog.bind(this, predio.folio_predio, predio.id)}
                                >Aviso de siembra</Button>
                            </div>
                        </div>
                        )
                    })
                }

                <Dialog 
                    open={this.props.astore.is_open}
                    onClose={() => {this.props.astore.is_open = false}}
                >
                    <DialogHeader>
                        <DialogTitle>Aviso de Siembra del predio {this.props.astore.ftitle}</DialogTitle>
                    </DialogHeader>
                    <DialogBody scrollable>
                        {Object.keys(this.props.astore.cicloDict).map((ciclo, key)=>{
                            return(
                                    <div key={key}>
                                        <h1>Ciclo {ciclo.toUpperCase()}</h1>
                                        <table className='tdialog'>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Nombre
                                                    </th>
                                                    <th>
                                                        Variedad
                                                    </th>
                                                    <th>
                                                        Superficie
                                                    </th>
                                                    <th>
                                                        Rendimiento
                                                    </th>
                                                </tr>
                                            </thead>
                                                {this.props.astore.cicloDict[ciclo].map((cultivo, idx)=>{
                                                return(
                                                <tr key={idx}>
                                                    <td>
                                                        {cultivo.nombre}
                                                    </td>
                                                    <td>
                                                        {cultivo.variedad}
                                                    </td>
                                                    <td>
                                                        {cultivo.superficie} has
                                                    </td>
                                                    <td>
                                                        {cultivo.rendimiento !== null ? cultivo.rendimiento + ' kgs/ha' :'No especificado'}
                                                    </td>
                                                    <td>
                                                        {
                                                        ciclo=='pv17'
                                                        ?
                                                        <Button accent onClick={this.deleteCultivo.bind(this, cultivo.id)}>
                                                            <i className='material-icons' >
                                                                delete
                                                            </i>
                                                        </Button>
                                                        :
                                                            ''
                                                        }
                                                    </td>
                                                </tr>
                                                )
                                                })}
                                        </table>
                                    </div>
                                )
                                })}
                                <br />
                                <center>
                                <h1>Añadir aviso de siembra Pv17</h1>
                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.handleSubmit.bind(this)}
                                    onError={errors => {
                                        if(this.props.cstore.superficie==''){
                                            this.props.astore.superficieError = 'Este campo es requerido'
                                        }
                                    }}
                                >
                                <AutoCompleteValidator 
                                    name="nombre"
                                    hintText="Introduce el cultivo"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    floatingLabelText="Cultivo"
                                    onUpdateInput={this.handleUpdateInput.bind(this, "nombre")}
                                    openOnFocus={true}                                    
                                    onNewRequest={this.handleNewRequest.bind(this)}                                    
                                    dataSource={this.props.astore.cultivos}
                                    searchText={this.props.cstore.nombre}
                                    value={this.props.cstore.nombre}
                                    validators={['required', 'isCultivoIn']}
                                    errorMessages={['Este campo es requerido', 'El cultivo no esta en el catalogo']}/><br />                               
                                <AutoCompleteValidator 
                                    name="variedad"
                                    hintText="Introduce la variedad"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    floatingLabelText="Variedad"
                                    openOnFocus={true}                                    
                                    searchText={this.props.cstore.variedad}
                                    onUpdateInput={this.handleUpdateInput.bind(this, "variedad")}
                                    dataSource={this.props.astore.variedades}
                                    value={this.props.cstore.variedad}
                                    validators={['required', 'isVariedadIn']}
                                    errorMessages={['Este campo es requerido', 'La variedad no esta en el catalogo']}/><br />                               
                                <TextValidator
                                    name='rendimiento'
                                    hintText="Introduzca rendimiento en kgs"
                                    floatingLabelText="Rendimiento"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.props.cstore.rendimiento}
                                    validators={['minNumber:100','required']}
                                    errorMessages={['El valor para rendimiento es muy pequeño','Este campo es requerido']}
                                /><br />
                                <TextField
                                    name='superficie'
                                    hintText="Superficie a sembrar"
                                    floatingLabelText="superficie"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.props.cstore.superficie}
                                    errorText={this.props.astore.superficieError}
                                /><br />
                                <Button 
                                    raised 
                                    primary
                                >Aviso de siembra</Button>
                                <br />
                            </ValidatorForm>
                        </center>

                    </DialogBody>
                    <DialogFooter>
                        <Button compact onClick={()=> { this.props.astore.is_open=false}}>Cerrar</Button>
                    </DialogFooter>
                </Dialog>


                <Dialog 
                    open={this.props.astore.asd_open}
                    onClose={() => {this.props.astore.asd_open = false}}
                >
                    <DialogHeader>
                        <DialogTitle>Aviso de Siembra</DialogTitle>
                    </DialogHeader>
                    <DialogBody scrollable>
                        <iframe src={this.props.astore.apdf} width="100%" height="800"></iframe> 
                    </DialogBody>
                    <DialogFooter>
                        <Button compact onClick={()=> { this.props.astore.asd_open=false}}>Cerrar</Button>
                    </DialogFooter>
                </Dialog>

            </div>
        )
    }
}


class ReadOneProductor extends Component{
    render(){
            return(
                <ReadProductor 
                    store={ProductorStore} 
                    pstore={PredioStore}
                    astore={AsiembraStore}
                    cstore={CultivoStore}
                    params={this.props.match.params} 
                />
            )
    }
}

export default ReadOneProductor
