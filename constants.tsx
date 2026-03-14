
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

// Al-Tajer Digital Modern Theme - Primary
export const AL_TAJER_DEFAULT_THEME: AppTheme = {
  id: 'al-tajer-default',
  name: 'التاجر الرقمي',
  primary: '#2563EB',        // Electric Blue
  secondary: '#1E40AF',      // Darker Blue
  accent: '#10B981',         // Mint Green
  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
  textColor: '#0F172A',      // Charcoal Black
  footerBg: 'rgba(37, 99, 235, 0.08)',
  footerTextRight: '#0F172A',
  footerTextLeft: '#2563EB'
};

export const THEMES: AppTheme[] = [
  {
    id: 'al-tajer-default',
    name: 'التاجر الرقمي',
    primary: '#2563EB',
    secondary: '#1E40AF',
    accent: '#10B981',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(37, 99, 235, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#2563EB'
  },
  {
    id: 'al-tajer-mint',
    name: 'التاجر - نعناع',
    primary: '#10B981',
    secondary: '#059669',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #ECFDF5 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(16, 185, 129, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#10B981'
  },
  {
    id: 'al-tajer-purple',
    name: 'التاجر - أرجواني',
    primary: '#8B5CF6',
    secondary: '#7C3AED',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(139, 92, 246, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#8B5CF6'
  },
  {
    id: 'al-tajer-orange',
    name: 'التاجر - برتقالي',
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(249, 115, 22, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#F97316'
  },
  {
    id: 'al-tajer-slate',
    name: 'التاجر - رمادي',
    primary: '#475569',
    secondary: '#334155',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(71, 85, 105, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#475569'
  },
  {
    id: 'al-tajer-rose',
    name: 'التاجر - وردي',
    primary: '#E11D48',
    secondary: '#BE123C',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF1F2 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(225, 29, 72, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#E11D48'
  },
  {
    id: 'al-tajer-teal',
    name: 'التاجر - تركواز',
    primary: '#0D9488',
    secondary: '#0F766E',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDFA 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(13, 148, 136, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#0D9488'
  },
  {
    id: 'al-tajer-indigo',
    name: 'التاجر - نيلي',
    primary: '#4F46E5',
    secondary: '#4338CA',
    accent: '#10B981',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
    textColor: '#0F172A',
    footerBg: 'rgba(79, 70, 229, 0.08)',
    footerTextRight: '#0F172A',
    footerTextLeft: '#4F46E5'
  }
];
