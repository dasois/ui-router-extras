"use strict";
var iframeStateFactory = function($q, futureState) {
  var state = {
    name: futureState.stateName,
    template: "<iframe src='" + futureState.src + "'></iframe>",
    url: futureState.urlPrefix
  };
  return $q.when(state);
};