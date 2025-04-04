export interface Characters {
  birthdate: string;
  children: string[];
  fullName: string;
  hogwartsHouse: HogwartsHouseType;
  image: string;
  index: number;
  interpretedBy: string;
  nickname: string;
}

type HogwartsHouseType =
  | "Gryffindor"
  | "Hufflepuff"
  | "Ravenclaw"
  | "Slytherin";

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
