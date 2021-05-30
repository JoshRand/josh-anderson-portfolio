import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Project[]
  {
    return projects.map(p => new Project(p.id,p.title,p.description,p.technologies, p.image,p.demo, p.grid_tiles, p.slides));
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
    'description':'An Application to controll characters in a video game based on game memory data. ',
    'technologies':[
      'C#',
      'Windows Forms',
      'A* Pathfinding',
      'Visual Studio',
      'GitHub',
    ],
    'image':'../../assets/PoetControlls.PNG',
    'demo':'fnVsgb1SXU8',
    'grid_tiles':
    [
    {title: 'About', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
    {title: '', cols: 7, rows: 5, background_color: 'none', tile_type:'text', image:'', section:'false', content:'The Automated Game Player is an application that automatically controls a single character or multiple characters through a series of simulated keystrokes and program memory manipulation. In order to make this possible I needed to create my own library or (DLL) to Access or Modify the game\'s program memory. After that I used a Hex viewer application to find pointer locations in the games memory for: health, mana, position, targets, items, players, and monsters. I used A* pathfinding to find the optimal route from player to monster if the player is a Fighter, and player to player if following another player. Although this project is complete, I still update the control logic and UI from time to time.' },
    {title: 'Pictures', cols:7, rows: 3, background_color: 'none', tile_type:'text', image:''},
    {title: '', cols:7, rows: 21, background_color: 'none', tile_type:'carousel', image:''},
    {title: 'Demo', cols: 7, rows: 3, background_color: '', tile_type:'text', image:'', section:'true'},
    {title: '', cols: 7, rows: 16, background_color: 'none', tile_type:'demo', image:''},
    {title: 'four', cols: 7, rows: 2, background_color: 'yellow', tile_type:'text', image:''}
  ],
    'slides':[{image_description:'Healer Controls Form', image:'../../assets/PoetControlls.PNG'},
    {image_description:'All Forms', image:'../../assets/Menus.PNG'},
    {image_description:'Fighter Form', image:'../../assets/FighterControls.PNG'},
    {image_description:'Player Select Form', image:'../../assets/PlayerSelectionMenu.PNG'},
    {image_description:'A* Visualization', image:'../../assets/AstarHpathFighter.PNG'}]
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
    'image':'../../assets/AndroidApp1.png',
    'demo':'https://www.youtube.com/embed/fnVsgb1SXU8',
    'grid_tiles':[{text: 'One', cols: 3, rows: 1, background_color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background_color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background_color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, background_color: '#DDBDF1'},],
    'slides':['']
  },
  {
    'id':2,
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
    'image':'../../assets/PortfolioHome.PNG',
    'demo':'https://www.youtube.com/embed/fnVsgb1SXU8',
    'grid_tiles':[{text: 'One', cols: 3, rows: 1, background_color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background_color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background_color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, background_color: '#DDBDF1'},],
    'slides':['']
  },
  {
    'id':3,
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
    'image':'../../assets/TransactionHistory.PNG',
    'demo':'https://www.youtube.com/embed/fnVsgb1SXU8',
    'grid_tiles':[{text: 'One', cols: 3, rows: 1, background_color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background_color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background_color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, background_color: '#DDBDF1'},],
    'slides':['']
  },
  {
    'id':4,
    'title':'Core Java Shopping App',
    'description':'A Shopping app consisting of only Core Java, and MySQL. ',
    'technologies':[
      'Java',
      'JDBC',
      'MySQL',
      'Eclipse',
      'GitHub'
    ],
    'image':'../../assets/ShoppingGuest.PNG',
    'demo':'https://www.youtube.com/embed/fnVsgb1SXU8',
    'grid_tiles':[{text: 'One', cols: 2, rows: 1, background_color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background_color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background_color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, background_color: '#DDBDF1'},],
    'slides':['']
  },
  {
    'id':5,
    'title':'Enrollee Backend',
    'description':'EnrolleeBackend is a Java and Spring Boot based web application backend. Its purpose is to provide simple API request routes for the use of manipulating data in a MongoDB database. ',
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
    'image':'../../assets/EnrolleeBackendPostman.PNG',
    'demo':'https://www.youtube.com/embed/fnVsgb1SXU8',
    'grid_tiles':[{text: 'One', cols: 3, rows: 1, background_color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background_color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background_color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, background_color: '#DDBDF1'},],
    'slides':['']
  }
  
]