export interface AITool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  testimonials: { author: string; text: string }[];
  category: ToolCategory;
  pricing: 'Free' | 'Paid' | 'Freemium';
  priceRange?: string;
  rating: number;
  icon: string;
  url: string;
}

export type ToolCategory = 
  | 'Writing'
  | 'Image Generator'
  | 'Video'
  | 'Coding'
  | 'Student'
  | 'Business'
  | 'Voice'
  | 'Productivity'
  | 'Comparison';

export interface Comparison {
  id: string;
  title: string;
  toolA: string;
  toolB: string;
  description: string;
  content: string;
  prosA: string[];
  prosB: string[];
  verdict: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface AIAgentTool {
  id: string;
  name: string;
  description: string;
  useCase: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  pricing: 'Free' | 'Paid' | 'Freemium';
  icon: string;
  url: string;
}

export interface AgentIdea {
  title: string;
  purpose: string;
  tools: string;
  features: string[];
}
