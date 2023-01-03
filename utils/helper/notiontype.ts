export const notionType = (type: string) => {
    let notionType;

    switch (type) {
        case 'improvement':
            notionType = '⬆️‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎Improvement';
            break;
        case 'bug':
            notionType = '🐛‏‏‎ ‎‏‏‎ ‎Bug';
            break;
        case 'ui/ux':
            notionType = '🌟‏‏‎ ‎‏‏‎ ‎UI/UX';
            break;
        case 'integration':
            notionType = '🔌‏‏‎ ‎‏‏‎ ‎Integration';
            break;
        case 'lainnya':
            notionType = '🦄‏‏‎ ‎‏‏‎ ‎Lainnya';
            break;
    }

    return notionType;
};
