export type NavItem = {
  title: string;
  breadcrumbTitle?: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  items?: NavItem[];
};
