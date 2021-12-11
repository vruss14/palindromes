import * as palindrome from './assets/js/palindrome';
const spy = jest.spyOn(palindrome, 'palindrome');

test('returns true for the word "racecar"', () => {
    expect(spy('racecar')).toBe(true);
});

test('returns true for the word "kayak"', () => {
    expect(spy('kayak')).toBe(true);
});

test('returns true for the word "Hannah"', () => {
    expect(spy('Hannah')).toBe(true);
});

test('returns false for the word "boat"', () => {
    expect(spy('boat')).toBe(false);
});

test('returns false for the word "plane"', () => {
    expect(spy('plane')).toBe(false);
});

test('returns false for the word "Valerie"', () => {
    expect(spy('Valerie')).toBe(false);
});

test('returns true for the sentence "I did, did I?"', () => {
    expect(spy('I did, did I?')).toBe(true);
});

test('returns true for the sentence "Never odd or even."', () => {
    expect(spy('Never odd or even.')).toBe(true);
});

test('returns true for the sentence "Was it a car or a cat I saw?"', () => {
    expect(spy('Was it a car or a cat I saw?')).toBe(true);
});

test('returns false for the sentence "This is not a palindrome."', () => {
    expect(spy('This is not a palindrome.')).toBe(false);
});

test('returns false for the sentence "Is this a palindrome?"', () => {
    expect(spy('Is this a palindrome?')).toBe(false);
});

test('returns false for the sentence "Thank you, but I would rather not."', () => {
    expect(spy('Thank you, but I would rather not.')).toBe(false);
});

test('returns true for the string "12321"', () => {
    expect(spy('12321')).toBe(true);
});

test('returns true for the date "01/11/10"', () => {
    expect(spy('01/11/10')).toBe(true);
});

test('returns true for the date "12/02/2021"', () => {
    expect(spy('12/02/2021')).toBe(true);
});

test('returns false for the string "1232"', () => {
    expect(spy('1232')).toBe(false);
});

test('returns false for the date "01/11/13"', () => {
    expect(spy('01/11/13')).toBe(false);
});

test('returns false for the date "12/02/2020"', () => {
    expect(spy('12/02/2020')).toBe(false);
});

test('returns true for the string "ACTCGCTCA"', () => {
    expect(spy('ACTCGCTCA')).toBe(true);
});

test('returns false for the string "ACTCGCTCACC"', () => {
    expect(spy('ACTCGCTCACC')).toBe(false);
});
