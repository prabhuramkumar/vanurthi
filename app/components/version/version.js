'use strict';

angular.module('flightSearch.version', [
  'flightSearch.version.interpolate-filter',
  'flightSearch.version.version-directive'
])

.value('version', '0.1');
