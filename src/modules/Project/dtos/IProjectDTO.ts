export interface IFindProject {
  where: {
    id?: string;
    name?: string;
    user_id?: string;
  };
}

export interface IProjectDTO {
  name: string;
  user_id: string;
  navers: any;
}
