var usedAsDefaultArg = 42;

var usedAsDefaultArg2 = [ 1, 2 ];

function g({notUsed}, a, b = usedAsDefaultArg, [c, d] = usedAsDefaultArg2) {
  return a + b + notUsed + 1;
}

Module["g"] = g;
