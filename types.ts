import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}