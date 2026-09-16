import https from 'https';

function fetch(url, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: timeoutMs }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(timeoutMs, () => req.destroy(new Error('timeout')));
  });
}

async function trySearch(apiBase, searchPath) {
  const url = `${apiBase}${searchPath}`;
  console.log(`Trying: ${url}`);
  try {
    const resp = await fetch(url, 15000);
    if (resp.status !== 200) {
      console.log(`  Status: ${resp.status}, body: ${resp.body.substring(0, 200)}`);
      return null;
    }
    const items = JSON.parse(resp.body);
    if (!Array.isArray(items)) {
      console.log(`  Not array: ${JSON.stringify(items).substring(0, 200)}`);
      return null;
    }
    console.log(`  Found ${items.length} results`);
    for (const item of items) {
      console.log(`  - ${item.title || ''} | ${item.author || ''} | id: ${item.id || ''}`);
    }
    return items;
  } catch(e) {
    console.log(`  Error: ${e.message}`);
    return null;
  }
}

async function main() {
  const keyword = encodeURIComponent('时差');
  
  // Try multiple APIs
  const apis = [
    { base: 'https://api.i-meto.com', path: `/meting/api?server=netease&type=search&id=${keyword}` },
    { base: 'https://api.injahow.cn', path: `/meting/?server=netease&type=search&id=${keyword}` },
    { base: 'https://api.moeyao.cn', path: `/meting/?server=netease&type=search&id=${keyword}` },
  ];
  
  let found = null;
  for (const api of apis) {
    const result = await trySearch(api.base, api.path);
    if (result && result.length > 0) {
      found = result;
      break;
    }
  }
  
  if (!found) {
    console.log('\nAll search APIs failed. Trying known Luhan song IDs...');
    // Try some known IDs for 鹿晗 时差
    // 鹿晗 - 时差 (On NetEase, this song might have ID like 4343434 or similar)
    // Let me try a few common ones
    const knownIds = ['412495041', '4343434', '412495040'];
    for (const id of knownIds) {
      console.log(`\nTrying ID ${id}...`);
      const url = `https://api.i-meto.com/meting/api?server=netease&type=url&id=${id}`;
      try {
        const r = await fetch(url, 10000);
        console.log(`  url: status=${r.status}, body=${r.body.substring(0, 200)}`);
      } catch(e) {
        console.log(`  Error: ${e.message}`);
      }
    }
    return;
  }
  
  // Find Luhan entries
  const luhanSongs = found.filter(s => 
    (s.author || '').includes('鹿晗') || (s.title || '').includes('鹿晗')
  );
  
  if (luhanSongs.length === 0) {
    console.log('\nNo Luhan songs found in results');
    return;
  }
  
  for (const song of luhanSongs) {
    const id = song.id;
    console.log(`\n=== Checking: ${song.title} - ${song.author} (id: ${id}) ===`);
    for (const typ of ['url', 'pic', 'lrc']) {
      const u = `https://api.i-meto.com/meting/api?server=netease&type=${typ}&id=${id}`;
      try {
        const r = await fetch(u, 10000);
        const body = r.body.substring(0, 300);
        console.log(`  ${typ} (${r.status}): ${body}`);
      } catch(e) {
        console.log(`  ${typ}: error=${e.message}`);
      }
    }
  }
}

main();
