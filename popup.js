document.getElementById('council-btn').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://chat.openai.com/g/g-custom-gpt-id' });
});
