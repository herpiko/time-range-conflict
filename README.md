# time-range-conflict

Time range conflict checker

### Usage

```
const isConflict = require('time-range-conflict');
const moment = require('moment');
let x = {
  start : moment(),
  end : moment(),
}
let y = {
  start : moment(),
  end : moment(),
}

console.log(isConflict(x,y)); // Should be true

x = {
  start : moment(),
  end : moment(),
}
y = {
  start : moment(),
  end : moment(),
}

console.log(isConflict(x,y)); // Should be true

```

### TODO

- Check across more than two time range objects
- Accuracy option deep down to millisecond.
