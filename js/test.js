function setupButtons() {
    frontButton.addEventListener('click', () => setCameraTarget(0, objectCenter.y, objectCenter.z + 5));
    backButton.addEventListener('click', () => setCameraTarget(0, objectCenter.y, objectCenter.z - 5));
    leftButton.addEventListener('click', () => setCameraTarget(objectCenter.x - 5, objectCenter.y, 0));
    rightButton.addEventListener('click', () => setCameraTarget(objectCenter.x + 5, objectCenter.y, 0));
    topButton.addEventListener('click', () => setCameraTarget(objectCenter.x, objectCenter.y + 5, 0));
    bottomButton.addEventListener('click', () => setCameraTarget(objectCenter.x, objectCenter.y - 5, 0));
}

function setCameraTarget(x, y, z) {
    targetPosition.set(x, y, z);
    if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(animateCamera);
    }

    c
}

const copyArea = document.querySelectorAll(".copy-area");

copyArea.forEach((area) => {
    area.addEventListener("click", function () {
        const numberToCopy = this.getAttribute('data-number');
        console.log(numberToCopy);

        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = numberToCopy;
        document.body.appendChild(tempTextarea);

        tempTextarea.select();
        document.execCommand('copy');

        document.body.removeChild(tempTextarea);

        alert('복사된 번호: ' + numberToCopy);
    });
});

const scrollContainer = document.querySelectorAll('.scroll-container');
const scrollArea = document.querySelector('html');
scrollContainer.forEach(container => {
    container.addEventListener('wheel', (event) => {
        event.preventDefault();

        if (event.deltaY > 0) {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                scrollArea.scrollTop += event.deltaY;
            } else {
                container.scrollLeft += event.deltaY;
            }
        } else {
            if (container.scrollLeft <= 0) {
                scrollArea.scrollTop += event.deltaY;
            } else {
                container.scrollLeft += event.deltaY;
            }
        }
    });
})