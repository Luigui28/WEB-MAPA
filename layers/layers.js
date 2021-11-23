var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sanmartin_limite_provincia_1 = new ol.format.GeoJSON();
var features_sanmartin_limite_provincia_1 = format_sanmartin_limite_provincia_1.readFeatures(json_sanmartin_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sanmartin_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sanmartin_limite_provincia_1.addFeatures(features_sanmartin_limite_provincia_1);
var lyr_sanmartin_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sanmartin_limite_provincia_1, 
                style: style_sanmartin_limite_provincia_1,
                interactive: true,
    title: 'sanmartin_limite_provincia<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_0.png" /> BELLAVISTA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_1.png" /> EL DORADO<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_2.png" /> HUALLAGA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_3.png" /> LAMAS<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_4.png" /> MARISCAL CACERES<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_5.png" /> MOYOBAMBA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_6.png" /> PICOTA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_7.png" /> RIOJA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_8.png" /> SAN MARTIN<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_9.png" /> TOCACHE<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_10.png" /> <br />'
        });
var format_sanmartin_sitios_arqueologicos_2 = new ol.format.GeoJSON();
var features_sanmartin_sitios_arqueologicos_2 = format_sanmartin_sitios_arqueologicos_2.readFeatures(json_sanmartin_sitios_arqueologicos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sanmartin_sitios_arqueologicos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sanmartin_sitios_arqueologicos_2.addFeatures(features_sanmartin_sitios_arqueologicos_2);
var lyr_sanmartin_sitios_arqueologicos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sanmartin_sitios_arqueologicos_2, 
                style: style_sanmartin_sitios_arqueologicos_2,
                interactive: true,
    title: 'sanmartin_sitios_arqueologicos<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_0.png" /> bellavista<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_1.png" /> el dorado<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_2.png" /> lamas<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_3.png" /> mariscal caceres<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_4.png" /> mariscal cáceres<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_5.png" /> moyobamba<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_6.png" /> picota<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_7.png" /> rioja<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_8.png" /> san martin<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_9.png" /> san martín<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_10.png" /> tocache<br />\
    <img src="styles/legend/sanmartin_sitios_arqueologicos_2_11.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sanmartin_limite_provincia_1.setVisible(true);lyr_sanmartin_sitios_arqueologicos_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sanmartin_limite_provincia_1,lyr_sanmartin_sitios_arqueologicos_2];
lyr_sanmartin_limite_provincia_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'CCPP': 'CCPP', 'NOMBPROV': 'NOMBPROV', 'CAPITAL': 'CAPITAL', 'IDPROV': 'IDPROV', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_sanmartin_sitios_arqueologicos_2.set('fieldAliases', {'Dpto': 'Dpto', 'Prov': 'Prov', 'Dist': 'Dist', 'Nombre': 'Nombre', 'Fuente': 'Fuente', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_sanmartin_limite_provincia_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'CCPP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'CAPITAL': 'TextEdit', 'IDPROV': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_sanmartin_sitios_arqueologicos_2.set('fieldImages', {'Dpto': 'TextEdit', 'Prov': 'TextEdit', 'Dist': 'TextEdit', 'Nombre': 'TextEdit', 'Fuente': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_sanmartin_limite_provincia_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'CCDD': 'no label', 'NOMBDEP': 'no label', 'CCPP': 'no label', 'NOMBPROV': 'no label', 'CAPITAL': 'no label', 'IDPROV': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_sanmartin_sitios_arqueologicos_2.set('fieldLabels', {'Dpto': 'no label', 'Prov': 'no label', 'Dist': 'no label', 'Nombre': 'no label', 'Fuente': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_sanmartin_sitios_arqueologicos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});