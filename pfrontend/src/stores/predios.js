import { observable } from 'mobx';
import BaseStore from './base';
import axios from 'axios';


class PredioStore extends BaseStore{
    @observable id = null;
    @observable ddr = '';
    @observable cader = '';
    @observable municipio = '';
    @observable ejido = '';
    @observable id_unico = null;
    @observable folio_predio = null;
    @observable superficie_total = '';
    @observable superficie_elegible = 0;
    @observable productor = null;
    url = 'http://localhost:8000/predios/';
}

export default new PredioStore();
