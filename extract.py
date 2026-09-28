import fitz
import os
from PIL import Image
import io

# 1. Compress n8n image
n8n_src = r"Project images and context\n8n\main flow.png"
n8n_dst = r"public\projects\n8n\main_flow.webp"
if os.path.exists(n8n_src):
    img = Image.open(n8n_src)
    # Convert to RGB if necessary
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    # Save as webp for high compression
    img.save(n8n_dst, "webp", quality=80)
    print(f"Compressed n8n image to {n8n_dst}")

# 2. Extract ATS images from PDF
pdf_path = r"C:\Users\mahmoud\OneDrive\Documents\Mahmoud_Tahrawi_PowerPlatform_Portfolio_NoContact.pdf"
ats_dir = r"public\projects\ats"
os.makedirs(ats_dir, exist_ok=True)

if os.path.exists(pdf_path):
    doc = fitz.open(pdf_path)
    img_index = 1
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        image_list = page.get_images(full=True)
        for img_info in image_list:
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            
            # Load into Pillow to compress and save
            image = Image.open(io.BytesIO(image_bytes))
            if image.mode in ("RGBA", "P"):
                image = image.convert("RGB")
                
            dst_path = os.path.join(ats_dir, f"ats_image_{img_index}.webp")
            image.save(dst_path, "webp", quality=85)
            print(f"Extracted and saved {dst_path}")
            img_index += 1
