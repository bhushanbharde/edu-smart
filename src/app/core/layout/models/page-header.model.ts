import { PageAction } from './page-action.model';

export interface PageHeader {
  title: string;

  subtitle?: string;

  actions: PageAction[];
}
