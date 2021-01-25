class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync("DonePlugin", (stats, cb) => {
      console.log("Time to dance");
      cb();
    });
  }
}

module.exports = DonePlugin;
