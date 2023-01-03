export const getFullDate = (shortDate: Date) => {
    const fullday = new Date(shortDate);
    const monthNames = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];

    const date = fullday.getDate();
    const month = monthNames[fullday.getMonth()];
    const year = fullday.getFullYear();

    return `${date} ${month} ${year}`;
};

export const getCurrentYear = () => {
    const today = new Date();

    return `${today.getFullYear()}`;
};
