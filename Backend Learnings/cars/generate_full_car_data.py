import json
import random
import uuid
from datetime import datetime, timedelta

# Load original data (replace with the original 15 entries)
with open('E:\Delta 7.0\Backend Learnings\cars\car_data.json', 'r') as file:
    data = json.load(file)

# Lists for randomization
makes_models = {
    "Toyota": ["Corolla", "RAV4", "Highlander"],
    "Honda": ["Accord", "CR-V", "Pilot"],
    "Ford": ["Mustang", "Explorer", "Escape"],
    "Kia": ["Sportage", "Sorento", "Telluride"],
    "Dodge": ["Charger", "Challenger", "Durango"],
    "Volvo": ["XC60", "XC90", "S60"],
    # Add more makes and models as needed
}
colors = ["Steel Gray", "Velvet Red", "Onyx Black", "Pearl White", "Midnight Blue"]
fuel_types = ["Gasoline", "Hybrid", "Electric", "Diesel"]
transmissions = ["Automatic", "Manual"]
features_pool = ["Blind Spot Monitoring", "Apple CarPlay", "Heated Seats", "Sunroof", "Navigation", "Adaptive Cruise Control"]
cities = ["Orlando, FL", "Las Vegas, NV", "Minneapolis, MN", "Nashville, TN", "Charlotte, NC"]

# Generate additional entries
new_cars = []
for i in range(16, 501):  # IDs 16 to 500
    make = random.choice(list(makes_models.keys()))
    model = random.choice(makes_models[make])
    fuel_type = random.choices(fuel_types, weights=[60, 20, 15, 5])[0]
    entry = {
        "id": i,
        "make": make,
        "model": model,
        "year": random.randint(2018, 2025),
        "price": random.randint(15000, 60000),
        "rating": round(random.uniform(3.8, 4.9), 1),
        "color": random.choice(colors),
        "mileage": random.randint(5000, 50000),
        "fuel_type": fuel_type,
        "transmission": random.choices(transmissions, weights=[80, 20])[0],
        "engine_size": 0 if fuel_type == "Electric" else round(random.uniform(1.5, 6.0), 1),
        "condition": "Used",
        "location": random.choice(cities),
        "vin": f"{random.choice('123456789ABCDEFGHJKLMNPQRSTUVWXYZ')}{random.randint(1000000, 9999999)}{random.choice('ABCDEFGHJKLMNPQRSTUVWXYZ')}123456",
        "features": random.sample(features_pool, random.randint(2, 4)),
        "seller_type": random.choices(["Dealer", "Private"], weights=[60, 40])[0],
        "sale_date": (datetime(2024, 9, 1) + timedelta(days=random.randint(0, 180))).strftime("%Y-%m-%d")
    }
    new_cars.append(entry)

# Combine original and new entries
data["cars"].extend(new_cars)
data["metadata"]["total_records"] = 500
data["metadata"]["last_updated"] = "2025-09-10"

# Save updated JSON
with open('car_data_updated.json', 'w') as file:
    json.dump(data, file, indent=2)