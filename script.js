const cells = document.querySelectorAll(".cell");
let turn = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      cell.textContent = turn;
      cell.classList.add(turn.toLowerCase());
      turn = turn === "X" ? "O" : "X";
    }
  });
});
