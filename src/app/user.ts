export class User {
    constructor(
      public login:string,
      public avatar_url:string,
      public email:string,
      public location:string,
      public memberSince:Number,
      public repos:number,
      public followers:number,
      public following:number,
      public url:string
    ){}
  }
  