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
  })({
      0: (
        function(__magic__, exports) {
            var X = __magic__(2)
            var Y = __magic__(1)
            
            
            X.print(Y.sub(2, 3));
        }
    ),
    1: (
        function(__magic__, exports) {
            exports.sub = (a, b) => a - b;
        }
    ),
    2: (
        function(__magic__, exports) {
            exports.print = x => console.log(x);
        }
    )
  });
  