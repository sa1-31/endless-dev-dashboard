function generate() {
  let tx = Math.floor(Math.random() * 500);
  let days = Math.floor(Math.random() * 100);
  let streak = Math.floor(Math.random() * 30);

  let score = tx + (days * 2) + (streak * 5);

  document.getElementById("tx").innerText = tx;
  document.getElementById("days").innerText = days;
  document.getElementById("streak").innerText = streak;
  document.getElementById("score").innerText = score;
}
