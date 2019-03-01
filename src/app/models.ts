export interface Mode {
  name: string;
  value: string;
  template: string;
}

export interface User {
  id: string;
  name: string;
  color: string;
}

export enum UserType { Instructor, Student }