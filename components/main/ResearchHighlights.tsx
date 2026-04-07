"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import collegeLogoImage from '@/public/assets/5288ce83fe1555261b7e0329387b641e04ab1832.png';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';
import { ResearchItem } from '@/types/landing';



const researchItemsByLocale: Record<'ar' | 'en', ResearchItem[]> = {
  ar: [
    {
      id: 1,
      date: 'يوليو 19، 2024',
      titleAr: 'الفريق البحثي للعلوم الإدارية بكلية البريمي الجامعية',
      titleEn: 'Administrative Sciences Research Team at Al Buraimi University College',
    },
    {
      id: 2,
      date: 'يوليو 19، 2024',
      titleAr: 'الفريق البحثي للتكنولوجيا والابتكار بكلية البريمي',
      titleEn: 'Technology and Innovation Research Team at Al Buraimi College',
    },
    {
      id: 3,
      date: 'يوليو 19، 2024',
      titleAr: 'دراسات الأعمال والتنمية الاقتصادية في سلطنة عمان - كلية البريمي',
      titleEn: 'Business Studies and Economic Development in Oman - Al Buraimi College',
    }
  ],
  en: [
    {
      id: 1,
      date: 'July 19, 2024',
      titleAr: 'الفريق البحثي للعلوم الإدارية بكلية البريمي الجامعية',
      titleEn: 'Administrative Sciences Research Team at Al Buraimi University College',
    },
    {
      id: 2,
      date: 'July 19, 2024',
      titleAr: 'الفريق البحثي للتكنولوجيا والابتكار بكلية البريمي',
      titleEn: 'Technology and Innovation Research Team at Al Buraimi College',
    },
    {
      id: 3,
      date: 'July 19, 2024',
      titleAr: 'دراسات الأعمال والتنمية الاقتصادية في سلطنة عمان - كلية البريمي',
      titleEn: 'Business Studies and Economic Development in Oman - Al Buraimi College',
    }
  ]
};

const awardsByLocale: Record<'ar' | 'en', string[]> = {
  ar: [
    'جائزة مصرف الشرافة الإسلامي للبحث العلمي',
    'المكافأة التشجيعية لأعضاء هيئة التدريس - مجال خدمة الجامعة والمجتمع',
    'المكافأة التشجيعية لأعضاء هيئة التدريس - مجال البحث العلمي'
  ],
  en: [
    'Al Sharafa Islamic Bank Award for Scientific Research',
    'Incentive Reward for Faculty Members - University and Community Service',
    'Incentive Reward for Faculty Members - Scientific Research'
  ]
};

export function ResearchHighlights() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const localeKey: 'ar' | 'en' = isRTL ? 'ar' : 'en';

  const t = useMemo(() => {
    const byLocale = {
      ar: {
        researchTitle: 'لمحة عن الأبحاث',
        awardsTitle: 'الجوائز والإنجازات',
        readMore: 'اقرأ المزيد',
        logoAlt: 'شعار كلية البريمي الجامعية',
      },
      en: {
        researchTitle: 'Research Highlights',
        awardsTitle: 'Awards & Achievements',
        readMore: 'Read more',
        logoAlt: 'Al Buraimi University College Logo',
      },
    } as const;
    return byLocale[localeKey];
  }, [localeKey]);

  const researchItems = researchItemsByLocale[localeKey];
  const awards = awardsByLocale[localeKey];

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="pt-4 pb-16 bg-gray-50 relative overflow-hidden">

      <div className="relative z-10">
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Research Highlights - Right Side */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className={`text-base sm:text-2xl lg:text-3xl 2xl:text-[51px] text-black ${isRTL ? 'text-right' : 'text-left'} font-bold`}>{t.researchTitle}</h2>
              </div>

              <div className="space-y-0">
                {researchItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group"
                  >
                    <div className="py-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        {/* Logo on the right */}
                        <div className={`flex-shrink-0 order-1 ${isRTL ? 'self-end sm:self-auto' : 'self-start sm:self-auto'}`}>
                          <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110">
                            <Image
                              src={collegeLogoImage}
                              width={100}
                              height={200}
                              alt={t.logoAlt}
                              sizes="96px"
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Content in the middle */}
                        <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'} order-2 min-w-0`}>
                          {item.date && (
                            <div className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 group-hover:text-[#6096b4] transition-colors">{item.date}</div>
                          )}
                          <h3 className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-black group-hover:text-[#6096b4] leading-relaxed transition-colors font-semibold break-words">
                            {isRTL ? item.titleAr : item.titleEn}
                          </h3>
                        </div>

                        {/* Arrow button on the left */}
                        <div className={`flex-shrink-0 order-3 ${isRTL ? 'self-start sm:self-auto' : 'self-end sm:self-auto'}`}>
                          <button className="size-10 sm:size-12 bg-[#6096b4] hover:bg-[#254151] rounded-full flex items-center justify-center transition-all group-hover:scale-125">
                            {isRTL ? <ArrowLeft className="size-5 text-white" /> : <ArrowRight className="size-5 text-white" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {index < researchItems.length - 1 && (
                      <div className="border-t border-gray-300" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button className="bg-[#6096b4] hover:bg-[#254151] text-white px-8 py-3 rounded-full transition-all flex items-center gap-2">
                  {isRTL ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
                  <span className="text-sm sm:text-base lg:text-lg">{t.readMore}</span>
                </Button>
              </div>
            </div>

            {/* Awards Section - Left Side */}
            <div className="order-1 lg:order-2">
              {/* Awards List - Inside White Card */}
              <div className="bg-white rounded-xl border border-gray-100 p-10 h-full flex flex-col">
                <div className="mb-8">
                  <h2 className={`text-lg sm:text-2xl lg:text-3xl 2xl:text-[51px] text-black ${isRTL ? 'text-right' : 'text-left'} font-bold`}>{t.awardsTitle}</h2>
                </div>

                <div className="space-y-0 flex-1">
                  {awards.map((award, index) => (
                    <div key={index} className="group">
                      <div className="py-6">
                        <div className="flex items-center gap-4 sm:gap-6">
                          {/* Award Title on the right */}
                          <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'} order-1 min-w-0`}>
                            <h3 className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-black leading-relaxed font-normal group-hover:text-[#6193ad] transition-colors break-words">
                              {award}
                            </h3>
                          </div>

                          {/* Arrow button on the left */}
                          <div className="flex-shrink-0 order-2">
                            <button className="size-10 sm:size-12 bg-[#6193ad] hover:bg-[#254151] rounded-full flex items-center justify-center transition-all group-hover:scale-125">
                              {isRTL ? <ArrowLeft className="size-5 text-white" /> : <ArrowRight className="size-5 text-white" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {index < awards.length - 1 && (
                        <div className="border-t border-gray-300" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button className="bg-[#6193ad] hover:bg-[#254151] text-white px-8 py-3 rounded-full transition-all flex items-center gap-2">
                    {isRTL ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
                    <span className="text-sm sm:text-base lg:text-lg">{t.readMore}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}