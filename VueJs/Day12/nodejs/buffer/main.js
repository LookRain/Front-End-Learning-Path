buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log(buf.toString('ascii', 0, 6));

console.log(buf.toJSON());