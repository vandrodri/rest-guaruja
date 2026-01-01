export const EvaluationStep = {
  Input: 'input',
  Analyzing: 'analyzing',
  Result: 'result'
} as const;

// Isso aqui cria o tipo automaticamente baseado no objeto acima
export type EvaluationStepType = typeof EvaluationStep[keyof typeof EvaluationStep];

export interface EvaluationData {
  restaurantName: string;
  score: number;
  criticalIssues: string[];
  positives: string[];
  recommendations: string[];
}