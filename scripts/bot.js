module.exports = function(burial) {
  burial.hear(/(@[\w\._-]+) is( a)? (\w+)/i, function(msg) {
    msg.send("$1 is Burial");
  });
}