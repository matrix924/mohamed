export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChartDataPoint {
  category: string;
  value: number;
  description?: string;
}

export enum Section {
  ABSTRACT = 'abstract',
  FINDINGS = 'findings',
  CHAT = 'chat',
  CITATION = 'citation'
}