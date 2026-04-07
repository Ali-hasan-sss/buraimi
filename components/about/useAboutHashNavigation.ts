import { useCallback, useEffect, useMemo, useState, type SetStateAction } from 'react';

export function useAboutHashNavigation() {
    const sectionIdToHash = useMemo<Record<string, string>>(
        () => ({
            about: 'about-institution',
            'board-chairman-message': 'welcome-message',
            'dean-message': 'welcome-message',
            'vision-mission': 'vision-mission',
            councils: 'councils',
            'college-council': 'college-council',
            'graduate-attributes': 'graduate-attributes',
            'academic-affiliation': 'academic-affiliation',
            'quality-assurance': 'quality-assurance',
            'quality-assurance-main': 'quality-assurance',
            'organizational-structure': 'organizational-structure',
            partnerships: 'partners',
            'safety-security': 'health-safety',
            'campus-map': 'campus-map',
            jobs: 'jobs',
        }),
        []
    );

    const hashToSectionId = useMemo<Record<string, string>>(
        () => ({
            'about-institution': 'about',
            'welcome-message': 'dean-message',
            'vision-mission': 'vision-mission',
            councils: 'councils',
            'college-council': 'college-council',
            'graduate-attributes': 'graduate-attributes',
            'academic-affiliation': 'academic-affiliation',
            'quality-assurance': 'quality-assurance-main',
            'organizational-structure': 'organizational-structure',
            partners: 'partnerships',
            'health-safety': 'safety-security',
            'campus-map': 'campus-map',
        }),
        []
    );

    const deriveStateFromHash = useCallback(
        (rawHash: string) => {
            const hash = rawHash.replace(/^#/, '').trim();
            const mapped = hash ? hashToSectionId[hash] : undefined;

            const activeSection = mapped || 'about';
            const expandedMenus = ['councils'];

            if (activeSection.startsWith('quality-')) {
                expandedMenus.push('quality-assurance');
            }

            if (
                activeSection === 'board-directors' ||
                activeSection === 'board-trustees' ||
                activeSection === 'advisory-council' ||
                activeSection === 'college-council'
            ) {
                if (!expandedMenus.includes('councils')) expandedMenus.push('councils');
            }

            return { activeSection, expandedMenus };
        },
        [hashToSectionId]
    );

    const [{ activeSection, expandedMenus }, setNavState] = useState(() => deriveStateFromHash(''));

    const setActiveSection = useCallback((id: string) => {
        setNavState((prev) => ({ ...prev, activeSection: id }));
    }, []);

    const setExpandedMenus = useCallback((updater: SetStateAction<string[]>) => {
        setNavState((prev) => {
            const next = typeof updater === 'function' ? updater(prev.expandedMenus) : updater;
            return { ...prev, expandedMenus: next };
        });
    }, []);

    const applyHash = useCallback(
        (rawHash: string) => {
            const derived = deriveStateFromHash(rawHash);
            setNavState(derived);
        },
        [deriveStateFromHash]
    );

    useEffect(() => {
        const onHashChange = () => applyHash(window.location.hash);

        const initialSyncTimer = window.setTimeout(() => {
            onHashChange();
        }, 0);

        window.addEventListener('hashchange', onHashChange);
        return () => {
            window.clearTimeout(initialSyncTimer);
            window.removeEventListener('hashchange', onHashChange);
        };
    }, [applyHash]);

    const navigateToSection = useCallback(
        (id: string) => {
            setActiveSection(id);

            const nextHash = sectionIdToHash[id];
            if (nextHash) {
                window.history.replaceState(null, '', `#${nextHash}`);
            }

            if (id.startsWith('quality-')) {
                setExpandedMenus((prev) =>
                    prev.includes('quality-assurance') ? prev : [...prev, 'quality-assurance']
                );
            }

            if (
                id === 'board-directors' ||
                id === 'board-trustees' ||
                id === 'advisory-council' ||
                id === 'college-council'
            ) {
                setExpandedMenus((prev) => (prev.includes('councils') ? prev : [...prev, 'councils']));
            }
        },
        [sectionIdToHash, setActiveSection, setExpandedMenus]
    );

    return {
        activeSection,
        expandedMenus,
        setExpandedMenus,
        navigateToSection,
    };
}
