export interface BreadcrumbItem {
  /**
   * Text displayed in breadcrumb.
   */
  label: string;

  /**
   * Router link.
   */
  url?: string;

  /**
   * True for current page.
   */
  active: boolean;
}
