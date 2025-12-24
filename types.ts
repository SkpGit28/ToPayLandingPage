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

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  pillIcon: any;
  pillText: string;
  type: 'large' | 'small' | 'wide';
  visualType: 'chart' | 'grid' | 'code' | 'list' | 'icon' | 'image';
  visualData?: any;
}