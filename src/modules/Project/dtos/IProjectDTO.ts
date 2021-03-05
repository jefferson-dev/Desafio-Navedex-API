export interface IFindProject {
  where: {
    name: string;
  };
}

export interface IProjectDTO {
  name: string;
  user_id: string;
}
