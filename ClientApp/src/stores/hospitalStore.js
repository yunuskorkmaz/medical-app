import { makeAutoObservable } from 'mobx'

class HospitalStore {

    addModal = false

    constructor(){
        makeAutoObservable(this)
    }

    modalClose(){
        this.addModal = false
    }

    modalOpen(){
        this.addModal = true;
    }

}

export default HospitalStore;