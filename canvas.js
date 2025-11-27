document.querySelectorAll(".drawingX").forEach(canvas => {
    const ctx = canvas.getContext("2d");

    function fixResolution() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    fixResolution();
    window.addEventListener("resize", fixResolution);

    // lines from corners
    function drawLinesTo(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);

        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(x, y);

        ctx.moveTo(0, canvas.height);
        ctx.lineTo(x, y);

        ctx.moveTo(canvas.width, canvas.height);
        ctx.lineTo(x, y);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // mouse move listener
    canvas.addEventListener("mousemove", event => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        drawLinesTo(x, y);
    });

    // clear lines
    canvas.addEventListener("mouseleave", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});
