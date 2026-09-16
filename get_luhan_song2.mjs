import https from 'https';
import http from 'http';

function fetch(url, timeoutMs = 15000, followRedirects = true, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: timeoutMs }, (res) => {
      if (followRedirects && (res.statusCode === 301 || res.statusCode === 302) && res.headers.location && maxRedirects > 0) {
        const newUrl = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        fetch(newUrl, timeoutMs, followRedirects, maxRedirects - 1).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers, finalUrl: url }));
    });
    req.on('error', reject);
    req.setTimeout(timeoutMs, () => req.destroy(new Error('timeout')));
  });
}

async function main() {
  const id = '1325484898';
  
  // Use moeyao API since it worked for lrc
  const apiBase = 'https://api.moeyao.cn/meting/';
  
  console.log('=== Getting song data via moeyao API ===');
  
  // URL (audio)
  try {
    const r = await fetch(`${apiBase}?server=netease&type=url&id=${id}`, 15000);
    console.log(`\nurl: status=${r.status}`);
    console.log(`  finalUrl: ${r.finalUrl}`);
    console.log(`  body(300): ${r.body.substring(0, 300)}`);
    console.log(`  content-type: ${r.headers['content-type']}`);
    console.log(`  content-length: ${r.headers['content-length']}`);
  } catch(e) {
    console.log(`url error: ${e.message}`);
  }
  
  // PIC (cover)
  try {
    const r = await fetch(`${apiBase}?server=netease&type=pic&id=${id}`, 15000);
    console.log(`\npic: status=${r.status}`);
    console.log(`  finalUrl: ${r.finalUrl}`);
    console.log(`  body(300): ${r.body.substring(0, 300)}`);
    console.log(`  content-type: ${r.headers['content-type']}`);
  } catch(e) {
    console.log(`pic error: ${e.message}`);
  }
  
  // LRC (lyrics)
  try {
    const r = await fetch(`${apiBase}?server=netease&type=lrc&id=${id}`, 15000);
    console.log(`\nlrc: status=${r.status}`);
    console.log(`  body(500): ${r.body.substring(0, 500)}`);
    console.log(`  lrc lines: ${r.body.split('\n').length}`);
  } catch(e) {
    console.log(`lrc error: ${e.message}`);
  }
  
  // Also try injahow for url and pic
  const apiBase2 = 'https://api.injahow.cn/meting/';
  console.log('\n\n=== Also trying injahow API ===');
  
  try {
    const r = await fetch(`${apiBase2}?server=netease&type=url&id=${id}`, 15000);
    console.log(`\nurl: status=${r.status}`);
    console.log(`  finalUrl: ${r.finalUrl}`);
    console.log(`  content-type: ${r.headers['content-type']}`);
    console.log(`  content-length: ${r.headers['content-length']}`);
  } catch(e) {
    console.log(`url error: ${e.message}`);
  }
  
  try {
    const r = await fetch(`${apiBase2}?server=netease&type=pic&id=${id}`, 15000);
    console.log(`\npic: status=${r.status}`);
    console.log(`  finalUrl: ${r.finalUrl}`);
    console.log(`  content-type: ${r.headers['content-type']}`);
  } catch(e) {
    console.log(`pic error: ${e.message}`);
  }
}

main();
