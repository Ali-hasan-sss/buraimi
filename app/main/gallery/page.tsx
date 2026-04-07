"use client"
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '@/types/gallary';
import { galleryImages } from '@/staticData/gallary';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';

const ResponsiveMasonry = dynamic(
    () => import('react-responsive-masonry').then((m) => m.ResponsiveMasonry),
    { ssr: false }
);

const Masonry = dynamic(
    () => import('react-responsive-masonry').then((m) => m.default),
    { ssr: false }
);

function GalleryCard({
    image,
    index,
    isAr,
    onClick,
}: {
    image: GalleryImage;
    index: number;
    isAr: boolean;
    onClick: (image: GalleryImage, index: number) => void;
}) {
    return (
        <div
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            onClick={() => onClick(image, index)}
        >
            <Image
                src={image.url}
                alt={isAr ? image.titleAr : image.titleEn}
                width={1200}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg mb-1">{isAr ? image.titleAr : image.titleEn}</h3>
                <p className="text-white/80 text-sm">{isAr ? image.categoryAr : image.categoryEn}</p>
            </div>
        </div>
    );
}

function MasonryGrid({
    isAr,
    onOpen,
}: {
    isAr: boolean;
    onOpen: (image: GalleryImage, index: number) => void;
}) {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
            <Masonry gutter="16px">
                {galleryImages.map((image, index) => (
                    <div key={image.id}>
                        <GalleryCard image={image} index={index} isAr={isAr} onClick={onOpen} />
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
}

const MasonryGridNoSSR = dynamic(() => Promise.resolve(MasonryGrid), {
    ssr: false,
    loading: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
                <div
                    key={i}
                    className="rounded-lg shadow-md overflow-hidden bg-gray-100 animate-pulse"
                >
                    <div className="w-full aspect-[4/3] bg-gray-200" />
                </div>
            ))}
        </div>
    ),
});

export function GalleryPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const dir = isAr ? 'rtl' : 'ltr';

    const t = isAr
        ? {
            heroTitle: 'ألبوم الصور',
            breadcrumbHome: 'الرئيسية',
            breadcrumbNews: 'الأخبار والفعاليات',
            breadcrumbGallery: 'ألبوم الصور',
        }
        : {
            heroTitle: 'Photo Gallery',
            breadcrumbHome: 'Home',
            breadcrumbNews: 'News & Events',
            breadcrumbGallery: 'Photo Gallery',
        };

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openImageModal = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const goToNext = () => {
        const nextIndex = (currentImageIndex + 1) % galleryImages.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-white" dir={dir}>
            {/* Hero Section */}
            <div className="bg-[#254151] text-white py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-5xl mb-4">{t.heroTitle}</h1>

                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-sm mt-8">
                        <Link href="/main" className="hover:text-[#c2a772] transition-colors">
                            {t.breadcrumbHome}
                        </Link>
                        <span>/</span>
                        <Link href="/main/news" className="hover:text-[#c2a772] transition-colors">
                            {t.breadcrumbNews}
                        </Link>
                        <span>/</span>
                        <span className="text-[#c2a772]">{t.breadcrumbGallery}</span>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 sm:px-6 py-16">
                <MasonryGridNoSSR
                    isAr={isAr}
                    onOpen={(image, index) => {
                        openImageModal(image, index);
                    }}
                />
            </div>

            {/* Image Modal/Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 left-6 text-white hover:text-[#c2a772] transition-colors z-10"
                    >
                        <X className="size-8" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#c2a772] transition-colors z-10"
                    >
                        <ChevronRight className="size-12" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#c2a772] transition-colors z-10"
                    >
                        <ChevronLeft className="size-12" />
                    </button>

                    {/* Main Image */}
                    <div
                        className="max-w-7xl max-h-[90vh] mx-auto px-4 sm:px-12 lg:px-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh]">
                            <Image
                                fill
                                src={selectedImage.url}
                                alt={isAr ? selectedImage.titleAr : selectedImage.titleEn}
                                className="object-contain rounded-lg"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Image Info */}
                        <div className="text-center mt-6">
                            <h2 className="text-white text-2xl mb-2">{isAr ? selectedImage.titleAr : selectedImage.titleEn}</h2>
                            <p className="text-white/70 text-base">{isAr ? selectedImage.categoryAr : selectedImage.categoryEn}</p>
                            <p className="text-white/50 text-sm mt-2">
                                {currentImageIndex + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GalleryPage;