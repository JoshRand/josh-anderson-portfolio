export class Project {

    id:number;
    title:string;
    description:string;
    technologies:string[];
    github:string;
    image:string;
    demo:string;
    tiles:any[];
    slides: any[];
    constructor(id: number, title: string, description: string, technologies: string[], github:string, image: string,demo:string, tiles: any[], slides: any[])
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.image = image;
        this.demo=demo;
        this.tiles = tiles;
        this.slides = slides;
        this.github = github;
    }
}
