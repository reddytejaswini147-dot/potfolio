// Small blinking cursor effect on the logo — purely decorative.
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 600);
});

// TODO (practice idea): add a function here, commit it on a new branch,
// then open a pull request into main to practice the full workflow.
