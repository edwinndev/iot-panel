export interface LoginResponse {
  id:        number;
  names:     string;
  surnames:  string;
  email:     string;
  phone:     string;
  role:      string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: string;
  token:     string;
}

export interface LoginRequest {
  username:  string;
  password:  string;
}