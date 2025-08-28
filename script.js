// בוחרים את האלמנטים שאנחנו רוצים לעבוד איתם
const btn = document.getElementById('btn');
const message = document.getElementById('message');

// מאזינים ללחיצה על הכפתור
btn.addEventListener('click', function() {
  // משנים את התוכן של הפסקה
  message.textContent = "לחצת על הכפתור! 👏";
});
const greetBtn = document.getElementById('greet');
const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

greetBtn?.addEventListener('click', () => {
  const name = nameInput?.value.trim() || "Friend";
  greeting.textContent = `Hello, ${name}! 🌟`;
});