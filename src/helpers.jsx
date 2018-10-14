import React from 'react';

export const parseDate = (date) => {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return { year, month, day };
}
export default parseDate;