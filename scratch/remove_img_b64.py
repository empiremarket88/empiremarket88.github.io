import sys

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 2369 is index 2368
# Line 2390 is index 2389
start = 2368
end = 2389

# Verify we are at the right place
if 'const img_b64 =' in lines[start]:
    print(f"Removing lines {start+1} to {end+1}")
    del lines[start:end+1]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(lines)
else:
    print(f"Error: Line {start+1} is '{lines[start].strip()}', expected 'const img_b64 ='")
    sys.exit(1)
