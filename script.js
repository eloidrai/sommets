const map = L.map('mapid').setView([46.0, 1], 5);
const minElevationElement = document.querySelector('input[type="range"]');

L.tileLayer('https://b.tile.opentopomap.org/{z}/{x}/{y}.png	', {
    attribution: 'OpenTopoMap'
}).addTo(map);

class Summit {
    constructor(data) {
        const marker = L.marker([data[2], data[3]]).addTo(map);
        marker.bindPopup(L.popup().setContent(`<strong>${data[9]}</strong> - ${data[13]}<br/><em>${data[14]}</em>`));
        this.marker = marker;
        this.elevation = +data[4];
        this.relativeElevation = +data[5];
    }
}

const summits = summitsList.map(data => new Summit(data))

function loadMarkers (minElevation) {
    for (const summit of summits) {
        if (summit.elevation < minElevation) {
            summit.marker.remove();
        } else {
            summit.marker.addTo(map);
        }
    }
}

loadMarkers(0)

minElevationElement.onmousemove = e => {
    loadMarkers(+e.currentTarget.value);
    document.querySelector("#min-elevation-display").innerText = `${e.currentTarget.value} m`;
}
