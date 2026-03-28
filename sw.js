self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// Nessun caching: l'app è sempre online
