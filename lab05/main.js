const hintBtn = document.getElementById("hintBtn");

function showHint() {
    alert("HINTS\n- If you need a change of pace, try holding Space or Shift...\n- If you need a distraction, try clicking Mafuyu or the blue keyboard...");
}

hintBtn.addEventListener("click", showHint);