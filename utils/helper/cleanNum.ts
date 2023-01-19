/**
 * Check if the number start with "8" or "62"
 * then return the proper form of phone number
 * For indonesian phone number only
 * For example: "0812131415" --> "812131415" or "628512131415" --> "812131415"
 * @constructor
 * @param {string} phoneNum - The phone number.
 * @return {string} The formatted phone number
 */
export default function cleanNum(phoneNum: string) {
  let result: string;
  if (phoneNum.charAt(0) === '0') {
    result = phoneNum.slice(1);
  } else if (phoneNum.charAt(0) === '6' && phoneNum.charAt(1) === '2') {
    result = phoneNum.slice(2);
  } else {
    result = phoneNum;
  }

  return result;
}

/**
 * Eliminate the "0" number on the first character of a phone number if exist
 * For example: "0812131415" --> "812131415"
 * Best use to add the prefix "+62"
 * @constructor
 * @param {string} phoneNum - The phone number.
 */
export const ifNumIsZero = (phoneNum: string) => {
  if (phoneNum.charAt(0) === '0') {
    return phoneNum.slice(1);
  } else {
    return phoneNum;
  }
};

/**
 * Eliminate the "62" number on the first character of a phone number if exist
 * For example: "62812131415" --> "812131415"
 * Best use to add the prefix "+62"
 * @constructor
 * @param {string} phoneNum - The phone number.
 */
export const ifNumIsSixtyTwo = (phoneNum: string): string => {
  const bool = phoneNum.charAt(0) === '6' && phoneNum.charAt(1) === '2';
  if (bool) {
    return phoneNum.slice(2);
  } else {
    return phoneNum;
  }
};
