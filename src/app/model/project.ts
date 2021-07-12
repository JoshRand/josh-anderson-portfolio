export class Project {

    id:number;
    title:string;
    description:string;
    technologies:string[];
    github:string;
    image:string;
    demo:string;
    grid_tiles:any[];
    slides: any[];
    constructor(projectId: number, title: string, description: string, technologies: string[], github:string, image: string,demo:string, grid_tiles: any[], slides: any[])
    {
        this.id = projectId;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.image = image;
        this.demo=demo;
        this.grid_tiles = grid_tiles;
        this.slides = slides;
        this.github = github;
    }
}
