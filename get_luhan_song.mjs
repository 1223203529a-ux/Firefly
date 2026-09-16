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

async function main() {
  const id = '1325484898';
  const apis = [
    'https://api.i-meto.com/meting/api',
    'https://api.injahow.cn/meting/',
    'https://api.moeyao.cn/meting/',
  ];
  
  for (const apiBase of apis) {
    console.log(`\n=== API: ${apiBase} ===`);
    for (const typ of ['url', 'pic', 'lrc']) {
      const url = `${apiBase}?server=netease&type=${typ}&id=${id}`;
      console.log(`  ${typ}: ${url}`);
      try {
        const r = await fetch(url, 12000);
        const body = r.body.substring(0, 500);
        console.log(`    status=${r.status}, body=${body}`);
      } catch(e) {
        console.log(`    error: ${e.message}`);
      }
    }
  }
}

main();
