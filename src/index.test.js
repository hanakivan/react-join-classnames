import classes from './index';

const THIS_SHOULD_BE_FALSE = false;
const THIS_SHOULD_BE_TRUE = true;


test('will not render undefineds', () => {
    expect(classes(undefined, undefined)).toBe("");
});

test('will no render nulls', () => {
    expect(classes(null, null, null, )).toBe("");
});

test('will no transform booleans to string', () => {
    expect(classes(false, true)).toBe("");
});

test('check for two strings', () => {
    expect(classes('bugs', 'bunny')).toBe('bugs bunny');
});

test('check for an integer and a string', () => {
    expect(classes(1, 'bugs', 'bunny')).toBe('1 bugs bunny');
});

test('check for ternary operator proper resulting in false', () => {
    expect(classes(THIS_SHOULD_BE_FALSE ? "bugs" : "", "bunny")).toBe('bunny');
});

test('check for ternary operator proper resulting in true', () => {
    expect(classes(THIS_SHOULD_BE_TRUE ? "bugs" : "", "bunny")).toBe('bugs bunny');
});

test('check for nullish coalescing operator asserted as truthy', () => {
    expect(classes(THIS_SHOULD_BE_TRUE && "bugs", "bunny")).toBe('bugs bunny');
});

test('check for nullish coalescing operator asserted as falsy', () => {
    expect(classes(THIS_SHOULD_BE_FALSE && "bugs", "bunny")).toBe('bunny');
});

test('check for correctly processing zeros as strings', () => {
    expect(classes("0", "0", "0")).toBe('0 0 0');
});

test('check for correctly processing zeros as integers', () => {
    expect(classes(0, 0, 0)).toBe('0 0 0');
});