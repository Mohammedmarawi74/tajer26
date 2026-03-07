
import React from 'react';
import { Slide, SlideType, AppTheme } from '../types';
import ChartComponent from './ChartComponent';
import { TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react';

interface Props {
  slide: Slide;
  theme: AppTheme;
  logo?: string;
  customCss?: string;
  id?: string;
}

const SlideCanvas: React.FC<Props> = ({ slide, theme, logo, customCss, id }) => {
  return (
    <div
      id={id}
      className="slide-canvas"
      style={{
        backgroundColor: theme.background,
        color: theme.textColor,
        backgroundImage: slide.image ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <style>{customCss}</style>

      {/* Background Decor */}
      <div
        className="slide-canvas__bg-decor"
        style={{ backgroundColor: theme.primary }}
      />
      <div className="slide-canvas__bg-icon">
        <TrendingUp size={120} color={theme.primary} />
      </div>

      {/* Header / Logo */}
      <div className="slide-canvas__header">
        {logo ? (
          <img src={logo} alt="Logo" className="slide-canvas__logo-img" />
        ) : (
          <div
            className="slide-canvas__logo"
            style={{ backgroundColor: theme.primary }}
          >
            R
          </div>
        )}
        <span className="slide-canvas__brand" style={{ color: theme.textColor }}>
          RADAR AL-MUSTATHMIR
        </span>
      </div>

      {/* Slide Content */}
      <div className="slide-canvas__content">
        <h1
          className="slide-canvas__title"
          style={{ color: theme.textColor }}
        >
          {slide.title}
        </h1>

        <p
          className="slide-canvas__subtitle"
          style={{ color: theme.accent }}
        >
          {slide.subtitle}
        </p>

        {slide.type === SlideType.INTRO && slide.description && (
          <div className="slide-canvas__description">
            <p className="slide-canvas__description-text">
              {slide.description}
            </p>
            {slide.buttonText && (
              <div
                className="slide-canvas__button"
                style={{ backgroundColor: theme.primary, color: '#000' }}
              >
                {slide.buttonText}
                <ArrowLeft size={28} />
              </div>
            )}
          </div>
        )}

        {slide.type === SlideType.CHART && slide.chartData && (
          <div className="slide-canvas__chart">
            <ChartComponent data={slide.chartData} color={theme.primary} />
          </div>
        )}

        {slide.type === SlideType.STEPS && slide.points && (
          <div className="slide-canvas__steps">
            {slide.points.map((point, idx) => (
              <div key={idx} className="slide-canvas__step">
                <span className="slide-canvas__step-text">{point}</span>
                <CheckCircle size={40} color={theme.primary} className="slide-canvas__step-icon" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div 
        className="slide-canvas__footer"
        style={{ 
          backgroundColor: theme.footerBg || 'rgba(0, 0, 0, 0.3)',
          borderColor: `rgba(255, 255, 255, 0.1)`
        }}
      >
        <div 
          className="slide-canvas__footer-right"
          style={{ color: theme.footerTextRight || '#ffffff' }}
        >
          منصة المستثمر
        </div>
        <div 
          className="slide-canvas__footer-left"
          style={{ color: theme.footerTextLeft || '#10b981' }}
        >
          al_investor.com
        </div>
      </div>
    </div>
  );
};

export default SlideCanvas;
