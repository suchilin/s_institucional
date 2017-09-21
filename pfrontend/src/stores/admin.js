import { observable } from 'mobx'

class AdminInterface{
    @observable selecteds = [];
    @observable deleteDialogOpen = false;
    @observable deleteWarningMessage = "";
    @observable deleteMultiplePosts = false;
    @observable deletePostSlug = "";
    @observable deletePostTitle = "";

    select(id){
        var idx = this.selecteds.indexOf(id);
        if(idx > -1){
            this.selecteds.splice(idx,1)
        }else{
            this.selecteds.push(id)
        }
    }

    isCheck(id){
        var idx = this.selecteds.indexOf(id);
        if(idx > -1){
            return true;
        }else{
            return false;
        }
    }

    selectAll(){
        for(var i; i<10; i++){
            this.selecteds.push("chekc"+i)
        }
    }
}

export default new AdminInterface();
