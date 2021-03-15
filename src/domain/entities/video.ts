export class Video {
   title: string;
   description: string;
   writer: string;
   imdbScore: number;
   year: number;
   
    constructor (title: string, description: string, writer: string, imdbScore: number, year: number) {
        this.title = title;
        this.description = description;
        this.writer = writer;
        this.imdbScore = imdbScore;
        this.year = year;
    }
  }