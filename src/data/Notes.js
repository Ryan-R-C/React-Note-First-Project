export default class NotesArray{
    constructor(){
        this.notes = [];
        this._subcribers = []; // other system entities that, when some change happen it will be notified
    }
    createNote(title, text,category){
        const newNote = new Notes(title, text, category)
        this.notes.push(newNote)
        console.log(this.notes)
        this.notify()
    }
    addNote(title, text,category){
        const newNote = new Notes(title, text, category)
        this.notes.push(newNote)
        console.log(this.notes)
        this.notify()
    }
    deleteThisTask(index){
        console.log("index here")
        console.log(index)
        console.log(this.notes)
        let arrayOfNotes = this.notes
        console.log(arrayOfNotes)
        arrayOfNotes.splice(index,1)
        console.log(arrayOfNotes)
        this.notes =  arrayOfNotes
        console.log(this.notes)
        this.notify()


    }
    //this prop will notify the other components that is subribed
    subscribe(func){
        //app will pass a function to bind this two ones!
        this._subcribers.push(func)
    }

    notify(){
        this._subcribers.forEach(
            func => {
                console.log(this.notes)
                console.log(func)
                func(this.notes)
            }
        )
    }
}

class Notes{
    constructor(title, text,category){
        this.title = title
        this.text = text
        this.category = category
    }
}