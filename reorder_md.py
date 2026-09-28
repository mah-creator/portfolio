import re

file_path = r"projects.md"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by "---" and parse out the header
parts = re.split(r'\n---\n\n?', content)

header = parts[0].split('\n\n')[0] + '\n\n'

blocks = {}
for part in parts:
    if part.strip().startswith('## '):
        title_line = [line for line in part.split('\n') if line.startswith('## ')][0]
        title = title_line.replace('## ', '').strip()
        blocks[title] = part.strip()

# Desired order:
order = [
    "TaskMind",
    "ClientPortal Workspace",
    "WhatsApp Order Automation",
    "WriteAI Co-Pilot",
    "Shaghal Recruitment",
    "HealthcareBookings API",
    "Applicant Tracking System",
    "Enterprise Network Lab"
]

new_content = header
new_parts = []
for title in order:
    if title in blocks:
        new_parts.append(blocks[title])

new_content += "\n\n---\n\n".join(new_parts) + "\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Reordered projects.md successfully.")
