export class User {
    constructor(
      public image:string,
      public name:string,
      public email:string,
      public location:string,
      public memberSince:Date,
      public repos:number,
      public followers:number,
      public following:number,
      public url:string
    ){}
  }
  