// to create /app/humans/components use command: ng generate component humans
import {animal} from "./animal";

export interface Human {
  id: number;
  age: number;
  name: string;
  pet: animal;
}
