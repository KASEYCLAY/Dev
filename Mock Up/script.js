let currentFeature = 0; // Start from the welcome page

function showNextFeature(featureNumber) {
    const currentFeatureElement = document.getElementById(`feature-${currentFeature}`);
    const nextFeatureElement = document.getElementById(`feature-${featureNumber}`);
    const welcomePage = document.getElementById("welcome-page");

    if (currentFeature === 0) {
        // Hide welcome page and show the first feature
        welcomePage.style.display = "none";
        nextFeatureElement.style.display = "block";
    } else {
        // Hide the current feature and show the next feature
        currentFeatureElement.style.display = "none";
        nextFeatureElement.style.display = "block";
    }

    // If we're navigating to Feature 1, start the video and disable Next button
    if (featureNumber === 1) {
        const videoElement = document.getElementById('feature-1-video');
        const nextButton = document.querySelector('#feature-1 .next-btn');
        
        if (videoElement) {
            videoElement.style.display = "block"; // Ensure video is visible in Feature 1
            videoElement.play(); // Play the video when Feature 1 is shown
            nextButton.disabled = true; // Disable the Next button until the video is finished

            // When the video finishes, enable the Next button
            videoElement.onended = function() {
                nextButton.disabled = false; // Enable the Next button after the video ends
            };
        }
    } else {
        // If we're leaving Feature 1, stop the video
        const videoElement = document.getElementById('feature-1-video');
        if (videoElement) {
            videoElement.style.display = "none"; // Hide video when leaving Feature 1
            videoElement.pause(); // Pause the video
            videoElement.currentTime = 0; // Reset the video to the start
        }
    }

    // Update the current feature number
    currentFeature = featureNumber;
}

function showPreviousFeature(featureNumber) {
    const currentFeatureElement = document.getElementById(`feature-${currentFeature}`);
    const previousFeatureElement = document.getElementById(`feature-${featureNumber}`);

    // Hide the current feature and show the previous feature
    currentFeatureElement.style.display = "none";
    previousFeatureElement.style.display = "block";

    // If we're navigating back to Feature 1, reset the video
    if (featureNumber === 1) {
        const videoElement = document.getElementById('feature-1-video');
        const nextButton = document.querySelector('#feature-1 .next-btn');
        if (videoElement) {
            videoElement.style.display = "block"; // Ensure video is visible again
            videoElement.currentTime = 0; // Reset the video to the start
            videoElement.play(); // Play the video again from the start
            nextButton.disabled = true; // Disable the Next button again

            // When the video finishes, enable the Next button
            videoElement.onended = function() {
                nextButton.disabled = false; // Enable the Next button after the video ends
            };
        }
    } else {
        // If we're leaving Feature 1, stop the video
        const videoElement = document.getElementById('feature-1-video');
        if (videoElement) {
            videoElement.style.display = "none"; // Hide video when leaving Feature 1
            videoElement.pause(); // Pause the video
            videoElement.currentTime = 0; // Reset the video to the start
        }
    }

    // Update the current feature number
    currentFeature = featureNumber;
}

function finishOnboarding() {
    alert('You have completed the onboarding process!');
    // Optionally, redirect or perform other actions after the user finishes the onboarding
}
