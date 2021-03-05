export interface IFindNaver {
  where: {
    name: string;
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
