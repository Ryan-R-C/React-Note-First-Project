export default class NotesArray{
    constructor(){
        this.notes = [];
        this._subcribers = []; // other system entities that, when some change happen it will be notified
    }
    createNote(title, text,category){
        const newNote = new Notes(title, text, category)
        this.notes.push(newNote)
    }
    deleteThisTask(index){
        let arrayOfNotes = this.state.notes
        arrayOfNotes.splice(index,1)
        this.setState({notes: arrayOfNotes})
    }
    //this prop will notify the other components that is subribed
    subscribe(func){
        //app will pass a function to bind this two ones!
        this._subcribers.push(func)
    }

    notify(){
        this._subcribers.forEach(
            func => func(this.categories)
        )
    }
}

class Notes{
    constructor(title, text,category){
        this.title = title
        this.text = text
        this.category = category
    }
    addNote(newNote){
        this.notes.push(newNote)
    }
}