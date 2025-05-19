var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2,
maxResolution:168.0267969135718,
 
                style: style_Municipios_2,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var format_PerimetroABA_3 = new ol.format.GeoJSON();
var features_PerimetroABA_3 = format_PerimetroABA_3.readFeatures(json_PerimetroABA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_3.addFeatures(features_PerimetroABA_3);
var lyr_PerimetroABA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_3, 
                style: style_PerimetroABA_3,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_3.png" /> Perimetro ABA'
            });
var format_PerimetroAEsFinal_4 = new ol.format.GeoJSON();
var features_PerimetroAEsFinal_4 = format_PerimetroAEsFinal_4.readFeatures(json_PerimetroAEsFinal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroAEsFinal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroAEsFinal_4.addFeatures(features_PerimetroAEsFinal_4);
var lyr_PerimetroAEsFinal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroAEsFinal_4, 
                style: style_PerimetroAEsFinal_4,
                popuplayertitle: 'Perimetro AEs Final',
                interactive: false,
                title: '<img src="styles/legend/PerimetroAEsFinal_4.png" /> Perimetro AEs Final'
            });
var format_PerimetroAEsModificado_5 = new ol.format.GeoJSON();
var features_PerimetroAEsModificado_5 = format_PerimetroAEsModificado_5.readFeatures(json_PerimetroAEsModificado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroAEsModificado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroAEsModificado_5.addFeatures(features_PerimetroAEsModificado_5);
var lyr_PerimetroAEsModificado_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroAEsModificado_5, 
                style: style_PerimetroAEsModificado_5,
                popuplayertitle: 'Perimetro AEs Modificado',
                interactive: false,
                title: '<img src="styles/legend/PerimetroAEsModificado_5.png" /> Perimetro AEs Modificado'
            });
var format_PerimetroAGs_6 = new ol.format.GeoJSON();
var features_PerimetroAGs_6 = format_PerimetroAGs_6.readFeatures(json_PerimetroAGs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroAGs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroAGs_6.addFeatures(features_PerimetroAGs_6);
var lyr_PerimetroAGs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroAGs_6, 
                style: style_PerimetroAGs_6,
                popuplayertitle: 'Perimetro AGs',
                interactive: false,
                title: '<img src="styles/legend/PerimetroAGs_6.png" /> Perimetro AGs'
            });
var format_INRAParcelas_7 = new ol.format.GeoJSON();
var features_INRAParcelas_7 = format_INRAParcelas_7.readFeatures(json_INRAParcelas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INRAParcelas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INRAParcelas_7.addFeatures(features_INRAParcelas_7);
var lyr_INRAParcelas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INRAParcelas_7, 
                style: style_INRAParcelas_7,
                popuplayertitle: 'INRA Parcelas',
                interactive: true,
    title: 'INRA Parcelas<br />\
    <img src="styles/legend/INRAParcelas_7_0.png" /> No Coincide<br />\
    <img src="styles/legend/INRAParcelas_7_1.png" /> Si Coincide<br />' });
var format_UPASProcedencia_8 = new ol.format.GeoJSON();
var features_UPASProcedencia_8 = format_UPASProcedencia_8.readFeatures(json_UPASProcedencia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPASProcedencia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPASProcedencia_8.addFeatures(features_UPASProcedencia_8);
cluster_UPASProcedencia_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPASProcedencia_8
});
var lyr_UPASProcedencia_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPASProcedencia_8, 
                style: style_UPASProcedencia_8,
                popuplayertitle: 'UPAS Procedencia',
                interactive: true,
    title: 'UPAS Procedencia<br />\
    <img src="styles/legend/UPASProcedencia_8_0.png" /> Nuevos - Operativo Campo<br />\
    <img src="styles/legend/UPASProcedencia_8_1.png" /> RA<br />' });
