export default class Categories{
    constructor(){
        this.categories = [];
        this._subcribers = []; // other system entities that, when some change happen it will be notified
    }
    
    //this prop will notify the other components that is subribed
    subscribe(func){
        //app will pass a function to bind this two ones!
        this._subcribers.push(func)
    }

    notify(){
        console.log(this._subcribers)
        this._subcribers.forEach(
            func => {
                console.log(func)
                return func(this.categories)
            }
        )
    }


    unSubscribe(func){
        console.log(this._subcribers.length)
        this._subcribers = this._subcribers.filter(f => f !== func);
        console.log(this._subcribers.length)
    }


    addCategory(newCategory){
        this.categories.push(newCategory)
        this.notify()
    }
}