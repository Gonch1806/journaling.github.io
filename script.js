document.addEventListener('DOMContentLoaded', function() {
    const currentDate = document.getElementById('current-date');
    const today = new Date();

    const formattedDate = today.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    currentDate.textContent = formattedDate;
});
