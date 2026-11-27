// Stable keys sent to Odoo. Labels shown to the user live in the locale files:
// contact.form.usersOptions.<key> and contact.form.segmentOptions.<key>.
// Changing or removing a key here breaks the mapping on the Odoo side.

export const EMPLOYEE_RANGES = ['1-5', '6-10', '11-25', '26-50', '50+'] as const;

export const SEGMENTS = [
    'retail',
    'industry',
    'logistics',
    'services',
    'hospitality',
    'food_service',
    'events',
] as const;

export type EmployeeRange = typeof EMPLOYEE_RANGES[number];
export type Segment = typeof SEGMENTS[number];
