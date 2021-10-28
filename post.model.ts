export class Post {
  constructor(
    public title: string,
    public description: string,
    public imagePath: string,
    public author: string,
    public dateTimeCreater: Date,
    public numberOfLikes : number,
    public numbeOfUnlike: number

  ) {}
}