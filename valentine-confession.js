$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");

    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abrindo");

        // Memutar musik
        let audio = $("#bg-music")[0]; // Ambil elemen audio
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay tidak diizinkan:", error));
        }
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("fechando");

        // Menghentikan musik jika checkbox tidak dicentang
        let audio = $("#bg-music")[0];
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reset ke awal
        }
    }
});

// Pastikan audio ada di dalam HTML
$("body").append('<audio id="bg-music"><source src="./audio/taylorTMU.mp3" type="audio/mpeg"></audio>');
