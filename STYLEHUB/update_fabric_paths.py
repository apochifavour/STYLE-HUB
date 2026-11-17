from pathlib import Path
import re
import shutil

script_path = Path("script.js")
if not script_path.is_file():
    raise SystemExit("Could not find script.js. Run this file from inside your STYLEHUB project folder.")

updates = {
    "Cotonou Heritage Ankara": "images/cotonou-fabrics.jpg",
    "Orange and Black African Print": "images/orange-african-print.jpg",
    "Multicolour Geometric Textile": "images/geometric-textile.jpg",
    "Cotton Fabric Selection": "images/colourful-fabric.jpg",
    "Premium Fabric Collection": "images/fabric-rolls.jpg",
}

text = script_path.read_text(encoding="utf-8")
updated_text = text

for product_name, image_path in updates.items():
    marker = re.search(r'name\s*:\s*(["\'])' + re.escape(product_name) + r'\1', updated_text)
    if not marker:
        raise SystemExit(f"Could not find product '{product_name}' in script.js. No changes were saved.")

    object_start = updated_text.rfind("{", 0, marker.start())
    object_end = updated_text.find("}", marker.end())
    if object_start < 0 or object_end < 0:
        raise SystemExit(f"Could not locate the product object for '{product_name}'. No changes were saved.")

    product_block = updated_text[object_start:object_end + 1]
    new_block, count = re.subn(
        r"(image\s*:\s*)([\"'])[^\"']*\2",
        lambda match: match.group(1) + '"' + image_path + '"',
        product_block,
        count=1,
    )
    if count != 1:
        raise SystemExit(f"Could not update the image path for '{product_name}'. No changes were saved.")

    updated_text = updated_text[:object_start] + new_block + updated_text[object_end + 1:]

backup_path = script_path.with_name("script.js.before-fabric-images.bak")
if not backup_path.exists():
    shutil.copy2(script_path, backup_path)

script_path.write_text(updated_text, encoding="utf-8")
print("Updated five fabric image paths in script.js.")
print(f"Backup saved as: {backup_path.name}")
for product_name, image_path in updates.items():
    if not Path(image_path).is_file():
        print(f"WARNING: {image_path} is not in the images folder yet.")
    print(f"{product_name} -> {image_path}")
