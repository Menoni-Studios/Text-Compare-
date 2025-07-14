function compare() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;
  const output = document.getElementById("output");

  // Compare Text 2 to Text 1 — highlighting what's extra in Text 1
  const diff = Diff.diffChars(text2, text1); // reversed order

  let resultA = "";

  diff.forEach(part => {
    if (part.removed) {
      resultA += `<span class="removed">${part.value}</span>`;
    } else if (!part.added) {
      resultA += part.value;
    }
  });

  output.innerHTML = resultA;
}
