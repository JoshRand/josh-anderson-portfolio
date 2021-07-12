import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Project[]
  {
    return projects.map(p => new Project(p.id,p.title,p.description,p.technologies, p.github, p.image,p.demo, p.grid_tiles, p.slides));
  }
  getProject(projectId: number)
  {
    return projects.find(p => p.id === projectId);
  }
}
const projects = [
  {
    'id':0,
    'title':'The Automated Game Player',
    'description':'An Application to control characters in a video game based on game memory data. ',
    'technologies':[
      'C#',
      '.NET',
      'Windows Forms',
      'A* Pathfinding',
      'MemoryAccess Library',
      'Visual Studio',
      'GitHub',
    ],
    'github':''
    ,
    'image':'../../assets/TAGP/AStarVisualizer2.PNG',
    'demo':'-QF4bZye_Ns',
    'grid_tiles':
    [
    {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
    {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'The Automated Game Player is an application that automatically controls a single character or multiple characters through a series of simulated keystrokes and program memory manipulation. In order to make this possible I needed to create my own library or (DLL) to Access or Modify the game\'s program memory. After that I used a Hex viewer application to find pointer locations in the games memory for: health, mana, position, targets, items, players, and monsters. I used A* pathfinding to find the optimal route from player to monster if the player is a Fighter, and player to player if following another player. Although this project is complete, I still update the control logic and UI from time to time.' },
    {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
    {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
    {title: 'Demo', cols: 7, rows: 3, background_color: '', tile_type:'text', image:'', section:'true'},
    {title: '', cols: 7, rows: 16, background_color: 'none', tile_type:'demo', image:''},
    {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:''}
  ],
    'slides':[
    {image_description:'All Forms', image:'../../assets/TAGP/AllForms.PNG'},
    {image_description:'Player Select Form', image:'../../assets/TAGP/PlayerSelectionMenu.PNG'},
    {image_description:'Fighter Form', image:'../../assets/TAGP/FighterControls.PNG'},
    {image_description:'Healer Form', image:'../../assets/TAGP/PoetControlls.PNG'},
    {image_description:'A* Visualizer 1', image:'../../assets/TAGP/AStarVisualizer1.PNG'},
    {image_description:'A* Visualizer 2', image:'../../assets/TAGP/AStarVisualizer2.PNG'},
    {image_description:'A* Visualizer 3', image:'../../assets/TAGP/AStarVisualizer3.PNG'},
    {image_description:'MemoryAccess Code', image:'../../assets/TAGP/MemAccess.PNG'},
    {image_description:'Memory Hex Data View', image:'../../assets/TAGP/LocationsOfPointersExample.PNG'},
  ]
  },
  {
    'id':1,
    'title':'Smart Treadmill',
    'description':'An Android Application that controlls a Treadmill based on the users heart rate. ',
    'technologies':[
      'Java',
      'C/C++',
      'Arduino',
      'BLE',
      'Android Studio',
      'GitHub',
    ],
    'github':'SeniorProject'
    ,
    'image':'../../assets/ST/MafWorkout.png',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':
    [
      {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'The Smart Treadmill project was developed by a team of 5 Computer Engineering students at the University of Houston - Clear Lake. The project solution consists of 2 Arduinos, a Heart Rate Monitor, a Treadmill, and an Android Application. The Smart Treadmill adjusts its speed depending on the heart rate of the user recieved by the HR monitor.' },
      {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
      {title: 'Project Poster', cols: 7, rows: 3, background_color: '', tile_type:'text', image:'', section:'true'},
      {title: '', cols: 7, rows: 60, background_color: 'none', tile_type:'image', image:'../../assets/ST/ProjectPoster.jpg'},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:''}
    ],
    'slides':[
      {image_description:'Main Page', image:'../../assets/ST/MainPage.PNG'},
      {image_description:'MAF Workout Settings', image:'../../assets/ST/MafWorkoutMenu.png'},
      {image_description:'MAF Workout', image:'../../assets/ST/MafWorkout.png'},
    ]
  },
  {
    'id':2,
    'title':'Dollars Bank',
    'description':'A mock Banking Application used to Deposit, Withdraw, and Transfering funds. ',
    'technologies':[
      'Java',
      'Springboot',
      'Jsp',
      'MySQL',
      'Rest API\'s',
      'JPA',
      'CSS',
      'Eclipse',
      'GitHub'
    ],
    'github':'DollarsBankSpringBootApplication'
    ,
    'image':'../../assets/SpringbootBank/TransactionHistory.PNG',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':
    [
      {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'A mock Banking Application used to Deposit, Withdraw, and Transfering funds. Users may create as many accounts as they desire and transfer money between accounts, deposit, and witdraw from those accounts.' },
      {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
      {title: '', cols: 7, rows: 3, background_color: '', tile_type:'text', image:'', section:'true'},
    ],
    'slides':[
      {image_description:'Login', image:'../../assets/SpringbootBank/DollarsBankLogin.PNG'},
      {image_description:'Registration', image:'../../assets/SpringbootBank/RegisterPage.PNG'},
      {image_description:'Home', image:'../../assets/SpringbootBank/HomePage.PNG'},
      {image_description:'Transactions', image:'../../assets/SpringbootBank/TransactionsPage.PNG'},
      {image_description:'Transaction History', image:'../../assets/SpringbootBank/TransactionHistory.PNG'},
      {image_description:'Account Details', image:'../../assets/SpringbootBank/AccountDetails.PNG'},
    ]
  },
  {
    'id':3,
    'title':'Core Java Shopping App',
    'description':'A Shopping app consisting of only Core Java, and has the option to enable MySQL mode. ',
    'technologies':[
      'Java',
      'JDBC',
      'MySQL',
      'Eclipse',
      'GitHub'
    ],
    'github':'CoreJavaStandAloneShoppingApp'
    ,
    'image':'../../assets/ShoppingApp/ShoppingGuest.PNG',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':
    [
      {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'The Core Java Shopping App is a pure java based application which uses Collections, streams, and file streams to emulate an ecommerce website. If you don\'t want to use filestreams to save Invoices or Inventory, you can use the main menu option to switch the Dao to save information to a MySQL database.'},
      {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
    ],
    'slides':[
      {image_description:'Menu', image:'../../assets/ShoppingApp/MainMenu.PNG'},
      {image_description:'Register & Login', image:'../../assets/ShoppingApp/RegisterLogin.PNG'},
      {image_description:'Cart Info', image:'../../assets/ShoppingApp/CartInfo.PNG'},
      {image_description:'Invoice', image:'../../assets/ShoppingApp/Invoice.PNG'},
      {image_description:'Change or Review Order', image:'../../assets/ShoppingApp/ManageOrderChangeItem.PNG'},

    ]
  },
  {
    'id':4,
    'title':'Enrollee Backend',
    'description':'EnrolleeBackend to provide simple API request routes for the use of manipulating enrollee data in a MongoDB database. ',
    'technologies':[
      'Java',
      'Springboot',
      'Spring Data MongoDB',
      'MongoDB',
      'Eclipse',
      'GitHub',
      'Postman',
      'MongoDB Atlas'
    ],
    'github':'EnrolleeBackend'
    ,
    'image':'../../assets/EB/EnrolleeBackendPostman.PNG',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':
    [
      {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'EnrolleeBackend is a Java and Spring Boot based web application backend. Its purpose is to provide simple API request routes for the use of manipulating data in a MongoDB database.' },
      {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
    ],
    'slides':[
      {image_description:'Main Page', image:'../../assets/EB/EnrolleeBackendPostman.PNG'},
      {image_description:'Add Enrollee', image:'../../assets/EB/AddEnrollee.PNG'},
      {image_description:'Delete Enrollee', image:'../../assets/EB/DelEnrollee.PNG'},
      {image_description:'Modify and Get Enrollee', image:'../../assets/EB/ModGetEnrollee.PNG'},
      {image_description:'Add a Dependent', image:'../../assets/EB/AddDependent.PNG'},
      {image_description:'Delete or Patch Dependent', image:'../../assets/EB/DelPatchDependent.PNG'},
      


    ]
  },
  {
    'id':5,
    'title':'Portfolio',
    'description':'A web portfolio to provide visual and textual information about projects i\'ve made. ',
    'technologies':[
      'Java',
      'Springboot',
      'MySQL',
      'Angular',
      'Angular Material',
      'Visual Studio Code',
      'Eclipse',
      'GitHub',
      'Docker',
      'AWS'
    ],
    'github':'josh-anderson-portfolio'
    ,
    'image':'../../assets/Portfolio/PortfolioHome.PNG',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':[
      {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'A Web Portfolio to show off what I can do as a Computer Engineer.  I started this project because I wanted to learn more about Angular and TypeScript.' },
      {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
      {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
      {title: '', cols: 7, rows: 3, background_color: '', tile_type:'text', image:'', section:'true'},
    ],
    'slides':[
      {image_description:'Home Page', image:'../../assets/Portfolio/HomePage.PNG'},
      {image_description:'Projects Page', image:'../../assets/Portfolio/Portfolio.PNG'},
      {image_description:'About Me', image:'../../assets/Portfolio/AboutMe.PNG'},
    ]
  }
]