export type EvaluationStep = 'input' | 'analyzing' | 'result';

export interface EvaluationData {
  restaurantName: string;
  score: number;
  criticalIssues: string[];
  positives: string[];
  recommendations: string[];
}