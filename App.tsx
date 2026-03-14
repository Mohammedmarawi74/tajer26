import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { AppState, SlideType } from './types';
import { INITIAL_SLIDES, THEMES } from './constants';
import Sidebar from './components/Sidebar';
import SlideCanvas from './components/SlideCanvas';
import { Download, ChevronRight, ChevronLeft, Image as ImageIcon, Sparkles, BarChart3, Plus, Layout } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    slides: INITIAL_SLIDES,
    currentSlideIndex: 0,
    theme: THEMES[0],
    customCss: '',
  });

  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    try {
      // Small delay to ensure any animations or state updates are settled
      // Moderate delay to ensure everything is rendered
      await new Promise(r => setTimeout(r, 500));
      const dataUrl = await htmlToImage.toPng(canvasRef.current, {
        quality: 1,
        pixelRatio: 2,
        width: 1080,
        height: 1080,
        backgroundColor: '#ffffff', // Ensure no transparency issues
        style: {
          opacity: '1',
          visibility: 'visible',
          transform: 'none',
        },
      });
      const link = document.createElement('a');
      link.download = `al-tajer-slide-${state.currentSlideIndex + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error exporting image:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const nextSlide = () => {
    if (state.currentSlideIndex < state.slides.length - 1) {
      setState(prev => ({ ...prev, currentSlideIndex: prev.currentSlideIndex + 1 }));
    }
  };

  const prevSlide = () => {
    if (state.currentSlideIndex > 0) {
      setState(prev => ({ ...prev, currentSlideIndex: prev.currentSlideIndex - 1 }));
    }
  };

  return (
    <div className="app-container" dir="rtl">
      {/* Sidebar */}
      <Sidebar state={state} setState={setState} />

      {/* Main Preview Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="header">
          <div className="header__brand">
            <div className="header__logo">
               <Sparkles size={20} className="header__logo-icon" strokeWidth={2.5} />
            </div>
            <h1 className="header__title">رادار المصمم</h1>
            <div className="header__divider" />
            <span className="header__subtitle">منصة التاجر الرقمية</span>
          </div>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="header__export-btn"
          >
            {isExporting ? 'جاري التصدير...' : (
              <>
                <Download size={18} strokeWidth={2} />
                تصدير الصورة
              </>
            )}
          </button>
        </header>

        {/* Canvas Container */}
        <div className="canvas-container">
          <div className="canvas-wrapper">
            {/* Only the preview slider here */}
            <div className="canvas-scaler">
              <SlideCanvas
                slide={state.slides[state.currentSlideIndex]}
                theme={state.theme}
                logo={state.logo}
                customCss={state.customCss}
              />
            </div>

            {/* Canvas Navigation Controls */}
            <button
              onClick={prevSlide}
              disabled={state.currentSlideIndex === 0}
              className={`canvas-nav canvas-nav--prev`}
              title="الشريحة السابقة"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              disabled={state.currentSlideIndex === state.slides.length - 1}
              className={`canvas-nav canvas-nav--next`}
              title="الشريحة التالية"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Bottom Slide Pager */}
        <div className="pager">
          {state.slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setState(prev => ({ ...prev, currentSlideIndex: idx }))}
              className={`pager__slide ${state.currentSlideIndex === idx ? 'pager__slide--active' : ''}`}
              style={{ backgroundColor: state.theme.background }}
            >
              <div className="pager__slide-content">
                <span className="pager__slide-title">{slide.title}</span>
                {slide.type === SlideType.CHART ? (
                  <BarChart3 size={14} className="pager__slide-icon" strokeWidth={2} />
                ) : slide.type === SlideType.STEPS ? (
                  <Layout size={14} className="pager__slide-icon" strokeWidth={2} />
                ) : (
                  <ImageIcon size={14} className="pager__slide-icon" strokeWidth={2} />
                )}
              </div>
              <div className="pager__slide-number">{idx + 1}</div>
            </button>
          ))}
          <button
            onClick={() => {
              const newSlide = { id: Math.random().toString(36).substr(2, 9), type: SlideType.INTRO, title: 'عنوان جديد', subtitle: 'وصف فرعي' };
              setState(prev => ({ ...prev, slides: [...prev.slides, newSlide], currentSlideIndex: prev.slides.length }));
            }}
            className="pager__add-btn"
          >
            <Plus size={20} strokeWidth={2.5} />
            <span className="pager__add-btn-label">شريحة جديدة</span>
          </button>
        </div>
      </main>

      {/* Hidden container for export - placed outside main to avoid parent styles */}
      <div 
        ref={canvasRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: '-3000px',
          width: '1080px',
          height: '1080px',
          zIndex: -9999,
          pointerEvents: 'none',
          backgroundColor: '#ffffff',
          overflow: 'hidden'
        }}
      >
        <SlideCanvas
          slide={state.slides[state.currentSlideIndex]}
          theme={state.theme}
          logo={state.logo}
          customCss={state.customCss}
          forExport={true}
        />
      </div>
    </div>
  );
};

export default App;
