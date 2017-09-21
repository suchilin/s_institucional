import { observable } from 'mobx';
import BaseStore from './base';
import axios from 'axios';


class ProductorStore extends BaseStore{
    @observable id = null;
    @observable nombre = '';
    @observable curp = '';
    @observable rfc = '';
    @observable fecha_nacimiento = '';
    @observable persona_fisica = 0;
    @observable registro_padron = 0;
    @observable id_suri = '';
    @observable predios = [];
    @observable objetos = [];
    url = 'http://localhost:8000/productores/';
    
}

export default new ProductorStore();
