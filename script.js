document.addEventListener('DOMContentLoaded', () => {
  const moodSelector = document.querySelector('.mood-selector');
  const moodLog = document.getElementById('mood-log');

  // Load past moods
  const moods = JSON.parse(localStorage.getItem('moods')) || [];

  // Display past moods
  function displayMoods() {
      moodLog.innerHTML = moods.map((mood, index) => `
          <div class="mood-entry">
              <span>${mood.date}</span>
              <span>${mood.mood}</span>
          </div>
      `).join('');
  }

  displayMoods();

  // Add new mood
  moodSelector.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
          const selectedMood = e.target.getAttribute('data-mood');
          const date = new Date().toLocaleDateString();

          moods.push({ date, mood: selectedMood });
          localStorage.setItem('moods', JSON.stringify(moods));
          displayMoods();
      }
  });
});