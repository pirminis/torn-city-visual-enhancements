// ==UserScript==
// @name         Visual enhancements for Torn City
// @namespace    https://github.com/pirminis/torn-city-visual-enhancements
// @version      0.0.1
// @description  Visual enhancements for Torn City
// @author       pirminis
// @match        https://www.torn.com/*
// @updateURL    https://github.com/pirminis/torn-city-visual-enhancements/raw/master/torn-city-visual-enhancements.user.js
// @downloadURL  https://github.com/pirminis/torn-city-visual-enhancements/raw/master/torn-city-visual-enhancements.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function(global) {
  "use strict";

  const loaded = "tornCityVisualEnhancementsLoaded";

  if (window[loaded]) {
    return;
  }

  window[loaded] = true;

  console.log("Torn City visual enhancements loaded.");

  // updateStyles();

  function updateStyles() {
    GM_addStyle(`
      #user-money {
        font-weight: bold;
      }
    `);
  }
})(window);
