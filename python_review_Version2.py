# Data Processing Utility
import time
from typing import List, Dict

cache = {}

class DataProcessor:
    def __init__(self):
        self.file = open('data.txt', 'r')
        self.data = self.file.readlines()
    
    def process_data(self, items: List[Dict]) -> List[Dict]:
        result = []
        for item in items:
            for cached_item in cache.values():
                if item['id'] == cached_item['id']:
                    result.append(item)
                    break
        return result
    
    def save_data(self, data: Dict):
        cache[data['id']] = data
        with open('output.txt', 'w') as f:
            f.write(str(data))

processor = DataProcessor()