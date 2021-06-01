var map = L.map('mapid').setView([46.0, 1], 5);

L.tileLayer('https://b.tile.opentopomap.org/{z}/{x}/{y}.png	', {
    attribution: 'OpenTopoMap'
}).addTo(map);

for (const sommet of sommets) {
    const m = L.marker([sommet[2], sommet[3]]).addTo(map);
    m.bindPopup(L.popup().setContent(`<strong>${sommet[9]}</strong> - ${sommet[13]}<br/><em>${sommet[14]}</em>`))

}
