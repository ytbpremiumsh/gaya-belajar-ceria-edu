
export type LearningStyle = 'visual' | 'auditory' | 'kinesthetic';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
  };
  scores: {
    a: LearningStyle;
    b: LearningStyle;
    c: LearningStyle;
  };
}

export interface QuizResult {
  visual: number;
  auditory: number;
  kinesthetic: number;
  dominantStyle: LearningStyle;
  percentage: {
    visual: number;
    auditory: number;
    kinesthetic: number;
  };
}

export interface LearningStyleInfo {
  title: string;
  description: string;
  traits: string[];
  strategies: string[];
  icon: string;
}
