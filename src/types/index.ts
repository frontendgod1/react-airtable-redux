export interface IUserState {
  auth: boolean;
  name: string;
  data: ClassData[] | undefined;
}

export interface IAuthState {
  auth: boolean;
  name: string;
}

export interface Student {
  createdTime: string;
  id: string;
  fields: {
    Name: string;
    Classes: string[];
  };
}

export interface StudentResponse {
  records: Student[];
}

export interface Class {
  createdTime: string;
  id: string;
  fields: {
    Name: string;
    Students: string[];
  };
}

export interface ClassData {
  name: string;
  students: string[];
}
