import { header } from "./start";
import { format } from "date-fns";
import { today } from "./dateSections/today";
import { Task, taskDone, weekCalc, TemplateProject, populateData, setArrayData } from "./dateSections/storage";
import * as storageModule from "./dateSections/storage.js"


let currentDate = new Date();

let iconsArray = [`./icons/bullseye-solid.svg`, `./icons/calendar-days-solid.svg`, `./icons/list-check-solid.svg`, `./icons/diagram-project-solid.svg`, '', `./icons/hashtag-solid.svg`, '']


export function home() {
    header();
    tasksPage();
}

export let projectsArray = [];
export let tagsArray = ['low', 'medium', 'high'];

// console.log(weekCalc())


function tasksPage() {
    let userPic = document.createElement('div');
    let userName = document.createElement('div');
    let navBar = document.getElementById('nav');
    let loginBtn = document.getElementById('nav-btn5');
    let strtFreeBtn = document.getElementById('nav-btn6');

    loginBtn.style.display = 'none';
    strtFreeBtn.style.display = 'none';

    navBar.appendChild(userName).setAttribute('id', 'user-name');
    navBar.appendChild(userPic).setAttribute('id', 'user-pic');


    //home page styling
    let tasksWindow = document.createElement('div')
    let leftBar = document.createElement('div');
    let homePage = document.createElement('div');
    document.body.appendChild(tasksWindow).setAttribute('id', 'tasks-window')
    tasksWindow.appendChild(leftBar).setAttribute('id', 'left-bar');
    tasksWindow.appendChild(homePage).setAttribute('id', 'home-page')

    //left bar
    let todayTasks = document.createElement('div');
    let weekTasks = document.createElement('div');
    let allTasks = document.createElement('div');
    let projects = document.createElement('div');
    let projectsList = document.createElement('div');
    let tags = document.createElement('div');
    let tagsList = document.createElement('div');


    storageModule.setData()
    let leftBarItems = [todayTasks, weekTasks, allTasks, projects, projectsList, tags, tagsList]
    let leftBarItemsText = ['today', 'this week', 'all tasks', 'my projects', 'projects-list', 'tags', 'tags list']



    for (let i = 0; i < leftBarItems.length; i++) {
        let icon = document.createElement('div')
        leftBar.appendChild(leftBarItems[i]).setAttribute('id', `${leftBarItemsText[i].replace(/\s/g, "-")}`)
        leftBarItems[i].appendChild(icon).classList.add('left-bar-icon')
        leftBarItems[i].appendChild(document.createElement('span')).textContent = `${leftBarItemsText[i]}`
        icon.style.backgroundImage = `url(${iconsArray[i]})`
    }
    projectsList.textContent = '';
    tagsList.textContent = '';

    projectsList.setAttribute('id', 'projects-list')

    //tagsList items 
    for (let i = 0; i < tagsArray.length; i++) {
        let tagBtn = document.createElement('div')
        let tagColor = document.createElement('div');
        let tagItem = document.createElement('div');
        tagsList.appendChild(tagBtn).setAttribute('class', 'tag-btn')
        tagBtn.appendChild(tagColor).setAttribute('id', `${tagsArray[i]}`)
        tagBtn.appendChild(tagItem);
        tagItem.textContent = tagsArray[i];
        tagBtn.addEventListener('click', function () {
            storageModule.deleteTask(setArrayData('AlltasksArray'))
            let container = document.createElement('div');
            document.getElementById('home-page').textContent = '';
            document.getElementById('home-page').appendChild(container).setAttribute('id', "tags-page");
            taskGenerator(container, 'tag', `${tagsArray[i]}`)
        })
    }


    //eventlisteners for projects button and tag list button
    projects.addEventListener('click', function () {
        if (projectsList.style.display === 'none') {
            projectsList.style.display = 'flex';
        }
        else {
            projectsList.style.display = 'none';
        }
    })

    tags.addEventListener('click', function () {
        tagsList.style.display === 'none' ? tagsList.style.display = 'flex' : tagsList.style.display = 'none'
    })

    // storageModule.setArrayData('todayTasksArray')


    projectGenerator()

    addTask()
    todayTasks.addEventListener('click', today);
    weekTasks.addEventListener('click', thisWeek);
    allTasks.addEventListener('click', allTasksGanerator)

}


