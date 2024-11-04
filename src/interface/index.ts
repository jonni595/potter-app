export interface Characters {
  birthdate: string;
  children: string[];
  fullName: string;
  hogwartsHouse: HogwartsHouse;
  image: string;
  index: number;
  interpretedBy: string;
  nickname: string;
}

export enum HogwartsHouse {
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin",
}

export interface Houses {
  animal: string;
  colors: string[];
  emoji: string;
  founder: string;
  house: string;
  index: number;
}

export interface Books {
  cover: string;
  description: string;
  index: number;
  number: number;
  originalTitle: string;
  pages: number;
  releaseDate: string;
  title: string;
}
