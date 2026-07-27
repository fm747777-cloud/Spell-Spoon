export type WorldMode = 'all' | 'magical' | 'dark_fantasy';

export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  speakerNotes: {
    duration: string;
    presenterRole: string;
    talkingPoints: string[];
    academicTerms: string[];
  };
}

export interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
  percentage?: string;
  world: 'both' | 'magical' | 'dark_fantasy';
}

export interface VideoTimestamp {
  time: number;
  label: string;
  description: string;
  world: 'entrance' | 'both' | 'dark' | 'magical' | 'menu' | 'activity';
}
