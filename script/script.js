setTimeout(() => {
    let alertBoxTop = document.getElementById('top-notification');
    if (alertBoxTop) {
        let alertBT = new bootstrap.Alert(alertBoxTop);
        alertBT.close();
    }
}, 5000);
