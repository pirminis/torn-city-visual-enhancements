// ==UserScript==
// @name         Visual enhancements for Torn City
// @namespace    https://github.com/pirminis/torn-city-visual-enhancements
// @version      0.0.7
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

  updateStyles();
  improveAuctionPagination();

  function updateStyles() {
    GM_addStyle(`
      img.torn-item.red,
      img[class*="rarity3"] {
        filter: none;
        background-color: rgba(255,0,0,0.25);
      }
      img.torn-item.orange,
      img[class*="rarity2"] {
        filter: none;
        background-color: rgba(255,128,0,0.33);
      }
      img.torn-item.yellow,
      img[class*="rarity1"] {
        filter: none;
        background-color: rgba(255,255,0,0.25);
      }

      img.torn-item.large,
      img[class*="rarity3"],
      img[class*="rarity2"],
      img[class*="rarity1"] {
        filter: contrast(1.2);
      }

      .d [class^="bonus-attachment-"] {
        filter: contrast(1.2);
      }

      .d .pagination-left {
        position: absolute;
        display: inline-block;
        left: 10px;
        top: 10px;
      }
      .d .pagination-right {
        position: absolute;
        display: inline-block;
        right: 10px;
        top: 10px;
      }
      .action-wrap.use-act.use-action {
        height: 55px;
      }
    `);
  }

  function improveAuctionPagination() {
    const itemsList = document.querySelector("#types-tab-1 .items-list-wrap");
    const pagination = document.querySelector("#types-tab-1 .pagination-wrap");

    if (itemsList.nextElementSibling == pagination) {
      itemsList.before(pagination);
    }
  }
})(window);
