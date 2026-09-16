import https from 'https';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function main() {
  const searchUrl = 'https://api.i-meto.com/meting/api?server=netease&type=search&id=时差 鹿晗';
  try {
    const resp = await fetch(searchUrl);
    const items = JSON.parse(resp.body);
    console.log(`Found ${items.length} results`);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const title = item.title || '';
      const author = item.author || '';
      const id = item.id || '';
      const isLuhan = author.includes('鹿晗') || title.includes('鹿晗');
      console.log(`\n--- Result ${i+1} ---`);
      console.log(`  title: ${title}`);
      console.log(`  author: ${author}`);
      console.log(`  id: ${id}`);
      if (isLuhan) {
        console.log(`  *** LUHAN MATCH ***`);
        for (const typ of ['url', 'pic', 'lrc']) {
          const u = `https://api.i-meto.com/meting/api?server=netease&type=${typ}&id=${id}`;
          try {
            const r = await fetch(u);
            const bodySnippet = r.body.substring(0, 200);
            console.log(`  ${typ}: status=${r.status}, body=${bodySnippet}`);
          } catch(e) {
            console.log(`  ${typ}: error=${e.message}`);
          }
        }
      }
    }
  } catch(e) {
    console.error('Search error:', e.message);
  }
}

main();
