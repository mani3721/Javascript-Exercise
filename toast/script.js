const btn = document.querySelector('.btn-toast');
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector('.close-icon');
const progressBar = document.querySelector(".progress");

let progress = 100;
let intervalTimer;

btn.addEventListener('click', () => {
    toast.classList.add('active');
    clearInterval(intervalTimer)
    updateProgress();
});

function setProperty(progress) {
    progressBar.setAttribute("aria-value", progress);
    progressBar.style.setProperty("--progress", progress + '%');
}

function updateProgress() {
    progressBar.setAttribute("aria-busy", true);
    setProperty(progress);

    intervalTimer = setInterval(() => {
        progress -= 5;
        setProperty(progress);
        if (progress === 0) {
            progressBar.setAttribute("aria-busy", false);
            clearInterval(intervalTimer);
            toast.classList.remove('active');
        }
    }, 500);
}
