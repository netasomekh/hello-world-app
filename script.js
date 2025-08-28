// בדיקת טעינה: אם מופיע alert/לוג - הקובץ נטען בהצלחה
console.log("JS loaded ✅");

// בחירת האלמנטים לפי ה-ID שלהם
const greetBtn = document.getElementById('greet');
const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');

// מאזין ללחיצה על הכפתור: קורא את השם מה-input ומציג ברכה
greetBtn.addEventListener('click', () => {
  const name = (nameInput.value || "").trim() || "Friend";
  greeting.textContent = `Hello, ${name}! 🌟`;
});