var format_Desplazamiento_9 = new ol.format.GeoJSON();
var features_Desplazamiento_9 = format_Desplazamiento_9.readFeatures(json_Desplazamiento_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desplazamiento_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desplazamiento_9.addFeatures(features_Desplazamiento_9);
var lyr_Desplazamiento_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desplazamiento_9, 
                style: style_Desplazamiento_9,
                popuplayertitle: 'Desplazamiento',
                interactive: true,
    title: 'Desplazamiento<br />\
    <img src="styles/legend/Desplazamiento_9_0.png" /> Muy Bajo (3 m. - 91 m.)<br />\
    <img src="styles/legend/Desplazamiento_9_1.png" /> Bajo (91 m. - 344 m.)<br />\
    <img src="styles/legend/Desplazamiento_9_2.png" /> Medio (344 m. - 639 m.)<br />\
    <img src="styles/legend/Desplazamiento_9_3.png" /> Alto (639 m. - 2.255 m.)<br />\
    <img src="styles/legend/Desplazamiento_9_4.png" /> Muy Alto (2.255 m. - 7.523 m.)<br />' });
var format_UPAMovidoFinal_10 = new ol.format.GeoJSON();
var features_UPAMovidoFinal_10 = format_UPAMovidoFinal_10.readFeatures(json_UPAMovidoFinal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPAMovidoFinal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPAMovidoFinal_10.addFeatures(features_UPAMovidoFinal_10);
cluster_UPAMovidoFinal_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPAMovidoFinal_10
});
var lyr_UPAMovidoFinal_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPAMovidoFinal_10, 
                style: style_UPAMovidoFinal_10,
                popuplayertitle: 'UPA Movido Final',
                interactive: true,
                title: '<img src="styles/legend/UPAMovidoFinal_10.png" /> UPA Movido Final'
            });
var format_UPASMovidoInicial3991_11 = new ol.format.GeoJSON();
var features_UPASMovidoInicial3991_11 = format_UPASMovidoInicial3991_11.readFeatures(json_UPASMovidoInicial3991_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPASMovidoInicial3991_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPASMovidoInicial3991_11.addFeatures(features_UPASMovidoInicial3991_11);
cluster_UPASMovidoInicial3991_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPASMovidoInicial3991_11
});
var lyr_UPASMovidoInicial3991_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPASMovidoInicial3991_11, 
                style: style_UPASMovidoInicial3991_11,
                popuplayertitle: 'UPAS Movido Inicial (39.91 %)',
                interactive: true,
                title: '<img src="styles/legend/UPASMovidoInicial3991_11.png" /> UPAS Movido Inicial (39.91 %)'
            });
var format_UPASNoMovidos1674_12 = new ol.format.GeoJSON();
var features_UPASNoMovidos1674_12 = format_UPASNoMovidos1674_12.readFeatures(json_UPASNoMovidos1674_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPASNoMovidos1674_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPASNoMovidos1674_12.addFeatures(features_UPASNoMovidos1674_12);
cluster_UPASNoMovidos1674_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPASNoMovidos1674_12
});
var lyr_UPASNoMovidos1674_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPASNoMovidos1674_12, 
                style: style_UPASNoMovidos1674_12,
                popuplayertitle: 'UPAS No Movidos (16.74 %)',
                interactive: true,
                title: '<img src="styles/legend/UPASNoMovidos1674_12.png" /> UPAS No Movidos (16.74 %)'
            });
var format_UPASNuevos4340_13 = new ol.format.GeoJSON();
var features_UPASNuevos4340_13 = format_UPASNuevos4340_13.readFeatures(json_UPASNuevos4340_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPASNuevos4340_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPASNuevos4340_13.addFeatures(features_UPASNuevos4340_13);
cluster_UPASNuevos4340_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPASNuevos4340_13
});
var lyr_UPASNuevos4340_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPASNuevos4340_13, 
                style: style_UPASNuevos4340_13,
                popuplayertitle: 'UPAS Nuevos (43.40 %)',
                interactive: true,
                title: '<img src="styles/legend/UPASNuevos4340_13.png" /> UPAS Nuevos (43.40 %)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Departamentos_1.setVisible(false);lyr_Municipios_2.setVisible(false);lyr_PerimetroABA_3.setVisible(false);lyr_PerimetroAEsFinal_4.setVisible(false);lyr_PerimetroAEsModificado_5.setVisible(false);lyr_PerimetroAGs_6.setVisible(false);lyr_INRAParcelas_7.setVisible(false);lyr_UPASProcedencia_8.setVisible(false);lyr_Desplazamiento_9.setVisible(false);lyr_UPAMovidoFinal_10.setVisible(false);lyr_UPASMovidoInicial3991_11.setVisible(false);lyr_UPASNoMovidos1674_12.setVisible(false);lyr_UPASNuevos4340_13.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Departamentos_1,lyr_Municipios_2,lyr_PerimetroABA_3,lyr_PerimetroAEsFinal_4,lyr_PerimetroAEsModificado_5,lyr_PerimetroAGs_6,lyr_INRAParcelas_7,lyr_UPASProcedencia_8,lyr_Desplazamiento_9,lyr_UPAMovidoFinal_10,lyr_UPASMovidoInicial3991_11,lyr_UPASNoMovidos1674_12,lyr_UPASNuevos4340_13];
