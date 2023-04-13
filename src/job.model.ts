export interface Job {
    id?: number;
    title: string;
    description: string;
    location: string;
    salary: number;
    companyName: string;
    companyLogo?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  