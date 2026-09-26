export interface SubjectCard {
  id: string;
  title: string;
  iconName: string;
  topics: string[];
  description: string;
  badge?: string;
}

export interface CareerCard {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ComparisonItem {
  course: string;
  focus: string;
  egiDifference: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'EGI' | 'Tecnologia' | 'Gestão' | 'Metodologia';
}