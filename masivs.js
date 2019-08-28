let masivs = [3,8,11];

function iegutPecIndeksa(i) {
  return masivs[i];
}

function mainitPecIndeksa(i, vertiba) {
  masivs[i] = vertiba;
}

function dzestdivusPecIndeksaiIeliktDesmitniekuVieta(i) {
  masivs = masivs.splice(i, 2, 10);
}

function atrastVertibasIndeksu(vertiba) {
  for (let i = 0; i < vertiba.length; i++) {
    if (vertiba === masivs[i]) {
      return i;
    }
  }
  return -1;
}
