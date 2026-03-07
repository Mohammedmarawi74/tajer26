# رادار المستثمر | Radar Al-Mustathmir

صانع كاروسيل احترافي لإنشاء شرائح تشبه الإنفوجرافيك بتصاميم جذابة.

## 🚀 الرفع على Vercel

### الطريقة 1: من خلال واجهة Vercel (الأسهل)

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول بحسابك (GitHub/GitLab/Bitbucket)
3. انقر على **"Add New Project"**
4. اختر **"Import Git Repository"**
5. اختر المستودع من القائمة
6. انقر على **"Deploy"**

### الطريقة 2: من خلال Vercel CLI

```bash
# تثبيت Vercel CLI عالمياً
npm install -g vercel

# الانتقال إلى مجلد المشروع
cd c:\Users\ASUS\Desktop\ssoo\52

# تسجيل الدخول إلى Vercel
vercel login

# رفع المشروع
vercel

# اتباع التعليمات على الشاشة
```

### الطريقة 3: ربط مع GitHub

1. ارفع المشروع على GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. اذهب إلى [vercel.com/new](https://vercel.com/new)
3. اختر **"Import Git Repository"**
4. اختر مستودع GitHub
5. انقر على **"Deploy"**

## 📝 ملاحظات مهمة

- **لا حاجة لإعدادات بناء مخصصة** - الملف `vercel.json` يحتوي على كل الإعدادات
- **البناء التلقائي** - Vercel سيقوم بالبناء تلقائياً عند كل push
- **النطاق المجاني** - احصل على نطاق مجاني `yourproject.vercel.app`

## 🛠️ التطوير المحلي

```bash
# تثبيت المكتبات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة النسخة الإنتاجية محلياً
npm run preview
```

## 📁 هيكل المشروع

```
52/
├── index.html          # نقطة الدخول
├── index.css           # ملفات CSS
├── index.tsx           # ملف TypeScript الرئيسي
├── App.tsx             # مكون التطبيق الرئيسي
├── components/         # مكونات React
│   ├── Sidebar.tsx
│   ├── SlideCanvas.tsx
│   └── ChartComponent.tsx
├── vercel.json         # إعدادات Vercel
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 المميزات

- ✅ تصميم متجاوب
- ✅ دعم اللغة العربية (RTL)
- ✅ تصدير الشرائح كصور PNG
- ✅ مخططات بيانية تفاعلية
- ✅ تخصيص كامل عبر CSS
- ✅ جاهز للنشر على Vercel

## 📄 الترخيص

MIT License