function projectGenerator() {
    let loclstrgProjects = storageModule.setArrayData('projectsArray')

    if (!localStorage.getItem("projectsArray")) {
        projectsArray.push(new TemplateProject(`./icons/briefcase-solid.svg`, 'work', 'work', `Don’t let yesterday take up too much of today. Use work template now!`))
        projectsArray.push(new TemplateProject(`./icons/phone-solid.svg`, 'calls', 'home', `Arrange your phone calls so you don't forget any of them`))
        storageModule.populateData('projectsArray', projectsArray)
    }
    for (let j = 0; j < loclstrgProjects.length; j++) {
        let project = document.createElement('div');
        let projectIcon = document.createElement('div');
        let projectName = document.createElement('div');
        document.getElementById("projects-list").appendChild(project).setAttribute('class', 'project-btn')
        project.appendChild(projectIcon).setAttribute('class', 'left-bar-prjct-icon')
        project.appendChild(projectName).setAttribute('class', 'left-bar-prjct-name')

        projectIcon.style.backgroundImage = `url(${loclstrgProjects[j].icon})`
        projectName.textContent = loclstrgProjects[j].name;
        project.addEventListener('click', function () {
            console.log(loclstrgProjects[j])
            storageModule.deleteTask(setArrayData('AlltasksArray'))
            let container = document.createElement('div');
            document.getElementById('home-page').textContent = '';
            document.getElementById('home-page').appendChild(container).setAttribute('id', "projects-page");
            taskGenerator(container, 'project', `${loclstrgProjects[j].name}`)
        })
    }
}



export function addTask() {
    let addTaskBtn = document.createElement('div');
    let newTaskCard = document.createElement('form');
    document.getElementById("home-page").appendChild(addTaskBtn).setAttribute('id', 'add-task');
    document.getElementById("home-page").appendChild(newTaskCard).setAttribute('id', 'add-task-card');


    addTaskBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        newTaskCard.style.display = 'flex';
    });

    document.addEventListener('click', () => {
        newTaskCard.style.display = 'none';
    });

    newTaskCard.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    //making new task card elements
    let closeIcon = document.createElement('div');
    let taskTitle = document.createElement('input');
    let taskNote = document.createElement('textarea');
    let taskProject = document.createElement('select');
    let taskTag = document.createElement('select');
    let taskDate = document.createElement('input');
    let setBtn = document.createElement('button');

    let labelNames = ["task title", 'notes', '', '', 'choose task date']
    let cardElems = [taskTitle, taskNote, taskProject, taskTag, taskDate];
    let cardsElemsAttrs = [{ "placeholder": "task title", 'required': '' }, { 'maxlength': 120, "placeholder": "insert your notes here" },
    { "name": "projects" }, { "name": "tags" }, { "type": "date", "required": "" }
    ]

    newTaskCard.appendChild(closeIcon);
    for (let i = 0; i < cardElems.length; i++) {
        let lable = document.createElement('label');
        lable.textContent = labelNames[i]
        newTaskCard.appendChild(lable).setAttribute('id', `lable-${i + 1}`);
        for (const key in cardsElemsAttrs[i]) {
            cardElems[i].setAttribute(`${key}`, `${cardsElemsAttrs[i][key]}`)
        }
        lable.appendChild(cardElems[i]).setAttribute('id', `input-${i + 1}`);

        //adding editable class so I can manpulate them without reapeting the same line of code
        cardElems[i].setAttribute('class', 'editable')
    }
    newTaskCard.appendChild(setBtn).setAttribute('id', 'task-set-btn');
    setBtn.textContent = 'set';


    //projects list
    let projectStorage = setArrayData('projectsArray')
    for (let i = 0; i < projectStorage.length; i++) {
        let option = document.createElement('option')
        taskProject.appendChild(option);
        option.textContent = projectStorage[i].name;
        option.value = projectStorage[i].name
    }

    //tags list
    for (let i = 0; i < tagsArray.length; i++) {
        let option = document.createElement('option');
        taskTag.appendChild(option);
        option.textContent = tagsArray[i]
        option.value = tagsArray[i];
    }

    function addTaskFun(e) {
        if (taskTitle.checkValidity() && taskDate.checkValidity()) {
            e.preventDefault();
            let currentWeek = weekCalc()
            let currentDay = format(currentDate, "yyyy-LL-dd")
            let allArray = setArrayData('AlltasksArray')

            if (taskDate.value == currentDay) {
                console.log('today')
                let newTask = new Task(taskTitle.value, taskDate.value, ['all tasks', 'today', 'this week'], taskProject.value, taskTag.value, taskNote.value, false, false, false);
                allArray.push(newTask);
                populateData("AlltasksArray", allArray);
                console.log(setArrayData('AlltasksArray'))
            }


            else if (currentWeek.includes(taskDate.value)) {
                console.log('this week')
                let newTask = new Task(taskTitle.value, taskDate.value, ['all tasks', 'this week'], taskProject.value, taskTag.value, taskNote.value, false, false, false)
                allArray.push(newTask);
                populateData("AlltasksArray", allArray);
                console.log(setArrayData('AlltasksArray'))
            }

            else {
                console.log('all')
                let newTask = new Task(taskTitle.value, taskDate.value, ['all tasks'], taskProject.value, taskTag.value, taskNote.value, false, false)
                allArray.push(newTask);
                populateData("AlltasksArray", allArray);
                console.log(setArrayData('AlltasksArray'))
            }

            newTaskCard.style.display = 'none'
        }
    }


    //adding tasks to their sections
    document.getElementById("task-set-btn").addEventListener('click', addTaskFun)


}




