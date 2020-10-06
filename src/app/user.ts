export class User {
    constructor(
      public login:string,
      public avatar_url:string,
      public email:string,
      public location:string,
      public memberSince:Number,
      public repo:number,
      public followers:number,
      public following:number,
      public html_url:string
    ){}
  }
  