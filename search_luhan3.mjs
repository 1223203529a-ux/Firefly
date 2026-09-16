import https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxy = 'http://127.0.0.1:7897';
const agent = new HttpsProxyAgent(proxy);

function fetch(url, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { agent, timeout: timeoutMs }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(timeoutMs, () => req.destroy(new Error('timeout')));
  });
}

async function main() {
  const keyword = encodeURIComponent('时差 鹿晗');
  const searchUrl = `https://api.i-meto.com/meting/api?server=netease&type=search&id=${keyword}`;
  console.log('Searching via proxy...');
  try {
    const resp = await fetch(searchUrl, 20000);
    const items = JSON.parse(resp.body);
    console.log(`Found ${items.length} results\n`);
    for (const item of items) {
      const title = item.title || '';
      const author = item.author || '';
      const id = item.id || '';
      const isLuhan = author.includes('鹿晗') || title.includes('鹿晗');
      console.log(`title: ${title} | author: ${author} | id: ${id}${isLuhan ? ' *** LUHAN ***' : ''}`);
    }
    for (const item of items) {
      const author = item.author || '';
      const title = item.title || '';
      if (!author.includes('鹿晗') && !title.includes('鹿晗')) continue;
      const id = item.id;
      console.log(`\n=== Checking ID ${id} ===`);
      for (const typ of ['url', 'pic', 'lrc']) {
        const u = `https://api.i-meto.com/meting/api?server=netease&type=${typ}&id=${id}`;
        try {
          const r = await fetch(u, 15000);
          const body = r.body.substring(0, 300);
          console.log(`  ${typ} (${r.status}): ${body}`);
        } catch(e) {
          console.log(`  ${typ}: error=${e.message}`);
        }
      }
    }
  } catch(e) {
    console.error('Error:', e.message);
  }
}

main();
