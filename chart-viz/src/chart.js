/**
 * See https://code.tutsplus.com/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197
 */

export const draw = (data) => {
    
    if (document.querySelector('canvas')) {
        var oldCanv = document.querySelector('canvas');
        oldCanv.parentNode.removeChild(oldCanv);
    }

    // create and add the canvas
    var canvasElement = document.createElement('canvas');
    canvasElement.id = 'heroesChart';
    document.body.appendChild(canvasElement);
 
    //var rowData = data.tables.DEFAULT;
    var ctx = canvasElement.getContext('2d');

    // clear the canvas.
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // set the canvas width and height
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;

    function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, fillColor, strokeColor) {
        ctx.save();
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, strokeColor);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawSlices(options) {
        var totalValue = [...Object.values(options.data)].reduce((a, b) => a + b, 0);
        var radius = Math.min(options.canvas.width / 2, options.canvas.height / 2);
        var colorIndex = 0;
        var startAngle = -Math.PI / 2;
        for (var categ in options.data) {
        var val = options.data[categ];
        var sliceAngle = (2 * Math.PI * val) / totalValue;
        drawPieSlice(
            options.ctx,
            options.canvas.width / 2,
            options.canvas.height / 2,
            radius,
            startAngle,
            startAngle + sliceAngle,
            options.colors[colorIndex % options.colors.length]
        );
        startAngle += sliceAngle;
        colorIndex++;
        }
    }

    var options = {
        ctx: ctx,
        canvas: canvasElement,
        data: {
            "Classical Music": 16,
            "Alternative Rock": 12,
            "Pop": 18,
            "Jazz": 32
        },
        colors: ["#80DEEA", "#FFE082", "#FFAB91", "#CE93D8"]
    }

    drawSlices(options);
};
