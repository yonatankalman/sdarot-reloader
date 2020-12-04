const interval = setInterval(() => {
    const selectedEpisode = document.getElementById('episode').querySelector('.active')
    const isAfterLoadVisible = !document.getElementById('afterLoad').classList.contains('hidden')
    if (document.querySelectorAll('.err').length) {
        selectedEpisode.click()
    }

    if (isAfterLoadVisible) {
        clearInterval(interval)
    }
}, 1000)
