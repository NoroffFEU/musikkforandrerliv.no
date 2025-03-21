export interface HeroContent {
  image: string;
  title: string;
  subtitle: string;
}

export interface HistoryContent {
  image: string;
  backIcon: string;
  title: string;
  content: string;
}

export interface StaffMember {
  image: string;
  role: string;
  teacher: string;
  content: string;
}

export interface StaffContent {
  title: string;
  team: StaffMember[];
}

export interface WorkContent {
  image: string;
  title: string;
  content: string;
}

export interface VolunteerContent {
  image: string;
  title: string;
  content: string;
}

export interface SupportContent {
  image: string;
  title: string;
  content: string;
}

export interface GalleryContent {
  image: string[];
}

export interface CalendarEvent {
  date: string;
  title: string;
}

export interface CalendarContent {
  title: string;
  events: CalendarEvent[];
}

export interface LandingPageContent {
  hero: HeroContent;
  history: HistoryContent;
  staff: StaffContent;
  work: WorkContent;
  volunteer: VolunteerContent;
  support: SupportContent;
  gallery: GalleryContent;
  calender: CalendarContent;
}