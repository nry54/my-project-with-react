let typedInstances = [];

function initTyped() {
  const typedElements = document.querySelectorAll("span.typed");

  typedElements.forEach((element) => {
    const items = element.dataset.typeItems
      ? element.dataset.typeItems.split(",").map((item) => item.trim())
      : ["Default text"];
    let instance = {
      element: element,
      texts: items,
      currentTextIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseTime: 1500,
    };

    typedInstances.push(instance);
    typeText(instance);
  });
}

function typeText(instance) {
  const { element, texts, currentTextIndex, currentCharIndex, isDeleting } =
    instance;
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    // Remove char
    element.textContent = currentText.substring(0, currentCharIndex - 1);
    instance.currentCharIndex--;
    instance.typingSpeed = instance.deletingSpeed;
  } else {
    // Add char
    element.textContent = currentText.substring(0, currentCharIndex + 1);
    instance.currentCharIndex++;
    instance.typingSpeed = 100;
  }

  let delay = instance.typingSpeed;

  if (!isDeleting && currentCharIndex === currentText.length) {
    // End of typing current text
    delay = instance.pauseTime;
    instance.isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    // End of deleting current text
    instance.isDeleting = false;
    instance.currentTextIndex =
      (instance.currentTextIndex + 1) % instance.texts.length;
  }

  setTimeout(() => typeText(instance), delay);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTyped);
} else {
  initTyped();
}

// Re-initialize when page content changes (for SPA navigation)
window.addEventListener("load", initTyped);
