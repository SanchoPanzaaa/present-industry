import { JustifyContent } from "../shared/model/justify-content.enum";

export interface HeaderConfig {
  justifyContent: JustifyContent;
}

export const headerConfDefault: HeaderConfig = {
  justifyContent: JustifyContent.SpaceBetween,
}
