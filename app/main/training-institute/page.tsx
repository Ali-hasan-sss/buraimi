"use client";

import { useMemo, useState } from 'react';
import {
    GraduationCap,
    Award,
    Target,
    Users,
    Sparkles,
    TrendingUp,
    BookOpen,
    Search,
    Filter,
    Calendar,
    Clock,
    CheckCircle,
    ChevronLeft,
    Mail,
    Phone,
    Globe,
    Briefcase,
    Scale,
    Heart,
    DollarSign,
    Lightbulb,
    Star
} from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface Course {
    id: number;
    fieldId: string;
    title: string;
    duration: string;
}

export default function TrainingInstitutePage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const dir = isAr ? 'rtl' : 'ltr';
    const localeKey = isAr ? 'ar' : 'en';

    const [selectedFieldId, setSelectedFieldId] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const t = useMemo(
        () =>
            isAr
                ? {
                    heroTitleAr: 'معهد التدريب',
                    heroTitleEn: 'Training Institute',
                    heroSubtitle: 'التميز في تقديم خدمات تدريبية عالية الجودة',
                    aboutTitle: 'عن معهد التدريب',
                    aboutP1: 'يقدم مركز التدريب بكلية البريمي الجامعية مجموعة متنوعة من الدورات التدريبية للمجتمع المحلي والطلاب والموظفين في مجالات القانون واللغة الإنجليزية وإدارة الأعمال والمحاسبة.',
                    aboutP2: 'يسعى معهد التدريب في كلية البريمي الجامعية إلى التميز وذلك من خلال تقديم خدمات تدريبية حققت الكفاءة والكفاية في الأداء والإنتاج وشكلت جسراً للتواصل بين الكلية ومختلف شرائح المجتمع مما شكل دوراً أساسياً في النمو الثقافي والمهني.',
                    goalsTitle: 'أهدافنا',
                    goalsSubtitle: 'نسعى لتحقيق التميز في التدريب والتطوير',
                    ieltsTitle: 'امتحان IELTS',
                    ieltsSubtitle: 'تقدم كلية البريمي الجامعية بالتعاون مع المجلس الثقافي البريطاني اختبارات الايلتس للمستوى الأكاديمي والعام',
                    whyIelts: 'لماذا تختار IELTS',
                    whyIeltsBody: 'يتم قبول اختبار ايلتس من قبل أكثر من 10,000 منظمة في أكثر من 140 دولة. وتشمل هذه المنظمات الحكومات والمؤسسات الأكاديمية وأصحاب العمل.',
                    regInfo: 'معلومات التسجيل',
                    fees: 'الرسوم:',
                    result: 'النتيجة:',
                    phone: 'الهاتف:',
                    email: 'البريد:',
                    feesValue: '96 ريال عماني (امتحان ورقي)',
                    resultValue: 'بعد 14 يوم من إجراء الاختبار',
                    ieltsCalendarEn: 'IELTS Calendar 2025',
                    ieltsCalendarAr: 'جدول امتحانات الآيلتس لعام 2025',
                    thMonth: 'الشهر',
                    thDate: 'تاريخ الاختبار',
                    thType: 'النوع',
                    coursesTitle: 'الدورات المقدمة',
                    coursesSubtitle: 'اختر من بين أكثر من 150 دورة تدريبية متخصصة',
                    searchPlaceholder: 'ابحث عن دورة...',
                    resultsLabel: 'عدد النتائج:',
                    noResultsTitle: 'لا توجد نتائج',
                    noResultsBody: 'جرب البحث بكلمات مختلفة أو اختر مجال آخر',
                    contactTitle: 'للاستفسار والتسجيل',
                    contactSubtitle: 'تواصل معنا للحصول على المزيد من المعلومات',
                    phoneCardTitle: 'الهاتف',
                    emailCardTitle: 'البريد الإلكتروني',
                    ctaTitle: 'ابدأ رحلتك التدريبية اليوم',
                    ctaSubtitle: 'استثمر في مستقبلك المهني مع أكثر من 150 دورة تدريبية متخصصة',
                    ctaRegister: 'سجل الآن',
                    ctaCall: 'اتصل بنا',
                    ctaBackHome: 'العودة للرئيسية',
                }
                : {
                    heroTitleAr: 'Training Institute',
                    heroTitleEn: 'Training Institute',
                    heroSubtitle: 'Excellence in providing high-quality training services.',
                    aboutTitle: 'About the Training Institute',
                    aboutP1: 'The Training Center at Al Buraimi University College offers a variety of training courses for the local community, students, and staff in the fields of law, English language, business administration, and accounting.',
                    aboutP2: 'The Training Institute at Al Buraimi University College strives for excellence by offering training services that enhance performance and productivity, building a bridge between the college and the community, contributing to cultural and professional growth.',
                    goalsTitle: 'Our Goals',
                    goalsSubtitle: 'We strive to achieve excellence in training and development.',
                    ieltsTitle: 'IELTS Exam',
                    ieltsSubtitle: 'In cooperation with the British Council, Al Buraimi University College offers IELTS tests for Academic and General Training modules.',
                    whyIelts: 'Why choose IELTS',
                    whyIeltsBody: 'IELTS is accepted by more than 10,000 organizations across 140+ countries, including governments, academic institutions, and employers.',
                    regInfo: 'Registration Info',
                    fees: 'Fees:',
                    result: 'Result:',
                    phone: 'Phone:',
                    email: 'Email:',
                    feesValue: 'OMR 96 (paper-based exam)',
                    resultValue: '14 days after the test date',
                    ieltsCalendarEn: 'IELTS Calendar 2025',
                    ieltsCalendarAr: 'IELTS Calendar 2025',
                    thMonth: 'Month',
                    thDate: 'Test Date',
                    thType: 'Module',
                    coursesTitle: 'Offered Courses',
                    coursesSubtitle: 'Choose from 150+ specialized training courses.',
                    searchPlaceholder: 'Search for a course...',
                    resultsLabel: 'Results:',
                    noResultsTitle: 'No results found',
                    noResultsBody: 'Try different keywords or choose another field.',
                    contactTitle: 'Enquiries & Registration',
                    contactSubtitle: 'Contact us for more information.',
                    phoneCardTitle: 'Phone',
                    emailCardTitle: 'Email',
                    ctaTitle: 'Start Your Training Journey Today',
                    ctaSubtitle: 'Invest in your professional future with 150+ specialized courses.',
                    ctaRegister: 'Register Now',
                    ctaCall: 'Call Us',
                    ctaBackHome: 'Back to Home',
                },
        [isAr]
    );

    // جميع الدورات
    const coursesByLocale = useMemo<Record<'ar' | 'en', Course[]>>(
        () => ({
            ar: [
                // ريادة الأعمال
                { id: 1, fieldId: 'entrepreneurship', title: 'التسويق الشخصي لرائد الأعمال', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 2, fieldId: 'entrepreneurship', title: 'قوانين العمل والعقود لرواد الأعمال', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 3, fieldId: 'entrepreneurship', title: 'الطريق إلى ريادة الأعمال', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 4, fieldId: 'entrepreneurship', title: 'أسرار القيادة الفعالة لرواد الأعمال', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 5, fieldId: 'entrepreneurship', title: 'فكر بإبداع', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 6, fieldId: 'entrepreneurship', title: 'مشروعي خطوة بخطوة', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 7, fieldId: 'entrepreneurship', title: 'مشروعك في منزلك', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 8, fieldId: 'entrepreneurship', title: 'علامتك التجارية في الأسواق التنافسية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // اللغة الإنجليزية
                { id: 9, fieldId: 'english', title: 'اللغة الإنجليزية (مستوى مبتدئ)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 10, fieldId: 'english', title: 'اللغة الإنجليزية (مستوى متوسط)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 11, fieldId: 'english', title: 'اللغة الإنجليزية (مستوى متقدم)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 12, fieldId: 'english', title: 'اللغة الإنجليزية (محادثة)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 13, fieldId: 'english', title: 'اللغة الإنجليزية (للأعمال)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 14, fieldId: 'english', title: 'اللغة الإنجليزية (للقانون)', duration: 'إجمالي 32 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },

                // خدمة العملاء
                { id: 15, fieldId: 'customer_service', title: 'الأداء الإبداعي في استراتيجية التعامل وخدمة العملاء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 16, fieldId: 'customer_service', title: 'خدمة العملاء وكيفية التعامل مع الشخصيات المهمة', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 17, fieldId: 'customer_service', title: 'ضمان الجودة في خدمة العملاء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 18, fieldId: 'customer_service', title: 'آليات الإبداع ومنهجيات التميز في إدارة علاقات العملاء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 19, fieldId: 'customer_service', title: 'أفضل الممارسات لمفهوم السبع نجوم في خدمة العملاء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // التسويق
                { id: 20, fieldId: 'marketing', title: 'التسويق الإستراتيجي', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 21, fieldId: 'marketing', title: 'الإدارة الفعالة للتسويق', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 22, fieldId: 'marketing', title: 'أساليب إعداد الخطط التسويقية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 23, fieldId: 'marketing', title: 'الاتصال التسويقي والتخطيط الإعلامي', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 24, fieldId: 'marketing', title: 'التسويق الرقمي', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 25, fieldId: 'marketing', title: 'المنظومة المتكاملة لإدارة التسويق والمبيعات', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 26, fieldId: 'marketing', title: 'مهارات التسويق والمبيعات الأساسية لمحترفي إدارة الأعمال', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 27, fieldId: 'marketing', title: 'Modern trends in sales', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 28, fieldId: 'marketing', title: 'المبيعات واستراتيجيات التسويق', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 29, fieldId: 'marketing', title: 'مهارات البيع الفعالة (الأدوات والتقنيات)', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // اللوجستيات
                { id: 30, fieldId: 'logistics', title: 'الخدمات اللوجستية المتكاملة', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 31, fieldId: 'logistics', title: 'التكنولوجيا في الخدمات اللوجستية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 32, fieldId: 'logistics', title: 'البرنامج المتكامل في إدارة الخدمات اللوجستية وسلاسل الإمداد', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 33, fieldId: 'logistics', title: 'إدارة الخدمات اللوجستية في المؤسسات والشركات', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 34, fieldId: 'logistics', title: 'الاستدامة واللوجستيات الخضراء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // القانون
                { id: 101, fieldId: 'law', title: 'تكتيكات وتقنيات التفاوض القانوني والتسويات القانونية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 102, fieldId: 'law', title: 'التحول الرقمي في عمليات الادارة القانونية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 103, fieldId: 'law', title: 'صياغة المذكرات والتقارير والمراسلات القانونية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 104, fieldId: 'law', title: 'استراتيجيات التحكم في المخاطر القانونية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 105, fieldId: 'law', title: 'مهارات قراءة وتحليل وتفسير القضايا القانونية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // الموارد البشرية
                { id: 119, fieldId: 'hr', title: 'التميز والكفاءة في إجراء المقابلات والاختيار والتعيين', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 120, fieldId: 'hr', title: 'ادارة وتقييم مخاطر الموارد البشرية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 121, fieldId: 'hr', title: 'الادارة الاحترافية للموارد البشرية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 122, fieldId: 'hr', title: 'استراتيجيات إدارة المواهب وتخطيط التعاقب الوظيفي', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // التخطيط الاستراتيجي والتطوير الذاتي
                { id: 125, fieldId: 'strategic_planning', title: 'التفكير الإيجابي والتحفيز وإطلاق الطاقات الإبداعية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 126, fieldId: 'strategic_planning', title: 'سيكولوجية الابداع القيادي والتأثير في الآخرين', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 127, fieldId: 'strategic_planning', title: 'اللياقة الذهنية والابداع في التفكير والأداء', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 128, fieldId: 'strategic_planning', title: 'الكاريزما والقيادة المؤثرة والتميز الاداري', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // المالية والمحاسبة
                { id: 135, fieldId: 'finance_accounting', title: 'الرقابة الفعالة على المدفوعات والمقبوضات المالية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 136, fieldId: 'finance_accounting', title: 'ترشيد النفقات وكيفية التعامل مع الازمات المالية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 137, fieldId: 'finance_accounting', title: 'إعداد وتحليل وتقييم دراسات الجدوى', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 138, fieldId: 'finance_accounting', title: 'إدارة المخاطر المالية والإدارية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // الجودة
                { id: 146, fieldId: 'quality', title: 'الجودة والتميز المؤسسي', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 147, fieldId: 'quality', title: 'جودة التفكير والكفاءة والفعالية في العمل', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 151, fieldId: 'quality', title: 'إدارة الجودة الاستراتيجية', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },
                { id: 152, fieldId: 'quality', title: 'أساليب وأدوات تحسين الجودة', duration: 'إجمالي 15 ساعة 5 ايام في الاسبوع بواقع 3 ساعات في اليوم' },

                // الدورات الاحترافية
                { id: 155, fieldId: 'professional_courses', title: 'IELTS', duration: 'إجمالي 30 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
                { id: 156, fieldId: 'professional_courses', title: 'IC3', duration: 'إجمالي 30 ساعة 4 ايام في الاسبوع بواقع 2 ساعة في اليوم' },
            ],
            en: [
                { id: 1, fieldId: 'entrepreneurship', title: 'Personal Branding for Entrepreneurs', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 2, fieldId: 'entrepreneurship', title: 'Labor Laws and Contracts for Entrepreneurs', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 3, fieldId: 'entrepreneurship', title: 'The Road to Entrepreneurship', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 4, fieldId: 'entrepreneurship', title: 'Secrets of Effective Leadership for Entrepreneurs', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 5, fieldId: 'entrepreneurship', title: 'Think Creatively', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 6, fieldId: 'entrepreneurship', title: 'My Project Step by Step', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 7, fieldId: 'entrepreneurship', title: 'Your Home-Based Business', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 8, fieldId: 'entrepreneurship', title: 'Your Brand in Competitive Markets', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 9, fieldId: 'english', title: 'English Language (Beginner)', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 10, fieldId: 'english', title: 'English Language (Intermediate)', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 11, fieldId: 'english', title: 'English Language (Advanced)', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 12, fieldId: 'english', title: 'English Conversation', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 13, fieldId: 'english', title: 'Business English', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 14, fieldId: 'english', title: 'Legal English', duration: 'Total 32 hours | 4 days/week | 2 hours/day' },
                { id: 15, fieldId: 'customer_service', title: 'Creative Performance in Customer Service Strategy', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 16, fieldId: 'customer_service', title: 'Customer Service & VIP Handling', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 17, fieldId: 'customer_service', title: 'Quality Assurance in Customer Service', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 18, fieldId: 'customer_service', title: 'Creativity & Excellence Methodologies in CRM', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 19, fieldId: 'customer_service', title: 'Best Practices for the “Seven-Star” Customer Service Concept', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 20, fieldId: 'marketing', title: 'Strategic Marketing', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 21, fieldId: 'marketing', title: 'Effective Marketing Management', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 22, fieldId: 'marketing', title: 'Marketing Plan Preparation Techniques', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 23, fieldId: 'marketing', title: 'Marketing Communication & Media Planning', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 24, fieldId: 'marketing', title: 'Digital Marketing', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 25, fieldId: 'marketing', title: 'Integrated Marketing & Sales Management System', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 26, fieldId: 'marketing', title: 'Core Marketing & Sales Skills for Business Professionals', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 27, fieldId: 'marketing', title: 'Modern Trends in Sales', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 28, fieldId: 'marketing', title: 'Sales & Marketing Strategies', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 29, fieldId: 'marketing', title: 'Effective Selling Skills (Tools & Techniques)', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 30, fieldId: 'logistics', title: 'Integrated Logistics Services', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 31, fieldId: 'logistics', title: 'Technology in Logistics Services', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 32, fieldId: 'logistics', title: 'Comprehensive Program in Logistics & Supply Chain Management', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 33, fieldId: 'logistics', title: 'Logistics Management in Organizations and Companies', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 34, fieldId: 'logistics', title: 'Sustainability and Green Logistics', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 101, fieldId: 'law', title: 'Legal Negotiation Tactics and Settlement Techniques', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 102, fieldId: 'law', title: 'Digital Transformation in Legal Administration Operations', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 103, fieldId: 'law', title: 'Drafting Legal Memos, Reports, and Correspondence', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 104, fieldId: 'law', title: 'Legal Risk Control Strategies', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 105, fieldId: 'law', title: 'Reading, Analyzing, and Interpreting Legal Cases', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 119, fieldId: 'hr', title: 'Excellence and Efficiency in Interviewing, Selection & Hiring', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 120, fieldId: 'hr', title: 'Managing and Assessing Human Resource Risks', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 121, fieldId: 'hr', title: 'Professional Human Resource Management', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 122, fieldId: 'hr', title: 'Talent Management & Succession Planning Strategies', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 125, fieldId: 'strategic_planning', title: 'Positive Thinking, Motivation & Unleashing Creative Energy', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 126, fieldId: 'strategic_planning', title: 'Psychology of Creative Leadership and Influencing Others', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 127, fieldId: 'strategic_planning', title: 'Mental Fitness and Creative Thinking & Performance', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 128, fieldId: 'strategic_planning', title: 'Charisma, Influential Leadership & Administrative Excellence', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 135, fieldId: 'finance_accounting', title: 'Effective Control of Financial Payments and Receipts', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 136, fieldId: 'finance_accounting', title: 'Cost Rationalization and Dealing with Financial Crises', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 137, fieldId: 'finance_accounting', title: 'Preparing, Analyzing & Evaluating Feasibility Studies', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 138, fieldId: 'finance_accounting', title: 'Managing Financial and Administrative Risks', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 146, fieldId: 'quality', title: 'Quality and Institutional Excellence', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 147, fieldId: 'quality', title: 'Quality of Thinking, Efficiency and Effectiveness at Work', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 151, fieldId: 'quality', title: 'Strategic Quality Management', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 152, fieldId: 'quality', title: 'Methods and Tools for Quality Improvement', duration: 'Total 15 hours | 5 days/week | 3 hours/day' },
                { id: 155, fieldId: 'professional_courses', title: 'IELTS', duration: 'Total 30 hours | 4 days/week | 2 hours/day' },
                { id: 156, fieldId: 'professional_courses', title: 'IC3', duration: 'Total 30 hours | 4 days/week | 2 hours/day' },
            ],
        }),
        []
    );

    const allCourses = coursesByLocale[localeKey];

    // الحقول المتاحة
    const fields = useMemo(
        () =>
            [
                { id: 'all', name: isAr ? 'الكل' : 'All', icon: BookOpen },
                { id: 'entrepreneurship', name: isAr ? 'ريادة الأعمال' : 'Entrepreneurship', icon: Lightbulb },
                { id: 'english', name: isAr ? 'اللغة الإنجليزية' : 'English Language', icon: Globe },
                { id: 'law', name: isAr ? 'القانون' : 'Law', icon: Scale },
                { id: 'hr', name: isAr ? 'الموارد البشرية' : 'Human Resources', icon: Users },
                { id: 'strategic_planning', name: isAr ? 'التخطيط الاستراتيجي' : 'Strategic Planning', icon: Target },
                { id: 'finance_accounting', name: isAr ? 'المالية والمحاسبة' : 'Finance & Accounting', icon: DollarSign },
                { id: 'quality', name: isAr ? 'الجودة' : 'Quality', icon: Award },
                { id: 'customer_service', name: isAr ? 'خدمة العملاء' : 'Customer Service', icon: Heart },
                { id: 'marketing', name: isAr ? 'التسويق' : 'Marketing', icon: TrendingUp },
                { id: 'logistics', name: isAr ? 'اللوجستيات' : 'Logistics', icon: Briefcase },
                { id: 'professional_courses', name: isAr ? 'الدورات الاحترافية' : 'Professional Courses', icon: Star },
            ] as const,
        [isAr]
    );

    const fieldNameById = useMemo(() => {
        const map = new Map<string, string>();
        for (const f of fields) map.set(f.id, f.name);
        return map;
    }, [fields]);

    // تصفية الدورات
    const filteredCourses = allCourses.filter((course) => {
        const fieldName = fieldNameById.get(course.fieldId) ?? '';
        const matchesField = selectedFieldId === 'all' || course.fieldId === selectedFieldId;
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch = q.length === 0 || course.title.toLowerCase().includes(q) || fieldName.toLowerCase().includes(q);
        return matchesField && matchesSearch;
    });

    const goals = useMemo(
        () =>
            isAr
                ? [
                    'يهدف معهد التدريب للوصول إلى بيئة تدريبة متميزة',
                    'تقديم خدمات تدريبية ممتازة لجميع شرائح المجتمع',
                    'إجراء التدريب المناسب وتعزيز مهارات الموظف',
                    'زيادة تطوير البرامج التدريبية واستحداث دورات ذات جودة عالمية',
                    'تعزيز قدرات المتدربين وتحسين جودة المخرجات التدريبية',
                    'رفع كفاءات الإبداع لدى أعضاء هيئة التدريب',
                    'توسعة وتنويع برامجه التدريبية وعقد شراكات محلية وإقليمية',
                ]
                : [
                    'Create an outstanding training environment.',
                    'Provide excellent training services for all segments of society.',
                    'Deliver appropriate training and enhance employee skills.',
                    'Develop and introduce high-quality training programs and courses.',
                    'Strengthen trainees’ capabilities and improve training outcomes.',
                    'Raise creativity and performance of training staff.',
                    'Expand and diversify programs and build local & regional partnerships.',
                ],
        [isAr]
    );

    const ieltsCalendar = useMemo(
        () =>
            (
                isAr
                    ? [
                        { month: 'يناير', date: 'Saturday, 25.01.2025', module: '-' },
                        { month: 'فبراير', date: 'Saturday, 22.02.2025', module: 'General Training' },
                        { month: 'مارس', date: 'Saturday, 22.03.2025', module: 'General Training' },
                        { month: 'أبريل', date: 'Saturday, 26.04.2025', module: 'General Training' },
                        { month: 'مايو', date: 'Saturday, 24.05.2025', module: 'General Training' },
                        { month: 'يونيو', date: 'Saturday, 28.06.2025', module: '-' },
                        { month: 'يوليو', date: 'Saturday, 26.07.2025', module: 'General Training' },
                        { month: 'أغسطس', date: 'Saturday, 23.08.2025', module: 'General Training' },
                        { month: 'سبتمبر', date: 'Saturday, 27.09.2025', module: 'General Training' },
                        { month: 'أكتوبر', date: 'Saturday, 27.10.2025', module: '-' },
                        { month: 'نوفمبر', date: 'Saturday, 22.11.2025', module: 'General Training' },
                        { month: 'ديسمبر', date: 'Saturday, 27.12.2025', module: 'General Training' },
                    ]
                    : [
                        { month: 'January', date: 'Saturday, 25.01.2025', module: '-' },
                        { month: 'February', date: 'Saturday, 22.02.2025', module: 'General Training' },
                        { month: 'March', date: 'Saturday, 22.03.2025', module: 'General Training' },
                        { month: 'April', date: 'Saturday, 26.04.2025', module: 'General Training' },
                        { month: 'May', date: 'Saturday, 24.05.2025', module: 'General Training' },
                        { month: 'June', date: 'Saturday, 28.06.2025', module: '-' },
                        { month: 'July', date: 'Saturday, 26.07.2025', module: 'General Training' },
                        { month: 'August', date: 'Saturday, 23.08.2025', module: 'General Training' },
                        { month: 'September', date: 'Saturday, 27.09.2025', module: 'General Training' },
                        { month: 'October', date: 'Saturday, 27.10.2025', module: '-' },
                        { month: 'November', date: 'Saturday, 22.11.2025', module: 'General Training' },
                        { month: 'December', date: 'Saturday, 27.12.2025', module: 'General Training' },
                    ]
            ) as { month: string; date: string; module: string }[],
        [isAr]
    );

    return (
        <div className="min-h-screen bg-gray-50" dir={dir}>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#254151] via-[#6096b4] to-[#254151] text-white py-12 sm:py-16 lg:py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-6 rounded-full">
                                <GraduationCap className=" size-8 lg:size-16 xl:size-20" />
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">{t.heroTitleAr}</h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 opacity-90">{t.heroTitleEn}</h2>
                        <p className="text-base sm:text-xl lg:text-2xl opacity-95 leading-relaxed">
                            {t.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 sm:py-14 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-2xl p-10 border-2 border-blue-200">
                        <div className="flex items-start gap-6">
                            <div className="bg-[#254151] text-white size-20 rounded-full hidden sm:flex items-center justify-center flex-shrink-0">
                                <Award className="size-8 sm:size-9 lg:size-10" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#254151] mb-4">{t.aboutTitle}</h2>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                                    {t.aboutP1}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                                    {t.aboutP2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <Target className="size-10 sm:size-14 lg:size-16 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#254151] mb-4">{t.goalsTitle}</h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.goalsSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {goals.map((goal, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white size-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1 text-sm sm:text-base lg:text-lg">{goal}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IELTS Section */}
            <section className="py-12 sm:py-14 lg:py-16 bg-white">
                <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-2xl p-4 sm:p-6 lg:p-10 border-2 border-green-200">
                        <div className="text-center mb-8">
                            <Globe className="size-12 sm:size-16 lg:size-20 text-green-600 mx-auto mb-4" />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#254151] mb-4">{t.ieltsTitle}</h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
                                {t.ieltsSubtitle}
                            </p>
                        </div>

                        {/* IELTS Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-200">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#254151] mb-4 flex items-center gap-2">
                                    <CheckCircle className="size-5 sm:size-6 text-green-600" />
                                    <span>{t.whyIelts}</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t.whyIeltsBody}
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#254151] mb-4 flex items-center gap-2">
                                    <DollarSign className="size-5 sm:size-6 text-blue-600" />
                                    <span>{t.regInfo}</span>
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-gray-700"><strong>{t.fees}</strong> {t.feesValue}</p>
                                    <p className="text-gray-700"><strong>{t.result}</strong> {t.resultValue}</p>
                                    <p className="text-gray-700"><strong>{t.phone}</strong> +968 99229171, +968 25657666 Ext: 763</p>
                                    <p className="text-gray-700 break-all"><strong>{t.email}</strong> tucoordinator@buc.edu.om</p>
                                </div>
                            </div>
                        </div>

                        {/* IELTS Calendar */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-200">
                            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 text-center">
                                <Calendar className="size-9 sm:size-11 lg:size-12 mx-auto mb-2" />
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{t.ieltsCalendarEn}</h3>
                                <p className="text-sm sm:text-base lg:text-lg opacity-90 mt-2">{t.ieltsCalendarAr}</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base lg:text-lg font-bold text-[#254151]">{t.thMonth}</th>
                                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base lg:text-lg font-bold text-[#254151]">{t.thDate}</th>
                                            <th className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base lg:text-lg font-bold text-[#254151]">{t.thType}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ieltsCalendar.map((item, idx) => (
                                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 font-semibold text-sm sm:text-base">{item.month}</td>
                                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">{item.date}</td>
                                                <td className="px-4 sm:px-6 py-3 sm:py-4">
                                                    <span className={`inline-block px-3 py-1 rounded ${item.module === '-' ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-700'} font-semibold text-xs sm:text-sm`}>
                                                        {item.module}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <BookOpen className="size-10 sm:size-14 lg:size-16 text-purple-600 mx-auto mb-4" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#254151] mb-4">{t.coursesTitle}</h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.coursesSubtitle}</p>
                    </div>

                    {/* Search and Filter */}
                    <div className="bg-white rounded-lg shadow-xl p-6 mb-8 border-2 border-purple-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {/* Search Box */}
                            <div className="relative">
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 sm:size-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder={t.searchPlaceholder}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pr-10 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-sm sm:text-base"
                                />
                            </div>

                            {/* Results Count */}
                            <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg px-6 py-3 border-2 border-purple-200">
                                <div className="flex items-center gap-2">
                                    <Filter className="size-4 sm:size-5 text-purple-600" />
                                    <span className="font-bold text-[#254151] text-sm sm:text-base">{t.resultsLabel}</span>
                                </div>
                                <span className="text-xl sm:text-2xl font-bold text-purple-600">{filteredCourses.length}</span>
                            </div>
                        </div>

                        {/* Field Filters */}
                        <div className="grid  sm:flex flex-wrap gap-3">
                            {fields.map((field, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedFieldId(field.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${selectedFieldId === field.id
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-purple-600'
                                        }`}
                                >
                                    <field.icon className="size-4 sm:size-5" />
                                    <span className="text-sm sm:text-base">{field.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all">
                                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="size-4 sm:size-5" />
                                        <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 py-1 rounded">{fieldNameById.get(course.fieldId)}</span>
                                    </div>
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-snug">{course.title}</h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start gap-3 text-gray-700">
                                        <Clock className="size-4 sm:size-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-xs sm:text-sm leading-relaxed">{course.duration}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-16">
                            <Search className="size-12 sm:size-16 lg:size-20 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-600 mb-2">{t.noResultsTitle}</h3>
                            <p className="text-sm sm:text-base text-gray-500">{t.noResultsBody}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-14 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-2xl p-10 border-2 border-blue-200">
                        <div className="text-center mb-8">
                            <Mail className="size-10 sm:size-14 lg:size-16 text-blue-600 mx-auto mb-4" />
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#254151] mb-4">{t.contactTitle}</h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t.contactSubtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 text-center">
                                <Phone className="siz-5 sm:size-9 sm:size-11 lg:size-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#254151] mb-2">{t.phoneCardTitle}</h3>
                                <a href="tel:+96825657666" className="text-blue-600 hover:underline text-sm sm:text-base lg:text-lg block" dir="ltr">
                                    +968 2565 7666
                                </a>
                                <p className="text-gray-600 mt-2 text-sm sm:text-base">Ext: 763</p>
                            </div>

                            <div className="bg-white rounded-lg p-6 border-2 border-green-200 text-center">
                                <Mail className=" size-5 sm:size-9 sm:size-11 lg:size-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#254151] mb-2">{t.emailCardTitle}</h3>
                                <a href="mailto:tucoordinator@buc.edu.om" className="text-green-600 hover:underline text-sm sm:text-base lg:text-lg break-all">
                                    tucoordinator@buc.edu.om
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-r from-[#254151] to-[#6096b4] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                        {t.ctaSubtitle}
                    </p>
                    <div className=" grid sm:flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:tucoordinator@buc.edu.om"
                            className="inline-flex items-center gap-2 bg-white text-[#254151] px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
                        >
                            <Mail className="size-5 sm:size-6" />
                            <span>{t.ctaRegister}</span>
                        </a>
                        <a
                            href="tel:+96825657666"
                            className="inline-flex items-center gap-2 bg-[#c2a772] text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-sm sm:text-base lg:text-lg"
                        >
                            <Phone className="size-5 sm:size-6" />
                            <span>{t.ctaCall}</span>
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#254151] transition-all text-sm sm:text-base lg:text-lg"
                        >
                            <ChevronLeft className="size-5 sm:size-6" />
                            <span>{t.ctaBackHome}</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
