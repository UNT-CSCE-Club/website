import { Price } from '@chec/commerce.js/types/price';

// Commerce.js

export interface RelatedProductType {
  description: string;
  id: string;
  media: {
    source: string;
    type: string;
  };
  name: string;
  permalink: string;
  price: Price;
  quantity: number;
  sku: string;
}

// Contentful
// Generated by https://quicktype.io

export interface HomePageFields {
  hero: Hero;
  about: About;
  events: Events;
  workshops: Workshops;
  officers: Officers;
  contact: Contact;
}

export interface About {
  metadata: Metadata;
  sys: PurpleSys;
  fields: AboutFields;
}

export interface AboutFields {
  title: string;
  description: string;
  section1Title: string;
  section1Description: string;
  section1Image: SectionImage;
  section2Title: string;
  section2Description: string;
  section2image: SectionImage;
}

export interface SectionImage {
  metadata: Metadata;
  sys: PurpleSys;
  fields: Section1ImageFields;
}

export interface Section1ImageFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface PurpleSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: string;
  updatedAt: string;
  environment: ContentType;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: string;
  type: PurpleType;
  linkType: LinkType;
}

export enum LinkType {
  ContentType = 'ContentType',
  Environment = 'Environment',
  Space = 'Space',
}

export enum PurpleType {
  Link = 'Link',
}

export enum Locale {
  EnUS = 'en-US',
}

export enum FluffyType {
  Asset = 'Asset',
  Entry = 'Entry',
}

export interface Contact {
  metadata: Metadata;
  sys: PurpleSys;
  fields: ContactFields;
}

export interface ContactFields {
  title: string;
  description: string;
  contactFormTitle: string;
}

export interface Events {
  metadata: Metadata;
  sys: PurpleSys;
  fields: EventsFields;
}

export interface EventsFields {
  title: string;
  description: string;
  eventsList: EventsList[];
}

export interface EventsList {
  metadata: Metadata;
  sys: PurpleSys;
  fields: EventsListFields;
}

export interface EventsListFields {
  title: string;
  description: string;
  icon: string;
}

export interface Hero {
  metadata: Metadata;
  sys: PurpleSys;
  fields: HeroFields;
}

export interface HeroFields {
  heading1: string;
  heading2: string;
}

export interface Officers {
  metadata: Metadata;
  sys: PurpleSys;
  fields: OfficersFields;
}

export interface OfficersFields {
  title: string;
  description: string;
  officers: Officer[];
}

export interface Officer {
  metadata: Metadata;
  sys: PurpleSys;
  fields: OfficerFields;
}

export interface OfficerFields {
  name: string;
  title: string;
  description: string;
  profilePic?: ProfilePic;
}

export interface ProfilePic {
  metadata: Metadata;
  sys: PurpleSys;
  fields: ProfilePicFields;
}

export interface ProfilePicFields {
  title: string;
  file: File;
}

export interface Workshops {
  metadata: Metadata;
  sys: PurpleSys;
  fields: WorkshopsFields;
}

export interface WorkshopsFields {
  title: string;
  description: string;
  workshops: EventsList[];
}
