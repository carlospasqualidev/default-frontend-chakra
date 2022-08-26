import type { MenuProps } from "antd";

export interface BreadcrumbHistory {
  url: string;
  title: string;
}

export type MenuItem = Required<MenuProps>["items"][number];
