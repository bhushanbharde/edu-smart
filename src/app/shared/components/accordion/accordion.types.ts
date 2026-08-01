import { IconName } from "../../types";

export interface AccordionItem {
  title: string;
  content?: string;
  disabled?: boolean;
  icon?: IconName;
}
