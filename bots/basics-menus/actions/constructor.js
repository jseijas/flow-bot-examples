module.exports = function(next) {
  this.getDialog('/rootMenu')
    .reloadAction('showMenu', null, { matches: /^(menu|back)/i });
  next();
};
