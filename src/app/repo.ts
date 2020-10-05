export class Repo {
    constructor(
      public description:string,
      public name:string,
      public forks:number,
      public language:string,
      public html_url:string
    ){}
  }