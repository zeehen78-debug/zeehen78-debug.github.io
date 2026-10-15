document.getElementById("year").textContent = new Date().getFullYear();
const shareButton = document.getElementById("shareButton");
const shareStatus = document.getElementById("shareStatus");
shareButton.addEventListener("click", async () => {
  const shareData = { title: document.title, text: "Funny pranks and reactions from SilentNovember", url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      shareStatus.textContent = "Thanks for sharing!";
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
      shareStatus.textContent = "Page link copied. Paste it into a message or Pinterest pin.";
    } else {
      shareStatus.textContent = "Copy this page's address from your browser and share it with friends.";
    }
  } catch (error) {
    if (error.name !== "AbortError") shareStatus.textContent = "You can share this page using your browser's address bar.";
  }
});