lyr_Departamentos_1.set('fieldAliases', {'departamen': 'departamen', });
lyr_Municipios_2.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', 'visor': 'visor', });
lyr_PerimetroABA_3.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', });
lyr_PerimetroAEsFinal_4.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ae': 'upa_13_ae', 'sup13ha_ae': 'sup13ha_ae', 'pre_ace_ae': 'pre_ace_ae', 'n_aba_ae': 'n_aba_ae', 'n_com_ae': 'n_com_ae', 'n_est_ae': 'n_est_ae', 'n_tco_ae': 'n_tco_ae', 'viv_12_ae': 'viv_12_ae', 'viv_ac_ae': 'viv_ac_ae', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'n_cuest': 'n_cuest', 'n_empadro': 'n_empadro', 'CODAE': 'CODAE', });
lyr_PerimetroAEsModificado_5.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Cod AG': 'Cod AG', 'Cod AE': 'Cod AE', 'CodAE': 'CodAE', });
lyr_PerimetroAGs_6.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ag': 'upa_13_ag', 'sup13ha_ag': 'sup13ha_ag', 'pre_ace_ag': 'pre_ace_ag', 'viv_12_ag': 'viv_12_ag', 'viv_ace_ag': 'viv_ace_ag', 'n_aba_ag': 'n_aba_ag', 'n_com_ag': 'n_com_ag', 'n_est_ag': 'n_est_ag', 'n_tco_ag': 'n_tco_ag', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'c_op': 'c_op', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'CodAG': 'CodAG', });
lyr_INRAParcelas_7.set('fieldAliases', {'N. Doc.': 'N. Doc.', 'Parcela': 'Parcela', 'ClaseTitul': 'ClaseTitul', 'Califica.': 'Califica.', 'Clasifica.': 'Clasifica.', 'Nombre': 'Nombre', 'Coincide': 'Coincide', });
lyr_UPASProcedencia_8.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Productor': 'Productor', 'Procedenci': 'Procedenci', 'Valida_Cam': 'Valida_Cam', 'Prod/Estab': 'Prod/Estab', 'Proced_Fin': 'Proced_Fin', 'Proced': 'Proced', });
lyr_Desplazamiento_9.set('fieldAliases', {'Productor': 'Productor', 'Distancia': 'Distancia', });
lyr_UPAMovidoFinal_10.set('fieldAliases', {'Depto': 'Depto', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_UPASMovidoInicial3991_11.set('fieldAliases', {'Depto': 'Depto', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_UPASNoMovidos1674_12.set('fieldAliases', {'Depto': 'Depto', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_UPASNuevos4340_13.set('fieldAliases', {'Depto': 'Depto', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_Departamentos_1.set('fieldImages', {'departamen': 'TextEdit', });
lyr_Municipios_2.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', 'visor': '', });
lyr_PerimetroABA_3.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', });
lyr_PerimetroAEsFinal_4.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ae': 'TextEdit', 'sup13ha_ae': 'TextEdit', 'pre_ace_ae': 'TextEdit', 'n_aba_ae': 'TextEdit', 'n_com_ae': 'TextEdit', 'n_est_ae': 'TextEdit', 'n_tco_ae': 'TextEdit', 'viv_12_ae': 'TextEdit', 'viv_ac_ae': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'n_cuest': 'TextEdit', 'n_empadro': 'TextEdit', 'CODAE': 'Range', });
lyr_PerimetroAEsModificado_5.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Cod AG': 'TextEdit', 'Cod AE': 'TextEdit', 'CodAE': 'TextEdit', });
lyr_PerimetroAGs_6.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ag': 'TextEdit', 'sup13ha_ag': 'TextEdit', 'pre_ace_ag': 'TextEdit', 'viv_12_ag': 'TextEdit', 'viv_ace_ag': 'TextEdit', 'n_aba_ag': 'TextEdit', 'n_com_ag': 'TextEdit', 'n_est_ag': 'TextEdit', 'n_tco_ag': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'c_op': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'CodAG': 'TextEdit', });
lyr_INRAParcelas_7.set('fieldImages', {'N. Doc.': 'TextEdit', 'Parcela': 'TextEdit', 'ClaseTitul': 'TextEdit', 'Califica.': 'TextEdit', 'Clasifica.': 'TextEdit', 'Nombre': 'TextEdit', 'Coincide': 'TextEdit', });
lyr_UPASProcedencia_8.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Productor': 'TextEdit', 'Procedenci': 'TextEdit', 'Valida_Cam': 'TextEdit', 'Prod/Estab': 'TextEdit', 'Proced_Fin': 'TextEdit', 'Proced': 'TextEdit', });
lyr_Desplazamiento_9.set('fieldImages', {'Productor': 'TextEdit', 'Distancia': 'TextEdit', });
lyr_UPAMovidoFinal_10.set('fieldImages', {'Depto': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_UPASMovidoInicial3991_11.set('fieldImages', {'Depto': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_UPASNoMovidos1674_12.set('fieldImages', {'Depto': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_UPASNuevos4340_13.set('fieldImages', {'Depto': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'departamen': 'no label', });
lyr_Municipios_2.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', 'visor': 'no label', });
lyr_PerimetroABA_3.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', });
lyr_PerimetroAEsFinal_4.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ae': 'no label', 'sup13ha_ae': 'no label', 'pre_ace_ae': 'no label', 'n_aba_ae': 'no label', 'n_com_ae': 'no label', 'n_est_ae': 'no label', 'n_tco_ae': 'no label', 'viv_12_ae': 'no label', 'viv_ac_ae': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'n_cuest': 'no label', 'n_empadro': 'no label', 'CODAE': 'no label', });
lyr_PerimetroAEsModificado_5.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Cod AG': 'inline label - always visible', 'Cod AE': 'inline label - always visible', 'CodAE': 'no label', });
lyr_PerimetroAGs_6.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ag': 'no label', 'sup13ha_ag': 'no label', 'pre_ace_ag': 'no label', 'viv_12_ag': 'no label', 'viv_ace_ag': 'no label', 'n_aba_ag': 'no label', 'n_com_ag': 'no label', 'n_est_ag': 'no label', 'n_tco_ag': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'c_op': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'CodAG': 'no label', });
lyr_INRAParcelas_7.set('fieldLabels', {'N. Doc.': 'inline label - always visible', 'Parcela': 'inline label - always visible', 'ClaseTitul': 'inline label - always visible', 'Califica.': 'inline label - always visible', 'Clasifica.': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Coincide': 'inline label - always visible', });
lyr_UPASProcedencia_8.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Productor': 'inline label - always visible', 'Procedenci': 'inline label - always visible', 'Valida_Cam': 'inline label - always visible', 'Prod/Estab': 'inline label - always visible', 'Proced_Fin': 'inline label - always visible', 'Proced': 'inline label - always visible', });
lyr_Desplazamiento_9.set('fieldLabels', {'Productor': 'inline label - always visible', 'Distancia': 'inline label - always visible', });
lyr_UPAMovidoFinal_10.set('fieldLabels', {'Depto': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_UPASMovidoInicial3991_11.set('fieldLabels', {'Depto': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_UPASNoMovidos1674_12.set('fieldLabels', {'Depto': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_UPASNuevos4340_13.set('fieldLabels', {'Depto': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_UPASNuevos4340_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});