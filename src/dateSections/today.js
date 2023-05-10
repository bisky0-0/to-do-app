import { addTask, taskGenerator } from "../home";
import format from "date-fns/format";
import { deleteTask, setArrayData } from "./storage";



export function today() {
    let currentDate = new Date();
    let homePage = document.getElementById('home-page');
    let todaySection = document.createElement('div');
    homePage.textContent = '';
    homePage.appendChild(todaySection).setAttribute('id', 'today-section');
    // console.log(todaySection)

    //heading 
    let todayHeading = document.createElement('h1');
    let todayDate = document.createElement('div');
    let todayTasks = document.createElement('div');

    todaySection.appendChild(todayHeading).setAttribute('id', 'today-heading');
    todaySection.appendChild(todayDate).setAttribute('id', 'today-date');
    todaySection.appendChild(todayTasks).setAttribute('id', 'today-tasks');

    addTask();
    //svg icon
    let userName = localStorage.getItem("fName")
    currentDate.getHours() > 12 && currentDate.getHours() < 3 ? todayHeading.textContent = `good afternoon, ${userName}` :
        currentDate.getHours() > 13 && currentDate.getHours() < 24 ? todayHeading.textContent = `good evening, ${userName}` : todayHeading.textContent = `good morning, ${userName}`
    todayDate.textContent = format(currentDate, 'iii-LLL-dd');

    if (localStorage.getItem('AlltasksArray')) {
        deleteTask(setArrayData('AlltasksArray'))
        taskGenerator(todayTasks, 'section', 'today');
        // deleteTask()
        console.log(setArrayData('AlltasksArray'))
    }
    // populateData('todayTasksArray', todayTasksArray)
}
