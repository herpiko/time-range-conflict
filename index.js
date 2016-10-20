'use strict';
module.exports = function(x, y) {
  // Standardize second and millisecond
  x.start = x.start.milliseconds(0);
  x.start = x.start.seconds(0);
  x.end = x.end.milliseconds(0);
  x.end = x.end.seconds(0);
  y.start = y.start.milliseconds(0);
  y.start = y.start.seconds(0);
  y.end = y.end.milliseconds(0);
  y.end = y.end.seconds(0);
  if (
      (
        /**
         *  x       :            |-----------------------|
         *  y       : |---------------------|
         */
        (x.start.valueOf() < y.end.valueOf() &&
        x.start.valueOf() > y.start.valueOf()) ||
        /**
         *  x       : |-----------------------|
         *  y       :            |---------------------|
         */
        (x.end.valueOf() > y.start.valueOf() &&
        x.end.valueOf() < y.end.valueOf()) ||
        /**
         *  x       :     |-------------|
         *  y       : |---------------------|
         */
        (x.start.valueOf() > y.start.valueOf() &&
        x.end.valueOf() < y.end.valueOf()) ||
        /**
         *  x       : |---------------------|
         *  y       :     |-------------|
         */
        (x.start.valueOf() < y.start.valueOf() &&
        x.end.valueOf() > y.end.valueOf()) ||
        /**
         *  x       : |-------------|
         *  y       : |---------------------|
         */
        (x.start.valueOf() == y.start.valueOf() &&
        x.end.valueOf() < y.end.valueOf()) ||
        /**
         *  x       : |---------------------|
         *  y       : |-------------|
         */
        (x.start.valueOf() == y.start.valueOf() &&
        x.end.valueOf() > y.end.valueOf()) ||
        /**
         *  x       :         |-------------|
         *  y       : |---------------------|
         */
        (x.start.valueOf() > y.start.valueOf() &&
        x.end.valueOf() == y.end.valueOf()) ||
        /**
         *  x       : |---------------------|
         *  y       :         |-------------|
         */
        (x.start.valueOf() < y.start.valueOf() &&
        x.end.valueOf() == y.end.valueOf()) ||
        /**
         *  x       : |---------------------|
         *  y       : |---------------------|
         */
        (x.start.valueOf() == y.start.valueOf() &&
        x.end.valueOf() == y.end.valueOf())
      )
  ) {
    return true;
  } else {
    return false;
  }
}
