'use strict';

const isConflict = require('./index.js');
const moment = require('moment');
require('mocha');
const assert = require('assert');

let x = {
  start : moment(),
  end : moment(),
}
let y = {
  start : moment(),
  end : moment(),
}

describe('Two time range objects', function() {
  it('Case #1', function() {
    /**
     *  x       :            |-----------------------|
     *  y       : |---------------------|
     */
		x.start.set(5, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(7, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #2', function() {
    /**
     *  x       : |-----------------------|
     *  y       :            |---------------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(7, 'minutes');
		y.start.set(5, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #3', function() {
    /**
     *  x       :     |-------------|
     *  y       : |---------------------|
     */
		x.start.set(3, 'minutes');
		x.end.set(7, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #4', function() {
    /**
     *  x       : |---------------------|
     *  y       :     |-------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(3, 'minutes');
		y.end.set(7, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #5', function() {
    /**
     *  x       : |-------------|
     *  y       : |---------------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(5, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #6', function() {
    /**
     *  x       : |---------------------|
     *  y       : |-------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(5, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #7', function() {
    /**
     *  x       :         |-------------|
     *  y       : |---------------------|
     */
		x.start.set(5, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #8', function() {
    /**
     *  x       : |---------------------|
     *  y       :         |-------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(5, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
  it('Case #9', function() {
    /**
     *  x       : |---------------------|
     *  y       : |---------------------|
     */
		x.start.set(1, 'minutes');
		x.end.set(10, 'minutes');
		y.start.set(1, 'minutes');
		y.end.set(10, 'minutes');
		assert.equal(isConflict(x,y),true);
  });
});
