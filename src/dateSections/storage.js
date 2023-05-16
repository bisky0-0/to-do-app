import format from "date-fns/format";
export class Task {
    constructor(name, date, section, project, tag, note, done, deleted, edited) {
        this.name = name;
        this.date = date;
        this.section = section;
        this.project = project;
        this.tag = tag;
        this.note = note;
        this.done = done;
        this.deleted = deleted;
        this.edited = edited;
    }
}



export class DayOfWeek {
    constructor(name, date, tasks) {
        this.name = name;
        this.date = date;
        this.tasks = tasks;
    }
}


export class TemplateProject {
    constructor(icon, name, category, discription, deleted) {
        this.icon = icon;
        this.name = name;
        this.category = category;
        this.discription = discription;
        this.deleted = deleted;
    }
}


export let AlltasksArray = [];
export let todayTasksArray = [];
export let thisWeekArray = [];
export let projectsArray = [];
export let loclstrgProjects = setArrayData('projectsArray')




export function weekCalc() {
    let weekrange = [];
    // I declared new currentDate variable because the public CurrentDate variable is affected by calculations in this function
    let currentDate = new Date();
    for (let i = 0; i < 7; i++) {
        let firstDay;
        i > 0 ? firstDay = currentDate.getDate() + 1 : firstDay = currentDate.getDate();
        let day = new Date(currentDate.setDate(firstDay)).toISOString().slice(0, 10)
        weekrange.push(day);
    }

    return weekrange;
}


export function setData() {
    if (localStorage.getItem('fName')) {
        const fName = localStorage.getItem("fName");
        const lName = localStorage.getItem('lName');
        document.getElementById('user-name').textContent = `${fName} ${lName}`;
    }
}



export function populateData(name, array) {
    return localStorage.setItem(name, JSON.stringify(array))
}

export function setArrayData(arraLocalStorage) {
    arraLocalStorage = JSON.parse(localStorage.getItem(arraLocalStorage))
    return arraLocalStorage
}


export function updateArray(item, array) {
    array.forEach((elem) => {
        if (elem.deleted === true) {
            array.splice(array.indexOf(elem), 1);
        }
    })
    populateData(`${item}`, array);
}

export function deleProject(item, array, tasksAry, project) {
    if (project.deleted == true) {
        tasksAry.forEach((elem) => {
            if (elem.project == project.name) {
                elem.deleted = true;
            }
        })
        populateData(`AlltasksArray`, tasksAry);
        updateArray(item, array);
    }
}


export function editTask(array, element, prop) {
    element.edited = true;
    populateData('AlltasksArray', array)
    let editedArray = setArrayData('AlltasksArray')
    let card = document.getElementById('add-task-card');
    card.classList.add('edit-mode');
    let editableItems = document.getElementsByClassName('editable');
    for (let i = 0; i < editableItems.length; i++) {
        editableItems[i].value = element[prop[i]]
    }
    document.getElementById("task-set-btn").addEventListener('click', function () {
        if (card.classList.contains('edit-mode')) {
            let editedItemIndex = editedArray.findIndex((e) => e.edited == true);
            for (let i = 0; i < editableItems.length; i++) {
                editedArray[editedItemIndex][prop[i]] = editableItems[i].value;
                element.edited = false;
                populateData('AlltasksArray', editedArray);
            }
            card.classList.remove('edit-mode')
            document.getElementById('add-task-card').style.display = 'none';
        }
    })
}

export function taskDone(task, name, array) {
    task.done === false ? task.done = true : task.done = false;
    populateData(name, array)
}


