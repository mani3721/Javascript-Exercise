if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log(registration, "Registered");
    }).catch(error => {
        console.log(error);
    });
}