import { observable } from 'mobx'
import $ from 'jquery'
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
var axios = require('axios')

class BaseStore{
    @observable objects = [];
    @observable page = 0;
    @observable pages = 0;
    @observable next = null;
    @observable previous = null;
    url = ''

     all(page){
        var self = this
        var a_url_ = '';
         if(page){
             a_url_ = this.url + '?page='+page;
         } 
        return axios.get(a_url_)
            .then(function(res){
            self.objects = []
            res.data.results.map(function(obj_){
                self.objects.push(obj_)
            })
            if(res.data.links.next !== null){
                self.next=page+1
            }else{
                self.next=null
            }
            if(res.data.links.previous !== null){
                self.previous=page-1
            }else{
                self.previous=null
            }
            self.page = page
            self.pages = res.data.total_pages
        })
        .catch(function(e){
            console.log(e);
        });

    }

     filter(page, params){
        var self = this
         var turl = ''
         if(page){
             turl = this.url + '?page='+page;
         } 
         Object.keys(params).map((key)=>{
             turl += '&'+key+'='+params[key]
         })
         console.log(this.url)
         return axios.get(turl)
            .then(function(res){
            self.objects = []
            res.data.results.map(function(obj_){
                self.objects.push(obj_)
            })
            if(res.data.links.next !== null){
                self.next=page+1
            }else{
                self.next=null
            }
            if(res.data.links.previous !== null){
                self.previous=page-1
            }else{
                self.previous=null
            }
            self.page = page
            self.pages = res.data.total_pages
        })
        .catch(function(e){
            console.log(e);
            return e;
        });
    }

    create(){
        var resp = null
        var data = {}
        for(var key in this){
            if(
                key!=="url" &&
                key!=="page" &&
                key!=="pages"&&
                key!=="objects" &&
                key!=="previous" &&
                key!=="next"
              ){
                data[key] = this[key]
            }
        }
        axios.post(this.url,data)
            .then((res)=>{
                console.log(res)

            })
            .catch((e)=>{
                console.log(e)
            })
    }

    update(key_){
        var data = {}
        for(var key in this){
            if(
                key!=="url" &&
                key!=="page" &&
                key!=="pages"&&
                key!=="objects" &&
                key!=="previous" &&
                key!=="next"
              ){
                data[key] = this[key]
            }
        }
        $.ajax({
            type: 'put',
            contentType: "application/json",
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:8000/blog/posts/'+key_+"/",
            context: this,
            data: JSON.stringify(data)
        })
        .done(function(res){
            location.reload()
            console.log(res)
            return true;
            })
        .fail(function(xhr){
            console.log(xhr.status);
        });

    }

    get(key){
        var self = this
        console.log('url: '+this.url)
        return axios.get(this.url+key)
        .then(function(response){
            var data=response.data;
            for(var key in self){
                if(
                    key!=="url" &&
                    key!=="page" &&
                    key!=="pages"&&
                    key!=="objects" &&
                    key!=="previous" &&
                    key!=="next"
                  ){
                    self[key] = data[key]
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    delete(key){
        axios.delete(this.url+key+'/')
            .then((res)=>{
                console.log(res)
            })
            .catch(function(error){
                console.log(error);
            })

    }


}

export default BaseStore
