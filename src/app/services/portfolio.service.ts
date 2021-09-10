import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from "@angular/common/http";
import { SimplePlaceholderMapper } from "@angular/compiler/src/i18n/serializers/serializer";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Project } from "../model/project";
import { Slide } from "../model/slide";
// const PORTFOLIO_DATABASE_URI = "http://192.168.1.187:8080/";
const PORTFOLIO_DATABASE_URI = "https://joshrand.xyz:8080/";
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
  slide: Slide;
  // headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
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
    return this.httpClient.put<Project>(PORTFOLIO_DATABASE_URI + "project", project);
  }
  deleteImage(image_url, project_id)
  {
    this.slide = new Slide("", image_url);
    return this.httpClient.request('DELETE', PORTFOLIO_DATABASE_URI + "slide/" + project_id, {body:this.slide});
  }
  createSlide(slide,project_id): Observable<Project>
  {
    return this.httpClient.post<Project>(PORTFOLIO_DATABASE_URI + "slide/" + project_id, slide);
  }
  saveSlide(slide)
  {
    return this.httpClient.put(PORTFOLIO_DATABASE_URI + "slide", slide);
  }
}