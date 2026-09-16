import requests
import json
import sys

search_url = "https://api.i-meto.com/meting/api?server=netease&type=search&id=时差 鹿晗"
try:
    resp = requests.get(search_url, timeout=15)
    data = resp.json()
    print(f"Found {len(data)} results")
    for i, item in enumerate(data):
        title = item.get('title', '')
        author = item.get('author', '')
        song_id = item.get('id', '')
        print(f"\n--- Result {i+1} ---")
        print(f"  title: {title}")
        print(f"  author: {author}")
        print(f"  id: {song_id}")
        if '鹿晗' in author or '鹿晗' in title:
            print(f"  *** LUHAN MATCH ***")
            # Get url/pic/lrc
            for typ in ['url', 'pic', 'lrc']:
                u = f"https://api.i-meto.com/meting/api?server=netease&type={typ}&id={song_id}"
                try:
                    r = requests.get(u, timeout=10, allow_redirects=False)
                    print(f"  {typ}: status={r.status_code}, url={r.text[:200] if r.status_code==200 else 'N/A'}")
                except Exception as e:
                    print(f"  {typ}: error={e}")
except Exception as e:
    print(f"Search error: {e}")
