import urllib.request
import re
import sys
import os

destinations = [
  ('ooty', 'Ooty'),
  ('chikmagalur', 'Chikmagalur'),
  ('wayanad', 'Wayanad_district'),
  ('hampi', 'Hampi'),
  ('gokarna', 'Gokarna,_Karnataka')
]

dest_dir = os.path.join('public', 'images', 'destinations')

for name, article in destinations:
    try:
        url = f"https://en.wikipedia.org/wiki/{article}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Find the first infobox image or any large thumb image
        match = re.search(r'src="(//upload\.wikimedia\.org/wikipedia/commons/thumb/[^"]+\.(?:jpg|jpeg|png)/[^"]+)"', html, re.IGNORECASE)
        
        if match:
            img_url = "https:" + match.group(1).split('?')[0]
            
            print(f"Downloading {name} from {img_url}")
            filepath = os.path.join(dest_dir, f"{name}.jpg")
            
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(img_req).read()
            
            with open(filepath, 'wb') as f:
                f.write(img_data)
            print(f"Success: {name}.jpg ({len(img_data)} bytes)")
        else:
            print(f"No image found for {name}")
    except Exception as e:
        print(f"Error for {name}: {e}")
