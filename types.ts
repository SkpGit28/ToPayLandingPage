export enum UserSegment {
  ENTERPRISE = 'ENTERPRISE',
  CONSUMER = 'CONSUMER'
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}