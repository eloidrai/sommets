var map = L.map('mapid').setView([46.0, 1], 5);

L.tileLayer('https://b.tile.opentopomap.org/{z}/{x}/{y}.png	', {
    attribution: 'OpenTopoMap'
}).addTo(map);

for (const sommet of sommets) {
    const m = L.marker([sommet[1], sommet[2]]).addTo(map);
    m.bindPopup(L.popup().setContent(`<strong>${sommet[6]}</strong> - ${sommet[7]}
<em>${sommet[8]}</em>`))

}