export function taskGenerator(container, prop, condetion) {
    console.log('hello')
    let localStorageArray = setArrayData('AlltasksArray')
    //I sorted them so I can edit without missing position between tasks
    let allArray = localStorageArray.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
    allArray.forEach(element => {
        console.log(new Date(element.date))
        if (element[prop].includes(condetion) || element[prop] == condetion) {
            let task = document.createElement('div');
            let checkIcon = document.createElement('div');
            let taskText = document.createElement('div');
            let deleteBtn = document.createElement('div');
            let editBtn = document.createElement('div');

            element.done === true ? task.classList.add('task-done') : task.classList.remove('task-done')

            container.appendChild(task).setAttribute('class', 'task today-task');
            task.appendChild(checkIcon).setAttribute('class', 'task-check-btn');
            task.appendChild(taskText).setAttribute('class', 'task-text');
            task.appendChild(deleteBtn).setAttribute('class', 'task-delete');
            task.appendChild(editBtn).setAttribute('class', 'task-edit');

            taskText.textContent = element.name;

            //check
            checkIcon.addEventListener('click', function () {
                taskDone(element, `AlltasksArray`, allArray)
                element.done == true ? task.classList.add('task-done') : task.classList.remove('task-done')
            });

            //delete
            deleteBtn.addEventListener('click', function () {
                element.deleted = true;
                populateData("AlltasksArray", allArray);
                console.log(element.deleted)
                task.remove()
            })
            //edit 
            editBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                document.getElementById("add-task-card").style.display = 'flex';
                let props = ['name', 'note', 'project', 'tag', 'date']
                console.log(element[props[0]])
                storageModule.editTask(allArray, element, props)
            })
            //I put it here not in delete in delet btn, to update array after it's generated
        }
    });

    storageModule.deleteTask(allArray)
    console.log(allArray)
}

// let allArray = setArrayData('AlltasksArray');



function thisWeek() {
    storageModule.deleteTask(setArrayData('AlltasksArray'))
    console.log(setArrayData('AlltasksArray'))
    let container = document.createElement('div');
    document.getElementById('home-page').textContent = '';
    document.getElementById('home-page').appendChild(container).setAttribute('id', "week-page");
    taskGenerator(container, 'section', 'this week')
}





function allTasksGanerator() {
    storageModule.deleteTask(setArrayData('AlltasksArray'))
    let container = document.createElement('div');
    document.getElementById('home-page').textContent = '';
    document.getElementById('home-page').appendChild(container).setAttribute('id', "all-tasks-page");
    taskGenerator(container, 'section', 'all tasks')
}

