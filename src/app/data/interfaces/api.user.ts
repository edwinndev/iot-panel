/* export interface User {
  names:    string;
  surnames: string;
  email:    string;
  password: string;
  phone:    string;
} */

export interface User {
  ID:        number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  names:     string;
  surnames:  string;
  phone:     string;
  email:     string;
  role:      string;
}
