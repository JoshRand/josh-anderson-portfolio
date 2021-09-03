import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Project } from "../model/project";

// const PORTFOLIO_DATABASE_URI = "http://192.168.1.187:8080/";
const PORTFOLIO_DATABASE_URI = "http://143.198.178.176:8080/";
// const PORTFOLIO_DATABASE_URI = "http://192.168.1.167:8080/";

@Injectable({
  providedIn: "root"
})

export class PortfolioService {
  projects: Project[];
  projectsDataSource: Observable<Project[]>;
  projectsSubscription: Subscription;
  errorProjects: string;
  constructor(private httpClient : HttpClient) { }
  project: Project;
  projectDataSource: Observable<Project>;
  projectSubscription: Subscription;
  errorProject: string;
  headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
  getProjects(): Observable<Project[]>
  {
  //  console.log("getting all projects from " + PORTFOLIO_DATABASE_URI) 
    return this.httpClient.get<Project[]>(PORTFOLIO_DATABASE_URI + "projects");
   
  }
  getProject(projectId: number) : Observable<Project>
  {
    // console.log("getting project")
    this.projectDataSource = this.httpClient.get<Project>(PORTFOLIO_DATABASE_URI + "project?id=" + projectId);
    return this.projectDataSource;
  }
  saveProject(project): Observable<Project>
  {
    return this.httpClient.put<Project>(PORTFOLIO_DATABASE_URI + "project/", project);
  }
}