"use client"
import React, { useState, useMemo } from 'react';

import PillCTA from '@/components/researchPill/PillCTA';
import { seminars } from '@/staticData/research';
import ProfHero from '@/components/Research/prof/ProfHero';
import ProfIntro from '@/components/Research/prof/ProfIntro';
import SeminarsListComp from '@/components/Research/prof/SeminarsList';
import ResImages from '@/components/Research/ResImage';


export default function ProfessionalDevelopmentPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [yearFilter, setYearFilter] = useState('all');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);




    // Filter logic
    const filteredSeminars = useMemo(() => {
        return seminars.filter(seminar => {
            const matchesSearch =
                seminar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                seminar.presenter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                seminar.department.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesYear = yearFilter === 'all' || seminar.academicYear === yearFilter;
            const matchesDepartment = departmentFilter === 'all' || seminar.department === departmentFilter;

            return matchesSearch && matchesYear && matchesDepartment;
        });
    }, [searchTerm, yearFilter, departmentFilter]);

    // Pagination
    const totalPages = Math.ceil(filteredSeminars.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const currentSeminars = filteredSeminars.slice(startIndex, endIndex);

    // Get unique years and departments
    const uniqueYears = Array.from(new Set(seminars.map(s => s.academicYear))).sort().reverse();
    const uniqueDepartments = Array.from(new Set(seminars.map(s => s.department))).sort();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <ProfHero />

            {/* Introduction */}

            <ProfIntro seminarsCount={filteredSeminars.length} departmentsCount={uniqueYears.length} yearsCount={uniqueDepartments.length} />
            {/* Seminars List */}
            <SeminarsListComp seminars={seminars} />
            {/* Images Gallery */}
            <ResImages />
            {/* CTA */}
            <PillCTA />
        </div>
    );
}
