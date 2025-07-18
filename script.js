
 function compareTexts() {
      const textA = document.getElementById("text1").value;
      const textB = document.getElementById("text2").value;

      const resultA = document.getElementById("resultA");
      const resultB = document.getElementById("resultB");
      const message = document.getElementById("message");

      const diff = Diff.diffChars(textA, textB);
      let outputA = "";
      let outputB = "";
      let hasDifference = false;


      diff.forEach(part => {
        if (part.added) {
          outputB += `<span class="added">${part.value}</span>`;
          hasDifference = true;
        } else if (part.removed) {
          outputA += `<span class="removed">${part.value}</span>`;
        hasDifference=true;
        } else {
          outputA += part.value;
          outputB += part.value;
        }
      });

      resultA.innerHTML = outputA;
      resultB.innerHTML = outputB;
      message.textContent = hasDifference ? "🔍👀 There are differences 👀🔍" : "✅👌 There are no differences 👌✅";
    }

    function resetFields() {
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
  document.getElementById("resultA").innerHTML = "";
  document.getElementById("resultB").innerHTML = "";
  document.getElementById("message").textContent = "";
}
