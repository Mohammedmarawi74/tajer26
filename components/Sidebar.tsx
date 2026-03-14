import React, { useState } from 'react';
import {
  Layout,
  Palette,
  Code,
  Plus,
  Trash2,
  Type,
  BarChart3,
  Upload,
  Layers,
  Image,
  Sparkles,
  Check
} from 'lucide-react';
import { AppState, SlideType, Slide, PREDEFINED_LOGOS } from '../types';
import { THEMES } from '../constants';

interface Props {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

const Sidebar: React.FC<Props> = ({ state, setState }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'styles' | 'css'>('content');
  const currentSlide = state.slides[state.currentSlideIndex];

  const updateSlide = (updates: Partial<Slide>) => {
    const newSlides = [...state.slides];
    newSlides[state.currentSlideIndex] = { ...currentSlide, ...updates };
    setState(prev => ({ ...prev, slides: newSlides }));
  };

  const addSlide = () => {
    const newSlide: Slide = {
      id: Math.random().toString(36).substr(2, 9),
      type: SlideType.INTRO,
      title: 'عنوان جديد',
      subtitle: 'وصف فرعي هنا'
    };
    setState(prev => ({
      ...prev,
      slides: [...prev.slides, newSlide],
      currentSlideIndex: prev.slides.length
    }));
  };

  const removeSlide = () => {
    if (state.slides.length <= 1) return;
    const newSlides = state.slides.filter((_, i) => i !== state.currentSlideIndex);
    setState(prev => ({
      ...prev,
      slides: newSlides,
      currentSlideIndex: Math.max(0, prev.currentSlideIndex - 1)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateSlide({ image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(prev => ({ ...prev, logo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="sidebar">
      {/* Tabs */}
      <div className="sidebar__tabs">
        <button
          onClick={() => setActiveTab('content')}
          className={`sidebar__tab ${activeTab === 'content' ? 'sidebar__tab--content' : 'sidebar__tab--inactive'}`}
        >
          <Layout size={20} strokeWidth={2} />
          <span className="sidebar__tab-label">المحتوى</span>
        </button>
        <button
          onClick={() => setActiveTab('styles')}
          className={`sidebar__tab ${activeTab === 'styles' ? 'sidebar__tab--styles' : 'sidebar__tab--inactive'}`}
        >
          <Palette size={20} strokeWidth={2} />
          <span className="sidebar__tab-label">التنسيق</span>
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`sidebar__tab ${activeTab === 'css' ? 'sidebar__tab--css' : 'sidebar__tab--inactive'}`}
        >
          <Code size={20} strokeWidth={2} />
          <span className="sidebar__tab-label">CSS</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="sidebar__content">
        {activeTab === 'content' && (
          <>
            <div className="sidebar__section">
              <label className="sidebar__label">
                <Type size={16} style={{ marginLeft: '8px' }} />
                نوع الشريحة
              </label>
              <div className="sidebar__grid">
                {Object.values(SlideType).map(type => (
                  <button
                    key={type}
                    onClick={() => updateSlide({ type })}
                    className={`sidebar__type-btn ${currentSlide.type === type ? 'sidebar__type-btn--active' : 'sidebar__type-btn--inactive'}`}
                  >
                    {type === SlideType.INTRO && <Sparkles size={14} style={{ marginLeft: '6px' }} />}
                    {type === SlideType.CHART && <BarChart3 size={14} style={{ marginLeft: '6px' }} />}
                    {type === SlideType.STEPS && <Layout size={14} style={{ marginLeft: '6px' }} />}
                    {type === SlideType.PRICING && <Layers size={14} style={{ marginLeft: '6px' }} />}
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar__section">
              <div>
                <label className="sidebar__label">العنوان الرئيسي</label>
                <textarea
                  value={currentSlide.title}
                  onChange={(e) => updateSlide({ title: e.target.value })}
                  className="sidebar__textarea"
                  rows={3}
                  placeholder="أدخل العنوان الرئيسي هنا..."
                />
              </div>
              <div>
                <label className="sidebar__label">العنوان الفرعي</label>
                <input
                  type="text"
                  value={currentSlide.subtitle}
                  onChange={(e) => updateSlide({ subtitle: e.target.value })}
                  className="sidebar__input"
                  placeholder="أدخل العنوان الفرعي هنا..."
                />
              </div>

              {currentSlide.type === SlideType.INTRO && (
                <div>
                  <label className="sidebar__label">الوصف</label>
                  <textarea
                    value={currentSlide.description || ''}
                    onChange={(e) => updateSlide({ description: e.target.value })}
                    className="sidebar__textarea"
                    rows={4}
                    placeholder="أدخل وصف الشريحة هنا..."
                  />
                </div>
              )}

              {currentSlide.type === SlideType.INTRO && (
                <div>
                  <label className="sidebar__label">نص الزر</label>
                  <input
                    type="text"
                    value={currentSlide.buttonText || ''}
                    onChange={(e) => updateSlide({ buttonText: e.target.value })}
                    className="sidebar__input"
                    placeholder="مثال: ابدأ الآن"
                  />
                </div>
              )}

              <div>
                <label className="sidebar__label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Upload size={16} />
                  صورة الخلفية
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="sidebar__file-input"
                />
              </div>
            </div>

            <div className="sidebar__actions">
              <button
                onClick={addSlide}
                className="sidebar__add-btn"
              >
                <Plus size={18} strokeWidth={2.5} />
                إضافة شريحة
              </button>
              <button
                onClick={removeSlide}
                className="sidebar__remove-btn"
                title="حذف الشريحة"
              >
                <Trash2 size={18} strokeWidth={2} />
              </button>
            </div>
          </>
        )}

        {activeTab === 'styles' && (
          <div className="sidebar__section">
            <div className="sidebar__section">
              <label className="sidebar__label">
                <Palette size={16} style={{ marginLeft: '8px' }} />
                سمات التصميم
              </label>
              <div className="sidebar__theme-grid">
                {THEMES.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => setState(prev => ({ ...prev, theme }))}
                    className={`sidebar__theme-btn ${state.theme.id === theme.id ? 'sidebar__theme-btn--active' : ''}`}
                    style={{ 
                      background: theme.background,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span 
                      className="sidebar__theme-name" 
                      style={{ 
                        color: theme.textColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {state.theme.id === theme.id && <Check size={16} color="#2563EB" />}
                      {theme.name}
                    </span>
                    <div className="sidebar__theme-colors">
                      <div 
                        className="sidebar__theme-color" 
                        style={{ backgroundColor: theme.primary }}
                        title="اللون الأساسي"
                      />
                      <div 
                        className="sidebar__theme-color" 
                        style={{ backgroundColor: theme.accent }}
                        title="لون التمييز"
                      />
                      <div 
                        className="sidebar__theme-color" 
                        style={{ backgroundColor: theme.secondary }}
                        title="اللون الثانوي"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar__logo-section">
              <label className="sidebar__logo-label">
                <Layers size={16} />
                شعار المنصة (Logo)
              </label>

              {/* Predefined Logos */}
              <div className="sidebar__logo-grid">
                {PREDEFINED_LOGOS.map(logo => (
                  <button
                    key={logo.id}
                    onClick={() => setState(prev => ({ ...prev, logo: logo.src }))}
                    className={`sidebar__logo-option ${state.logo === logo.src ? 'sidebar__logo-option--selected' : ''}`}
                  >
                    <img src={logo.src} alt={logo.name} className="sidebar__logo-option-img" />
                    <span className="sidebar__logo-option-name">{logo.name}</span>
                    {state.logo === logo.src && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: '4px',
                          right: '4px',
                          background: '#2563EB',
                          borderRadius: '50%',
                          padding: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Check size={10} color="#FFFFFF" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="sidebar__logo-divider">
                <span>أو</span>
              </div>

              {/* Custom Upload */}
              <label className="sidebar__label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Upload size={16} />
                رفع شعار مخصص
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="sidebar__file-input"
              />

              {/* Remove Logo Button */}
              {state.logo && (
                <button
                  onClick={() => setState(prev => ({ ...prev, logo: undefined }))}
                  className="sidebar__logo-remove-btn"
                  style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                >
                  <Trash2 size={16} />
                  إزالة الشعار تماماً
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'css' && (
          <div className="sidebar__css-section">
            <label className="sidebar__css-label">
              <Code size={16} />
              تخصيص CSS
            </label>
            <p className="sidebar__css-hint">أضف أنماطك الخاصة هنا للتحكم الكامل في التصميم.</p>
            <textarea
              value={state.customCss}
              onChange={(e) => setState(prev => ({ ...prev, customCss: e.target.value }))}
              placeholder="/* مثال: .title { color: gold; } */"
              className="sidebar__css-textarea"
              dir="ltr"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
