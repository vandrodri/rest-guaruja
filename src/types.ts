export const EvaluationStep = {
  IDLE: 'input',
  ANALYZING: 'analyzing',
  RESULT: 'result'
} as const;

export type EvaluationStepType = typeof EvaluationStep[keyof typeof EvaluationStep];

export interface EvaluationData {
  restaurantName: string;
  score: number;
  criticalIssues: string[];
  positives: string[];
  recommendations: string[];
}