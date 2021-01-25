(function (modules) {
  var cache = {};

  function __magic__(id) {
    if (cache[id]) return cache[id].exports;

    const exports = {};

    modules[id](__magic__, exports);
    cache[id] = {
      exports,
    };
    return exports;
  }

  __magic__(0);
})();
