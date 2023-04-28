<template>
    <div id="mapPage" data-aos="zoom-out" class="scrollbar-hide">
        <div class="form q-px-xl q-mt-lg">
            <q-input bg-color="white" color="white" outlined standout rounded placeholder="Cari lokasi bangunan...">
                <template v-slot:prepend>
                <q-icon name="place" />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>

            </q-input>
        </div>
        <div id="map"></div>
    </div>
</template>
<script setup>
    import {L} from 'boot/leaflet';
    import { onMounted } from 'vue';

    onMounted(()=>{
        function onLocationFound(e) {
            var radius = e.accuracy;

            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius).addTo(map);
        }
        let map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        map.locate({setView: true, maxZoom: 16});
        map.on('locationfound', onLocationFound);
        
    })

    

</script>
<style lang="scss">
    #mapPage {
        #map{
            height: 100vh;
            width: 100vw;
        }
        .form {
            position:absolute;
            z-index: 10000;
            width: 100vw;
        }
        .search {
            color: black;
        }
    }
</style>