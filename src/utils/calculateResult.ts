
import { LearningStyle, QuizResult } from '../types';

export type AnswerMap = Record<number, 'a' | 'b' | 'c'>;

export const calculateResult = (answers: AnswerMap, questions: any[]): QuizResult => {
  const results = {
    visual: 0,
    auditory: 0,
    kinesthetic: 0
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find((q) => q.id === parseInt(questionId));
    if (question) {
      const style = question.scores[answer];
      results[style as LearningStyle]++;
    }
  });

  const total = Object.values(results).reduce((sum, score) => sum + score, 0);

  // Calculate percentages
  const percentage = {
    visual: Math.round((results.visual / total) * 100),
    auditory: Math.round((results.auditory / total) * 100),
    kinesthetic: Math.round((results.kinesthetic / total) * 100)
  };

  // Find dominant style
  let dominantStyle: LearningStyle = 'visual';

  if (results.auditory > results.visual && results.auditory >= results.kinesthetic) {
    dominantStyle = 'auditory';
  } else if (results.kinesthetic > results.visual && results.kinesthetic > results.auditory) {
    dominantStyle = 'kinesthetic';
  }

  return {
    visual: results.visual,
    auditory: results.auditory,
    kinesthetic: results.kinesthetic,
    dominantStyle,
    percentage
  };
};
