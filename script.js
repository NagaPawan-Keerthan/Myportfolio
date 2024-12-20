// Modal functionality with smooth transition
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.classList.remove('hide');
    modal.classList.add('show');
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Ensure smooth close
  }
  
  // Close modal if clicked outside
  window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target == modal) {
        closeModal(modal.id);
      }
    });
  };

  function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-container');
    const toggleButton = document.getElementById('chatbot-toggle');
    
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
        toggleButton.textContent = '✖ Close Chat';
    } else {
        chatbot.style.display = 'none';
        toggleButton.textContent = '🤖 Chat with Me';
    }
}
