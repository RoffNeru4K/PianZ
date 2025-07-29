// sw.js
self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('/api/data')) {
    event.respondWith(new Response(JSON.stringify({
      status: 'success',
      message: 'Ini adalah data dari API palsu',
      data: [
        { id: 1, name: 'Evelyn Laylith', role: 'Demon Queen', world: 'Avalion' },
        { id: 2, name: 'Narrative Singularity', type: 'Multiversal Entity' }
      ]
    }), {
      headers: { 'Content-Type': 'application/json' }
    }));
  }
});
