import { Option } from './options';

export type Question = {
  id: number;
  question: string;
  options: Option[];
}
