var size = 0;
var placement = 'point';

var style_Desplazamiento_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Distancia");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 3.040680 && value <= 91.047525) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(36,59,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 91.047525 && value <= 344.016942) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,227,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 344.016942 && value <= 639.031538) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(163,233,44,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 639.031538 && value <= 2254.555455) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,156,19,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2254.555455 && value <= 7522.628319) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,44,39,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
