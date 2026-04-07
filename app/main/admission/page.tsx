"use client"
import { Button } from '@/components/ui/button';
import { Users, Globe, GraduationCap, DollarSign, Award, BookOpen, FileText } from 'lucide-react';
import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
import { AdmissionData } from '@/staticData/Admission';
import AdmissionHeader from '@/components/admission/AdmissionHeader';
import AdmissionStatsComp from '@/components/admission/AdmissionStats';
import FinancialAid from '@/components/admission/FinancialAid';

export default function Admission() {

    const data = AdmissionData
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}

            <AdmissionHeader />
            {/* Stats Section */}
            <AdmissionStatsComp stat={data.stats}
                undergraduateFeatures={data.undergraduateFeatures}
                postgraduatePrograms={data.postgraduatePrograms}
            />

            <FinancialAid discounts={data.discounts} />


        </div>
    );
}