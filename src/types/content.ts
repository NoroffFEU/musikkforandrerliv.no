/**
 * Base interface for sections that have an image, title, and content
 */
export interface BaseSection {
  id?: string;        // Optional section identifier
  image: string;      // Path to the image
  title: string;      // Section title, can be translation key
  content: string;    // Section content, can be translation key
}

/**
 * Hero section content
 */
export interface HeroContent {
  image: string;      // Background image path
  title: string;      // Main title, can be translation key
  subtitle: string;   // Subtitle text, can be translation key
}

/**
 * History section content
 */
export interface HistoryContent extends BaseSection {
  backIcon: string;   // Back to top icon
}

/**
 * Staff member information
 */
export interface StaffMember {
  image: string;      // Staff member's photo
  role: string;       // Role/position, can be translation key
  teacher: string;    // Teacher's name
  content: string;    // Bio description, can be translation key
}

/**
 * Staff section content
 */
export interface StaffContent {
  title: string;      // Section title, can be translation key
  team: StaffMember[];  // Array of staff members
}

/**
 * Work section content
 */
export type WorkContent = BaseSection;

/**
 * Volunteer section content
 */
export type VolunteerContent = BaseSection;

/**
 * Support section content
 */
export type SupportContent = BaseSection;

/**
 * Gallery section content
 */
export interface GalleryContent {
  title?: string;     // Optional section title
  image: string[];    // Array of image paths
}

/**
 * Calendar event information
 */
export interface CalendarEvent {
  date: string;       // Event date
  title: string;      // Event title, can be translation key
}

/**
 * Calendar section content
 */
export interface CalendarContent {
  title: string;      // Section title, can be translation key
  events: CalendarEvent[];  // Array of events
}

/**
 * Complete landing page content structure
 */
export interface LandingPageContent {
  hero: HeroContent;
  history: HistoryContent;
  staff: StaffContent;
  work: WorkContent;
  volunteer: VolunteerContent;
  support: SupportContent;
  gallery: GalleryContent;
  calender: CalendarContent;  // Note the spelling "calender" matches the JSON
}