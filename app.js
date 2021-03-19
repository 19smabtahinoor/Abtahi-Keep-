const addButton = document.querySelector('.add-note-btn')

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea')
    const notes = []

    textAreaData.forEach( (currentnote) => {
        return notes.push(currentnote.value)
    })
    console.log(notes)

    localStorage.setItem('notes', JSON.stringify(notes))
}


const addNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note')

    const htmlData = `
    <div class="operation">
        <button class="edit-btn"><span class="material-icons edit">&#xe3c9;
        </span></button>
         <button class="delete-btn"><span class="material-icons delete">&#xe872;
        </span></button>
    </div>
    
    <div class="main-content ${text ? "" : 'hidden'}"></div>
    <textarea class="${text ?'hidden' : ""}"></textarea>
    `
    note.insertAdjacentHTML('afterbegin',htmlData)
    document.body.appendChild(note)


    //get reference 
    const editBtn = note.querySelector('.edit-btn')
    const delBtn = note.querySelector('.delete-btn')
    const mainDiv = note.querySelector('.main-content')
    const txtArea = note.querySelector('textarea')


    //delete note
    delBtn.addEventListener('click',() => {
    note.remove()
    updateLSData()
    })

    //edit note 
    txtArea.value = text
    mainDiv.innerHTML = text
    editBtn.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden')
        txtArea.classList.toggle('hidden')
    })

    txtArea.addEventListener('change',(event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value

        updateLSData()
    })
}

//getting data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) { notes.forEach( (note) => addNote(note) )}


addButton.addEventListener('click',() => addNote())



//current time 

//get refernces 

const hour = document.querySelector('.h')
const minute = document.querySelector('.m')
const second = document.querySelector('.s')
const clock = () => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    if(hours == 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours - 12
    }

    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds

    setTimeout(clock,1000)

}
clock();





















































































