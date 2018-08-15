function weave() {
  let q = new Queue();
  let args=Array.from(arguments)
  for (let j = 0; j < args.length; j++) {
    let len=args[j].len()
    for (let k = 0; k < len; k++) {
      q.add(args[j].remove());
    }
  }
  return q;
}