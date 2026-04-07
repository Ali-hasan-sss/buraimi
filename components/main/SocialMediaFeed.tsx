"use client"
import { SocialPlatformIcon } from "@/components/social/SocialPlatformIcon";
import { siteSocialIconLabel } from "@/lib/site-contact-settings-icons";
import type { SiteSocialLink } from "@/types/site-contact-settings";
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import socialImage1 from '@/public/assets/697518319cfbd5386e1be0c0c198fb998764dde2.png';
import socialImage2 from '@/public/assets/86fa987e38c10a34d094002d21242b323a8f85a8.png';
import socialImage3 from '@/public/assets/socialImage3.webp';
import socialImage4 from '@/public/assets/c4e850bd98182870bd6a62c78a0f8b1a0bc02c8e.png';
import Image, { StaticImageData } from 'next/image';

interface SocialPost {
  id: number;
  platform: 'instagram' | 'facebook' | 'youtube' | 'linkedin';
  image: string | StaticImageData;
  caption: string;
  username: string;
  timeAgo: string;
  slides: string;
}

const posts: SocialPost[] = [
  {
    id: 1,
    platform: 'instagram',
    image: socialImage1,
    caption: 'الطلبة في مكتبة كلية البريمي الجامعية',
    username: 'burimicollege',
    timeAgo: 'منذ 4 أيام',
    slides: '1/2'
  },
  {
    id: 2,
    platform: 'instagram',
    image: socialImage2,
    caption: 'حفل تخرج الدفعة الجديدة من كلية البريمي الجامعية',
    username: 'كلية البريمي الجامعية',
    timeAgo: 'منذ يوم واحد',
    slides: '1/3'
  },
  {
    id: 3,
    platform: 'instagram',
    image: socialImage3,
    caption: 'احتفالية تخريج كلية البريمي الجامعية 2024',
    username: 'كلية البريمي الجامعية',
    timeAgo: 'منذ 4 أيام',
    slides: '1/3'
  },
  {
    id: 4,
    platform: 'facebook',
    image: socialImage4,
    caption: 'حفل التخرج الكبير أمام مبنى كلية البريمي الجامعية',
    username: 'كلية البريمي الجامعية',
    timeAgo: 'منذ أسبوع واحد',
    slides: '1/2'
  }
];

export function SocialMediaFeed({
  socialLinks = [],
}: {
  socialLinks?: SiteSocialLink[];
}) {
  return (
    <section className="relative overflow-visible bg-gray-50 py-16 pb-4">

      <div className="relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-base sm:text-lg  lg:text-xl xl:text-2xl 2xl:text-[41px] text-[#254151] order-1 md:order-1">
              ابق على تواصل
            </h2>

            {socialLinks.length > 0 ? (
              <div
                dir="ltr"
                className="flex items-center gap-3 flex-wrap order-2 md:order-2 justify-center md:justify-end"
              >
                {socialLinks.map((link, i) => {
                  const href = link.url.trim();
                  const isHttp =
                    href.startsWith("http://") || href.startsWith("https://");
                  return (
                    <a
                      key={`${link.icon}-${i}`}
                      href={href}
                      target={isHttp ? "_blank" : undefined}
                      rel={isHttp ? "noopener noreferrer" : undefined}
                      title={siteSocialIconLabel(link.icon)}
                      aria-label={siteSocialIconLabel(link.icon)}
                      className="flex size-11 items-center justify-center overflow-visible rounded-lg border-2 border-gray-200 bg-white p-1.5 text-[#254151] shadow-sm transition-all hover:border-[#6096b4] hover:bg-[#254151] hover:text-white"
                    >
                      <SocialPlatformIcon
                        name={link.icon}
                        className="size-[1.35rem] max-h-full max-w-full"
                      />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-white shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl rounded-xl"
              >
                {/* Slides Badge */}
                <div className="absolute top-4 right-4 z-10 bg-black/70 text-white px-3 py-1 text-sm backdrop-blur-sm shadow-md">
                  {post.slides}
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    fill
                    src={post.image}
                    alt={post.caption}
                    sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Footer */}
                <div className="p-4 flex items-center justify-between">
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-gradient-to-br from-[#254151] to-[#6096b4] shadow-md flex items-center justify-center">
                      {post.platform === 'instagram' && <Instagram className="size-5 text-white" />}
                      {post.platform === 'facebook' && <Facebook className="size-5 text-white" />}
                      {post.platform === 'youtube' && <Youtube className="size-5 text-white" />}
                      {post.platform === 'linkedin' && <Linkedin className="size-5 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{post.username}</p>
                      <p className="text-xs text-gray-500">{post.timeAgo}</p>
                    </div>
                  </div>

                  {/* Platform Icon */}
                  <div className="size-8 bg-gray-100 shadow-sm flex items-center justify-center">
                    {post.platform === 'instagram' && <Instagram className="size-4 text-gray-700" />}
                    {post.platform === 'facebook' && <Facebook className="size-4 text-gray-700" />}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#254151]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <p className="mb-4">{post.caption}</p>
                    <button className="bg-white text-[#254151] px-6 py-2 shadow-md hover:bg-[#6096b4] hover:text-white transition-colors">
                      عرض المنشور
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button - Full Width Strip */}
        <div className="w-full mt-12">
          <button className="w-full bg-[#6096b4] hover:bg-[#254151] text-white py-6 text-xl transition-all">
            عرض المزيد من المنشورات
          </button>
        </div>
      </div>
    </section>
  );
}