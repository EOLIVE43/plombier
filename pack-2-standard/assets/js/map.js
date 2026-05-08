/* ============================================================
   BURANDE PLOMBERIE - MODULE CARTE LEAFLET
   Carte interactive de zone d'intervention
   ============================================================
   Usage HTML :
   <div class="burande-map" data-center-lat="45.2914" data-center-lng="3.3839" data-center-name="Brioude" data-center-cp="43100"></div>
   ============================================================ */

(function() {
  'use strict';

  // === CONSTANTES ===
  const ATELIER = {
    name: 'Vézézoux',
    sub: 'Atelier de Julien',
    lat: 45.4019,
    lng: 3.3331
  };

  // Communes desservies (lat, lng, nom, département, temps depuis Vézézoux)
  const COMMUNES = [
    { name: 'Brioude', lat: 45.2914, lng: 3.3839, dept: '43', time: '15 min', main: false },
    { name: 'Issoire', lat: 45.5439, lng: 3.2492, dept: '63', time: '25 min', main: false },
    { name: 'Sainte-Florine', lat: 45.4006, lng: 3.3197, dept: '43', time: '5 min', main: false },
    { name: 'Vergongheon', lat: 45.3714, lng: 3.3158, dept: '43', time: '7 min', main: false },
    { name: 'Lempdes-sur-Allagnon', lat: 45.3786, lng: 3.2828, dept: '43', time: '10 min', main: false },
    { name: 'Massiac', lat: 45.2475, lng: 3.2014, dept: '15', time: '25 min', main: false },
    { name: 'Lavaudieu', lat: 45.2553, lng: 3.4400, dept: '43', time: '20 min', main: false },
    { name: 'Léotoing', lat: 45.3458, lng: 3.2675, dept: '43', time: '12 min', main: false },
    { name: 'Auzon', lat: 45.3819, lng: 3.3839, dept: '43', time: '8 min', main: false },
    { name: 'Le Broc', lat: 45.5275, lng: 3.2658, dept: '63', time: '22 min', main: false },
    { name: 'Brassac-les-Mines', lat: 45.4017, lng: 3.3225, dept: '63', time: '6 min', main: false },
  ];

  const RAYON_KM = 40;

  // === STYLES MARKERS ===
  function createIcon(L, type, label) {
    const config = {
      atelier: {
        bg: '#1E5FA8',
        size: 36,
        ring: 4,
        ringColor: '#FFFFFF',
        shadowColor: 'rgba(21, 71, 128, 0.35)',
        labelColor: '#154780',
      },
      mainCity: {
        bg: '#E63027',
        size: 32,
        ring: 3,
        ringColor: '#FFFFFF',
        shadowColor: 'rgba(230, 48, 39, 0.45)',
        labelColor: '#C8202E',
      },
      city: {
        bg: '#E63027',
        size: 18,
        ring: 2.5,
        ringColor: '#FFFFFF',
        shadowColor: 'rgba(230, 48, 39, 0.25)',
        labelColor: '#C8202E',
      }
    };
    const c = config[type];
    const labelSize = type === 'atelier' || type === 'mainCity' ? '0.85rem' : '0.75rem';
    const labelWeight = type === 'atelier' || type === 'mainCity' ? '700' : '600';
    
    return L.divIcon({
      className: 'burande-marker burande-marker-' + type,
      html: `<div style="position:relative; display:flex; flex-direction:column; align-items:center;">
        <div style="
          width: ${c.size}px;
          height: ${c.size}px;
          background: ${c.bg};
          border: ${c.ring}px solid ${c.ringColor};
          border-radius: 50%;
          box-shadow: 0 4px 12px ${c.shadowColor}, 0 0 0 1px rgba(0,0,0,0.05);
        "></div>
        ${label ? `<div style="
          margin-top: 4px;
          padding: 3px 8px;
          background: rgba(255,255,255,0.95);
          color: ${c.labelColor};
          font-size: ${labelSize};
          font-weight: ${labelWeight};
          font-family: 'Manrope', sans-serif;
          white-space: nowrap;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          pointer-events: none;
        ">${label}</div>` : ''}
      </div>`,
      iconSize: [c.size + c.ring * 2, c.size + c.ring * 2 + 26],
      iconAnchor: [(c.size + c.ring * 2) / 2, (c.size + c.ring * 2) / 2],
      popupAnchor: [0, -(c.size / 2 + c.ring)]
    });
  }

  // === TUILES OPENSTREETMAP avec style propre ===
  function createTileLayer(L) {
    return L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
      minZoom: 8
    });
  }

  // === INIT D'UNE CARTE ===
  function initMap(container) {
    const L = window.L;
    if (!L) return;

    const centerLat = parseFloat(container.dataset.centerLat) || ATELIER.lat;
    const centerLng = parseFloat(container.dataset.centerLng) || ATELIER.lng;
    const centerName = container.dataset.centerName || null;
    const centerCp = container.dataset.centerCp || '';
    const showAllCities = container.dataset.showAll !== 'false';
    const zoom = parseInt(container.dataset.zoom) || 10;

    // Création de la carte
    const map = L.map(container, {
      center: [centerLat, centerLng],
      zoom: zoom,
      zoomControl: true,
      scrollWheelZoom: false, // évite de capturer le scroll de la page
      attributionControl: true,
      dragging: !L.Browser.mobile, // mobile : pas de drag par défaut (UX scroll)
      tap: false
    });

    createTileLayer(L).addTo(map);

    // Cercle d'intervention autour de Vézézoux
    L.circle([ATELIER.lat, ATELIER.lng], {
      radius: RAYON_KM * 1000,
      color: '#E63027',
      weight: 2,
      opacity: 0.6,
      fillColor: '#E63027',
      fillOpacity: 0.06,
      dashArray: '8, 6'
    }).addTo(map);

    // Marker atelier (Vézézoux)
    L.marker([ATELIER.lat, ATELIER.lng], { icon: createIcon(L, 'atelier', 'Vézézoux') })
      .addTo(map)
      .bindPopup(`
        <div style="font-family:'Manrope',sans-serif;min-width:160px;">
          <div style="font-family:'Fraunces',serif;font-weight:600;color:#154780;font-size:1.05rem;margin-bottom:2px;">Vézézoux</div>
          <div style="font-size:0.85rem;color:#6B7280;">Atelier de Julien Burande</div>
          <div style="font-size:0.75rem;color:#1E5FA8;margin-top:6px;font-weight:600;">📍 Mon point de départ</div>
        </div>
      `);

    // Markers communes
    if (showAllCities) {
      COMMUNES.forEach(c => {
        const isMain = centerName && c.name.toLowerCase().includes(centerName.toLowerCase());
        const icon = createIcon(L, isMain ? 'mainCity' : 'city', c.name);
        L.marker([c.lat, c.lng], { icon: icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:'Manrope',sans-serif;min-width:140px;">
              <div style="font-family:'Fraunces',serif;font-weight:600;color:#154780;font-size:1rem;margin-bottom:2px;">${c.name}</div>
              <div style="font-size:0.8rem;color:#6B7280;">Département ${c.dept}</div>
              <div style="font-size:0.8rem;color:#E63027;margin-top:4px;font-weight:600;">⏱ ${c.time} de l'atelier</div>
            </div>
          `);
      });
    }

    // Au démarrage : afficher la popup de la ville centrale si fournie
    if (centerName) {
      const centerCommune = COMMUNES.find(c =>
        c.name.toLowerCase().includes(centerName.toLowerCase())
      );
      if (centerCommune) {
        setTimeout(() => {
          map.eachLayer(layer => {
            if (layer instanceof L.Marker && layer.getLatLng().lat === centerCommune.lat) {
              layer.openPopup();
            }
          });
        }, 800);
      }
    }
  }

  // === LAZY LOADING avec IntersectionObserver ===
  function setupLazyLoad() {
    const containers = document.querySelectorAll('.burande-map');
    if (containers.length === 0) return;

    const loadLeaflet = () => {
      return new Promise((resolve) => {
        if (window.L) { resolve(); return; }

        // CSS Leaflet
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        css.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        css.crossOrigin = '';
        document.head.appendChild(css);

        // JS Leaflet
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadLeaflet().then(() => {
            initMap(entry.target);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' });

    containers.forEach(c => observer.observe(c));
  }

  // === Init ===
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyLoad);
  } else {
    setupLazyLoad();
  }

})();
