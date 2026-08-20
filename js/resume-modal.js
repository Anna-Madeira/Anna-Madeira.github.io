const RESUME_URL = "https://anna-madeira.github.io/curriculo/";

const resumeModal = document.getElementById("resume-modal");
const resumeFrame = resumeModal?.querySelector("[data-resume-frame]");
const openTriggers = document.querySelectorAll("[data-open-resume]");
const closeTriggers = resumeModal?.querySelectorAll("[data-close-resume]");

function openResumeModal() {
  if (!resumeModal) return;
  if (resumeFrame && !resumeFrame.src) {
    resumeFrame.src = RESUME_URL;
  }
  resumeModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  if (!resumeModal) return;
  resumeModal.classList.remove("is-open");
  document.body.style.overflow = "";
}

openTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openResumeModal);
});

closeTriggers?.forEach((trigger) => {
  trigger.addEventListener("click", closeResumeModal);
});

resumeModal?.addEventListener("click", (event) => {
  if (event.target === resumeModal) closeResumeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resumeModal?.classList.contains("is-open")) {
    closeResumeModal();
  }
});
