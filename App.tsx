import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { AppState, SlideType, AspectRatioType, FrameType } from './types';
import { INITIAL_SLIDES, THEMES, SOCIAL_MEDIA_SIZES } from './constants';
import Sidebar from './components/Sidebar';
import SlideCanvas from './components/SlideCanvas';
import { Download, ChevronRight, ChevronLeft, Image as ImageIcon, Sparkles, BarChart3, Plus, Layout } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    slides: INITIAL_SLIDES,
    currentSlideIndex: 0,
    theme: THEMES[0],
    customCss: '',
    aspectRatio: AspectRatioType.SQUARE,
    frameType: FrameType.NONE,
  });

  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);

    try {
      // 1. Ensure all fonts are loaded
      await document.fonts.ready;

      // 2. Wait for all images to load
      const images = Array.from(document.querySelectorAll('img'));
      await Promise.all([
        ...images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', reject, { once: true });
          });
        }),
        new Promise(resolve => setTimeout(resolve, 1000))
      ]);

      // 3. Force reflow on the export container
      const exportContainer = canvasRef.current;
      exportContainer.style.display = 'block';
      exportContainer.style.visibility = 'visible';
      
      // Force reflow
      void exportContainer.offsetHeight;

      // 4. Additional delay for SVG charts and background patterns
      await new Promise(resolve => setTimeout(resolve, 1500));

      const filter = (node: HTMLElement) => {
        const exclusionClasses = ['canvas-nav', 'pager__add-btn', 'canvas-nav--prev', 'canvas-nav--next'];
        return !exclusionClasses.some(cls => node.classList && node.classList.contains(cls));
      };

      const dimensions = SOCIAL_MEDIA_SIZES[state.aspectRatio];

      // 5. Export options optimized for html-to-image
      const options = {
        quality: 1.0,
        pixelRatio: 2, // 2 is usually enough and more stable than 3
        width: dimensions.width,
        height: dimensions.height,
        backgroundColor: state.theme.background.includes('gradient') ? '#ffffff' : state.theme.background,
        cacheBust: true,
        filter: filter,
        skipFonts: false,
      };

      // 6. Debug logging
      console.log('Export starting with:', {
        dimensions,
        aspectRatio: state.aspectRatio
      });

      // 7. Capture as PNG
      const dataUrl = await htmlToImage.toPng(exportContainer, options);
      
      if (!dataUrl || dataUrl === 'data:,') {
        throw new Error('Failed to create image - empty data URL');
      }

      // 8. Download the image
      const link = document.createElement('a');
      link.download = `al-tajer-${state.aspectRatio.toLowerCase()}-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 9. Cleanup
      exportContainer.style.display = 'none';

    } catch (err) {
      console.error('Error exporting image:', err);
      alert('فشل تصدير الصورة. جرب مرة أخرى أو تأكد من استقرار المتصفح.');
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
                aspectRatio={state.aspectRatio}
                frameType={state.frameType}
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
          top: '0',
          left: '0',
          width: `${SOCIAL_MEDIA_SIZES[state.aspectRatio].width}px`,
          height: `${SOCIAL_MEDIA_SIZES[state.aspectRatio].height}px`,
          zIndex: -100,
          pointerEvents: 'none',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          display: 'none', // Will be toggled to 'block' during export
        }}
        aria-hidden="true"
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
