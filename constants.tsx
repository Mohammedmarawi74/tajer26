
import { SlideType, Slide, AppTheme } from './types';

export const INITIAL_CHART_DATA = [
  { label: 'يناير', value: 400 },
  { label: 'فبراير', value: 300 },
  { label: 'مارس', value: 600 },
  { label: 'أبريل', value: 800 },
  { label: 'مايو', value: 500 },
  { label: 'يونيو', value: 900 },
];

export const INITIAL_SLIDES: Slide[] = [
  {
    id: '1',
    type: SlideType.INTRO,
    title: 'الركائز الاستراتيجية للتحول الرقمي',
    subtitle: 'تحليل البيانات والنمو الاقتصادي',
    description: 'نظرة شاملة على كيفية تحويل البيانات إلى قرارات استراتيجية فعالة.',
    buttonText: 'ابدأ الرحلة'
  },
  {
    id: '2',
    type: SlideType.CHART,
    title: 'تطور أداء الأصول',
    subtitle: 'مؤشرات الربع الأول لعام 2024',
    chartData: INITIAL_CHART_DATA
  },
  {
    id: '3',
    type: SlideType.STEPS,
    title: 'خطوات النجاح الاستثماري',
    subtitle: 'منهجية رادار المستثمر',
    points: [
      'تحليل السوق بعمق',
      'توزيع الأصول الذكي',
      'إدارة المخاطر الوقائية',
      'المتابعة الدورية للأداء'
    ]
  }
];

export const THEMES: AppTheme[] = [
  {
    id: 'midnight-aurora',
    name: 'فجر منتصف الليل',
    primary: '#00d9ff',
    secondary: '#0066ff',
    accent: '#ff00ff',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a0b2e 50%, #0f1a3a 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(0, 217, 255, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#00d9ff'
  },
  {
    id: 'sunset-blaze',
    name: 'غروب ملتهب',
    primary: '#ff6b35',
    secondary: '#ff3d00',
    accent: '#ffc107',
    background: 'linear-gradient(135deg, #2d0a0a 0%, #3d1a0f 50%, #1a0f0f 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(255, 107, 53, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#ff6b35'
  },
  {
    id: 'emerald-dream',
    name: 'حلم الزمرد',
    primary: '#00ff88',
    secondary: '#00cc6a',
    accent: '#00ffcc',
    background: 'linear-gradient(135deg, #0a1a1a 0%, #0f2e2e 50%, #0a2a1a 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(0, 255, 136, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#00ff88'
  },
  {
    id: 'royal-purple',
    name: 'أرجواني ملكي',
    primary: '#a855f7',
    secondary: '#7c3aed',
    accent: '#c084fc',
    background: 'linear-gradient(135deg, #1a0a2e 0%, #2e0f4a 50%, #1a1a3a 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(168, 85, 247, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#a855f7'
  },
  {
    id: 'ocean-depths',
    name: 'أعماق المحيط',
    primary: '#0ea5e9',
    secondary: '#0284c7',
    accent: '#38bdf8',
    background: 'linear-gradient(135deg, #0a1a2e 0%, #0f2a3a 50%, #0a2a3a 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(14, 165, 233, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#0ea5e9'
  },
  {
    id: 'crimson-night',
    name: 'ليل قرمزي',
    primary: '#dc2626',
    secondary: '#991b1b',
    accent: '#f87171',
    background: 'linear-gradient(135deg, #1a0a0a 0%, #2e0f0f 50%, #1a0f0f 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(220, 38, 38, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#dc2626'
  },
  {
    id: 'golden-hour',
    name: 'الساعة الذهبية',
    primary: '#fbbf24',
    secondary: '#d97706',
    accent: '#fcd34d',
    background: 'linear-gradient(135deg, #1a1a0a 0%, #2e2a0f 50%, #1a1a0f 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(251, 191, 36, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#fbbf24'
  },
  {
    id: 'arabic-coffee',
    name: 'قهوة عربية',
    primary: '#d4a574',
    secondary: '#8b6914',
    accent: '#f5d5a8',
    background: 'linear-gradient(135deg, #1a1510 0%, #2e251a 50%, #1a1612 100%)',
    textColor: '#ffffff',
    footerBg: 'rgba(212, 165, 116, 0.15)',
    footerTextRight: '#ffffff',
    footerTextLeft: '#d4a574'
  }
];
