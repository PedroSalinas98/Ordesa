var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);
var format_Mapa_forestal_Ordesa_2 = new ol.format.GeoJSON();
var features_Mapa_forestal_Ordesa_2 = format_Mapa_forestal_Ordesa_2.readFeatures(json_Mapa_forestal_Ordesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_forestal_Ordesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_forestal_Ordesa_2.addFeatures(features_Mapa_forestal_Ordesa_2);
var lyr_Mapa_forestal_Ordesa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapa_forestal_Ordesa_2, 
                style: style_Mapa_forestal_Ordesa_2,
                interactive: true,
                title: '<img src="styles/legend/Mapa_forestal_Ordesa_2.png" /> Mapa_forestal_Ordesa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ortoimagen_1.setVisible(true);lyr_Mapa_forestal_Ordesa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ortoimagen_1,lyr_Mapa_forestal_Ordesa_2];
lyr_Mapa_forestal_Ordesa_2.set('fieldAliases', {'Especie dominante': 'Especie dominante', });
lyr_Mapa_forestal_Ordesa_2.set('fieldImages', {'Especie dominante': '', });
lyr_Mapa_forestal_Ordesa_2.set('fieldLabels', {'Especie dominante': 'no label', });
lyr_Mapa_forestal_Ordesa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});