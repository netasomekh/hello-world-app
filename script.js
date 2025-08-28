// בוחרים את האלמנטים שאנחנו רוצים לעבוד איתם
const btn = document.getElementById('btn');
const message = document.getElementById('message');

// מאזינים ללחיצה על הכפתור
btn.addEventListener('click', function() {
  // משנים את התוכן של הפסקה
  message.textContent = "לחצת על הכפתור! 👏";
});