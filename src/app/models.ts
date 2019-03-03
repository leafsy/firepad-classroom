export interface Mode {
  name: string;
  value: string;
  contMain: string;
  contNote: string;
}

export interface User {
  id: string;
  name: string;
  color: string;
}

export enum UserType { Instructor, Student }