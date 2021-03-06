export interface IFindNaver {
  where: {
    id?: string;
    name?: string;
    user_id?: string;
  };
}

export interface INaverDTO {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects: any;
}
