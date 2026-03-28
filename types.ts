
export enum SlideType {
  INTRO = 'INTRO',
  CHART = 'CHART',
  PRICING = 'PRICING',
  STEPS = 'STEPS'
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface Slide {
  id: string;
  type: SlideType;
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  chartData?: ChartDataPoint[];
  buttonText?: string;
  points?: string[];
}

export interface AppTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  textColor: string;
  footerBg?: string;
  footerTextRight?: string;
  footerTextLeft?: string;
}

export interface LogoOption {
  id: string;
  name: string;
  src: string;
}

export enum AspectRatioType {
  SQUARE = 'SQUARE',
  PORTRAIT = 'PORTRAIT',
  STORY = 'STORY'
}

export enum FrameType {
  NONE = 'NONE',
  MINIMAL = 'MINIMAL',
  THICK = 'THICK',
  GLASS = 'GLASS'
}

export interface AppState {
  slides: Slide[];
  currentSlideIndex: number;
  theme: AppTheme;
  logo?: string;
  customCss: string;
  aspectRatio: AspectRatioType;
  frameType: FrameType;
}

export const PREDEFINED_LOGOS: LogoOption[] = [
  { id: 'logo-1', name: 'شعار 1', src: '/logooo/logo-1.png' },
  { id: 'logo-2', name: 'شعار 2', src: '/logooo/logo-2.png' },
  { id: 'logo-3', name: 'شعار 3', src: '/logooo/logo-3.png' },
  { id: 'logo-4', name: 'شعار 4', src: '/logooo/logo-4.png' },
];
