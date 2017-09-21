import { observable } from 'mobx';
import BaseStore from './base';
import axios from 'axios';


class CultivoStore extends BaseStore{
    @observable id = null;
    @observable nombre = '';
    @observable nombre_generico = '';
    @observable variedad = '';
    @observable superficie = '';
    @observable rendimiento = null;
    @observable ciclo = null;
    url = 'http://localhost:8000/cultivos/';
}

export default new CultivoStore();
