import { Category } from "./category";
export interface Photo {
    id: number;
    name: string;
    description: string;
    dateOfSubmission: Date;
    image: string; // Assuming image is a URL string
    category: Category; // Assuming Category is another interface representing the category of the photo
  }