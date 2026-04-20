#FBS Realignment Map

data = [
    {"team": "Texas", "conference": "SWC", "start": 1978, "end": 1995},
    {"team": "Texas", "conference": "Big 12", "start": 1996, "end": 2023},
    {"team": "Texas", "conference": "SEC", "start": 2024, "end": None},

    {"team": "Nebraska", "conference": "Big Eight", "start": 1978, "end": 1995},
    {"team": "Nebraska", "conference": "Big 12", "start": 1996, "end": 2010},
    {"team": "Nebraska", "conference": "Big Ten", "start": 2011, "end": None},

    {"team": "Louisiana Tech", "conference": "Independent", "start": 1989, "end": 1992},
    {"team": "Louisiana Tech", "conference": "Big West", "start": 1993, "end": 1995},
    {"team": "Louisiana Tech", "conference": "Independent", "start": 1996, "end": 2000},
    {"team": "Louisiana Tech", "conference": "WAC", "start": 2001, "end": 2012},
    {"team": "Louisiana Tech", "conference": "CUSA", "start": 2013, "end": 2025},
    {"team": "Louisiana Tech", "conference": "SBC", "start": 2026, "end": None},
    
    {"team": "Idaho", "conference": "Big West", "start": 1996, "end": 2000},
    {"team": "Idaho", "conference": "SBC", "start": 2001, "end": 2004},
    {"team": "Idaho", "conference": "WAC", "start": 2005, "end": 2012},
    {"team": "Idaho", "conference": "Independent", "start": 2013, "end": 2013},
    {"team": "Idaho", "conference": "SBC", "start": 2014, "end": 2017},

    {"team": "UAB", "conference": "Independent", "start": 1996, "end": 1998},
    {"team": "UAB", "conference": "CUSA", "start": 1999, "end": 2014},
    {"team": "UAB", "conference": "CUSA", "start": 2017, "end": 2022},
    {"team": "UAB", "conference": "American", "start": 2023, "end": None}
]

rows = []

for entry in data:
    end = entry["end"] or 2025
    for year in range(entry["start"], end + 1):
        rows.append({
            "team": entry["team"],
            "year": year,
            "conference": entry["conference"]
        })

coords = {
    "Texas": (30.28, -97.73),
    "Nebraska": (40.82, -96.70),
    "Louisiana Tech": (32.53, -92.65),
    "Idaho": (46.72, -117.01),
    "UAB": (33.5042, -86.8115)
}
