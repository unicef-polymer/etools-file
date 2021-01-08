// @namespace etoolsFileMixins
// window.EtoolsFileMixins = window.EtoolsFileMixins || {};

const dateLib = window.dayjs || window.moment;
if (!dateLib) {
  throw new Error('Etools-file DateMixin: dayjs or moment is not loaded');
}

/**
 * @polymer
 * @mixinFunction
 */
export const DateMixin = (baseClass) => class extends (baseClass) { // eslint-disable-line

  /**
   * Format date string to any format supported by dayjs
   */
  prettyDate(dateInput, format) {
    if (!format) {
      format = 'D MMM YYYY';
    }
    let date;
    if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      date = new Date(dateInput);
    }

    if (date.toString() !== 'Invalid Date') {
      // using dateLib.utc() ensures that the date will not be changed no matter timezone the user has set
      return dateLib.utc(date).format(format);
    }

    return '';
  }
};
