// Time / day helpers

export function getTimePeriod() {
    const time = new Date();
    const hour = time.getHours();

    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'night';
}
