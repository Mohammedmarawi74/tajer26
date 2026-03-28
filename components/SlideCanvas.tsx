import React from 'react';
import { Slide, SlideType, AppTheme, AspectRatioType, FrameType } from '../types';
import ChartComponent from './ChartComponent';
import { TrendingUp, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';

interface Props {
  slide: Slide;
  theme: AppTheme;
  logo?: string;
  customCss?: string;
  id?: string;
  forExport?: boolean;
  aspectRatio?: AspectRatioType;
  frameType?: FrameType;
}

const SlideCanvas: React.FC<Props> = ({ 
  slide, 
  theme, 
  logo, 
  customCss, 
  id, 
  forExport,
  aspectRatio = AspectRatioType.SQUARE,
  frameType = FrameType.NONE
}) => {
  const isFrameActive = frameType !== FrameType.NONE;

  return (
    <div
      id={id}
      className={`slide-canvas slide-canvas--${aspectRatio.toLowerCase()} ${forExport ? 'slide-canvas--export' : ''} ${isFrameActive ? `slide-canvas--has-frame slide-canvas--frame-${frameType.toLowerCase()}` : ''}`}
      style={{
        background: slide.image ? `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url(${slide.image})` : theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.textColor,
      }}
    >
      <style>{customCss}</style>

      {/* Frame Components */}
      {isFrameActive && (
        <>
          <div className="slide-canvas__frame-outer" style={{ borderColor: theme.primary }} />
          <div className="slide-canvas__frame-inner" />
        </>
      )}

      {/* Main Content Wrapper (shifted for frame if needed) */}
      <div className="slide-canvas__main-wrapper">
        {/* Background Decor - Top Accent Bar */}
      <div
        className="slide-canvas__bg-decor"
        style={{ 
          background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          boxShadow: `0 4px 12px ${theme.primary}40`
        }}
      />
      
      {/* Subtle Background Pattern - Bokeh Effect */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '280px',
          height: '280px',
          background: `radial-gradient(circle, ${theme.primary}1A 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
          opacity: 0.7
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '8%',
          width: '320px',
          height: '320px',
          background: `radial-gradient(circle, ${theme.primary}1F 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          opacity: 0.65
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${theme.primary}14 0%, transparent 75%)`,
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 0,
          opacity: 0.55
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: '180px',
          height: '180px',
          background: `radial-gradient(circle, ${theme.primary}1A 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(45px)',
          zIndex: 0,
          opacity: 0.65
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '12%',
          width: '220px',
          height: '220px',
          background: `radial-gradient(circle, ${theme.primary}17 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(55px)',
          zIndex: 0,
          opacity: 0.6
        }}
      />

      {/* Decorative Icon */}
      <div className="slide-canvas__bg-icon">
        <TrendingUp size={140} color={theme.primary} strokeWidth={1} />
      </div>

      {/* Header / Logo */}
      <div className="slide-canvas__header">
        {logo ? (
          <img src={logo} alt="Logo" className="slide-canvas__logo-img" crossOrigin="anonymous" />
        ) : (
          <div
            className="slide-canvas__logo"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
              color: '#FFFFFF'
            }}
          >
            <Sparkles size={22} />
          </div>
        )}
        <span 
          className="slide-canvas__brand" 
          style={{ color: theme.textColor }}
        >
          منصة التاجر
        </span>
      </div>

      {/* Slide Content */}
      <div className="slide-canvas__content">
        {/* Title with gradient text effect */}
        <h1
          className="slide-canvas__title"
          style={{ 
            color: theme.textColor,
            background: forExport ? 'none' : `linear-gradient(135deg, ${theme.textColor} 0%, ${theme.primary} 100%)`,
            WebkitBackgroundClip: forExport ? 'none' : 'text',
            WebkitTextFillColor: forExport ? theme.textColor : 'transparent',
            backgroundClip: forExport ? 'none' : 'text',
            // If for export, ensure we use a solid color to avoid black text issues in some browsers
            ...(forExport ? { color: theme.textColor, WebkitTextFillColor: theme.textColor } : {})
          }}
        >
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p
          className="slide-canvas__subtitle"
          style={{ 
            color: theme.primary,
            background: forExport ? 'none' : `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
            WebkitBackgroundClip: forExport ? 'none' : 'text',
            WebkitTextFillColor: forExport ? theme.primary : 'transparent',
            backgroundClip: forExport ? 'none' : 'text',
            ...(forExport ? { color: theme.primary, WebkitTextFillColor: theme.primary } : {})
          }}
        >
          {slide.subtitle}
        </p>

        {/* Intro Slide Content */}
        {slide.type === SlideType.INTRO && slide.description && (
          <div className="slide-canvas__description">
            <p 
              className="slide-canvas__description-text"
              style={{ color: theme.textColor }}
            >
              {slide.description}
            </p>
            {slide.buttonText && (
              <button
                className="slide-canvas__button"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                  color: '#FFFFFF'
                }}
              >
                {slide.buttonText}
                <ArrowLeft size={26} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}

        {/* Chart Slide Content */}
        {slide.type === SlideType.CHART && slide.chartData && (
          <div className="slide-canvas__chart">
            <ChartComponent 
              data={slide.chartData} 
              primaryColor={theme.primary}
              accentColor={theme.accent}
              textColor={theme.textColor}
              forExport={forExport}
            />
          </div>
        )}

        {/* Steps Slide Content */}
        {slide.type === SlideType.STEPS && slide.points && (
          <div className="slide-canvas__steps">
            {slide.points.map((point, idx) => (
              <div 
                key={idx} 
                className="slide-canvas__step"
                style={{
                  borderRight: `4px solid ${theme.primary}`,
                }}
              >
                <span className="slide-canvas__step-text">{point}</span>
                <CheckCircle 
                  size={36} 
                  color={theme.primary} 
                  strokeWidth={2.5}
                  className="slide-canvas__step-icon"
                  fill={`${theme.primary}15`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="slide-canvas__footer"
        style={{
          background: theme.footerBg || 'rgba(255, 255, 255, 0.9)',
          border: `1px solid ${theme.primary}20`,
          boxShadow: `0 4px 16px ${theme.primary}10`
        }}
      >
        <div
          className="slide-canvas__footer-right"
          style={{ color: theme.footerTextRight || theme.textColor }}
        >
          <Sparkles size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
          منصة التاجر الرقمية
        </div>
        <div
          className="slide-canvas__footer-left"
          style={{ 
            color: theme.footerTextLeft || theme.primary,
            background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: '800'
          }}
        >
          dtajer.com 
        </div>
      </div>
      </div>
    </div>
  );
};

export default SlideCanvas;
