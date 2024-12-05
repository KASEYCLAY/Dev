const endpoint = 'playerdata.json';
const players = [];
  
  let currentPlayer = 1;
  let board = Array(3).fill().map(() => Array(3).fill(null)); // 3x3 board
  
  const grid = document.getElementById("grid");
  const resetBtn = document.getElementById("reset-btn");
  
  // Create Player Selection Dropdown
  function showPlayerSelector(cell) {
    const selector = document.createElement("div");
    selector.className = "player-selector";
    
    // Dropdown with player options
    const dropdown = document.createElement("select");
    dropdown.innerHTML = players.map(player => `<option value="${player.name}">${player.name}</option>`).join("");
    
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    
    confirmBtn.addEventListener("click", () => {
      const selectedPlayer = dropdown.value;
      cell.textContent = selectedPlayer;
      cell.classList.add("selected");
      cell.dataset.player = currentPlayer;
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      board[row][col] = currentPlayer; // Update board state
      currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch turn
      selector.remove();
      checkWinner();
    });
  
    selector.appendChild(dropdown);
    selector.appendChild(confirmBtn);
    cell.appendChild(selector);
  }
  
  // Add Click Events to Cells
  grid.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {
      if (!cell.classList.contains("selected")) {
        showPlayerSelector(cell);
      }
    });
  });
  
  // Reset Game
  resetBtn.addEventListener("click", () => {
    board = Array(3).fill().map(() => Array(3).fill(null));
    currentPlayer = 1;
    grid.querySelectorAll(".cell").forEach(cell => {
      cell.textContent = "";
      cell.classList.remove("selected");
    });
  });
  
  // Check for Winner
  function checkWinner() {
    const winPatterns = [
      [[0, 0], [0, 1], [0, 2]], // Rows
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // Columns
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // Diagonals
      [[0, 2], [1, 1], [2, 0]],
    ];
    
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
        alert(`Player ${board[a[0]][a[1]]} wins!`);
        return;
      }
    }
  
    if (board.flat().every(cell => cell !== null)) {
      alert("It's a draw!");
    }
  }
  