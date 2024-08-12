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