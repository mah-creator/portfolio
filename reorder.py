import json

file_path = r"src\data\projects.json"

with open(file_path, 'r', encoding='utf-8') as f:
    projects = json.load(f)

# Desired order:
# 1. agileflow
# 2. client-portal
# 3. n8n-automation
# 4. devlog
# 5. shaghalni
# 6. booking
# 7. ats-powerplatform
# 8. enterprise-network

order_map = {
    "agileflow": 0,
    "client-portal": 1,
    "n8n-automation": 2,
    "devlog": 3,
    "shaghalni": 4,
    "booking": 5,
    "ats-powerplatform": 6,
    "enterprise-network": 7
}

# Sort projects based on order_map
projects.sort(key=lambda x: order_map.get(x["id"], 99))

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(projects, f, indent=2, ensure_ascii=False)

print("Reordered projects.json successfully.")
