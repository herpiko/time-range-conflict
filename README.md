# time-range-conflict

Time range conflict checker.

### Usage

```
const isConflict = require('time-range-conflict');
const moment = require('moment');
let x = {
  start : moment().set(1, 'minutes'),
  end : moment().set(5, 'minutes')
}
let y = {
  start : moment().set(3, 'minutes'),
  end : moment().set(7, 'minutes'),
}

console.log(isConflict(x,y)); // Should be true

let x = {
  start : moment().set(1, 'minutes'),
  end : moment().set(5, 'minutes')
}
let y = {
  start : moment().set(6, 'minutes'),
  end : moment().set(9, 'minutes'),
}

console.log(isConflict(x,y)); // Should be false

```

### TODO

- Check across more than two time range objects
- Accuracy option deep down to millisecond.
