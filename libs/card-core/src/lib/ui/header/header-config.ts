import { JustifyContent } from "../shared/enums/justify-content.enum";

export interface HeaderConfig {
  justifyContent: JustifyContent;
}

export const headerConfDefault: HeaderConfig = {
  justifyContent: JustifyContent.SpaceBetween,
}
