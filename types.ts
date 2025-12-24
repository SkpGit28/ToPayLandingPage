import React from 'react';

export enum UserSegment {
  ENTERPRISE = 'ENTERPRISE',
  CONSUMER = 'CONSUMER'
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeroContentData {
  heading: React.ReactNode;
  body: string;
  buttonColor: string;
  badges: string[] | { label: string; rating: string };
}

export interface MetricData {
  value: number;
  suffix: string;
  label: string;
}

export interface CertificationData {
  id: string;
  name: string;
  role: string;
  logo: string;
}

export type BentoVisualType = 'chart' | 'grid' | 'code' | 'list' | 'icon' | 'image';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  pillIcon: React.ElementType;
  pillText: string;
  type: 'large' | 'small' | 'wide';
  visualType: BentoVisualType;
  visualData?: any; // Still any for now as it varies wildly, but better than before
}