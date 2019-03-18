export function translate(rna) {
  let output = [];
  if (!rna || rna.length === 0) {
    return output;
  }
  let codons = [
    "AUG",
    "UUU",
    "UUC",
    "UUA",
    "UUG",
    "UCU",
    "UCC",
    "UCA",
    "UCG",
    "UAU",
    "UAC",
    "UGU",
    "UGC",
    "UGG",
    "UAG",
    "UAA",
    "UGA"
  ];
  let polypeptide = [
    "Methionine",
    "Phenylalanine",
    "Phenylalanine",
    "Leucine",
    "Leucine",
    "Serine",
    "Serine",
    "Serine",
    "Serine",
    "Tyrosine",
    "Tyrosine",
    "Cysteine",
    "Cysteine",
    "Tryptophan"
  ];
  for (var i = 0; i < rna.length; i = i + 3) {
    if (codons.indexOf(rna.substr(i, 3)) === -1) {
      throw new Error("Invalid codon");
    }
  }
  try {
    for (var j = 0; j < codons.length; j++) {
      for (var i = 0; i < rna.length; i = i + 3) {
        if (
          rna.substr(i, 3) === "UAG" ||
          rna.substr(i, 3) === "UAA" ||
          rna.substr(i, 3) === "UGA"
        ) {
          break;
        } else if (rna.substr(i, 3) === codons[j]) {
          output.push(polypeptide[j]);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return output;
}
