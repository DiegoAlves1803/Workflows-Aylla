#!/usr/bin/env python3
"""
Backend Test Suite for Aylla Application
Tests FastAPI endpoints and MongoDB connectivity
"""

import requests
import json
import sys
import os
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class BackendTester:
    def __init__(self):
        self.backend_url = get_backend_url()
        if not self.backend_url:
            print("❌ Could not get backend URL from frontend/.env")
            sys.exit(1)
        
        self.api_url = f"{self.backend_url}/api"
        self.test_results = []
        
        print(f"🔍 Testing backend at: {self.api_url}")
        print("=" * 60)

    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")
        
        self.test_results.append({
            'test': test_name,
            'success': success,
            'message': message,
            'details': details
        })

    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_test("Root Endpoint", True, "Root endpoint responding correctly")
                    return True
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Root Endpoint", False, f"Connection error: {str(e)}")
            return False

    def test_create_status_check(self):
        """Test POST /api/status endpoint"""
        try:
            test_data = {
                "client_name": "Sr. Oriovaldo"
            }
            
            response = requests.post(
                f"{self.api_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'client_name', 'timestamp']
                
                if all(field in data for field in required_fields):
                    if data['client_name'] == test_data['client_name']:
                        self.log_test("Create Status Check", True, "Status check created successfully")
                        return data['id']  # Return ID for further testing
                    else:
                        self.log_test("Create Status Check", False, "Client name mismatch in response")
                        return None
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Create Status Check", False, f"Missing fields: {missing}")
                    return None
            else:
                self.log_test("Create Status Check", False, f"HTTP {response.status_code}: {response.text}")
                return None
                
        except requests.exceptions.RequestException as e:
            self.log_test("Create Status Check", False, f"Connection error: {str(e)}")
            return None

    def test_get_status_checks(self):
        """Test GET /api/status endpoint"""
        try:
            response = requests.get(f"{self.api_url}/status", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_test("Get Status Checks", True, f"Retrieved {len(data)} status checks")
                    
                    # Validate structure of returned items
                    if data:
                        first_item = data[0]
                        required_fields = ['id', 'client_name', 'timestamp']
                        if all(field in first_item for field in required_fields):
                            self.log_test("Status Check Structure", True, "Status check structure is valid")
                        else:
                            missing = [f for f in required_fields if f not in first_item]
                            self.log_test("Status Check Structure", False, f"Missing fields in response: {missing}")
                    
                    return True
                else:
                    self.log_test("Get Status Checks", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("Get Status Checks", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Status Checks", False, f"Connection error: {str(e)}")
            return False

    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = requests.options(f"{self.api_url}/", timeout=10)
            
            cors_headers = [
                'access-control-allow-origin',
                'access-control-allow-methods',
                'access-control-allow-headers'
            ]
            
            present_headers = [h for h in cors_headers if h in response.headers]
            
            if len(present_headers) >= 2:  # At least origin and methods should be present
                self.log_test("CORS Configuration", True, f"CORS headers present: {present_headers}")
                return True
            else:
                self.log_test("CORS Configuration", False, f"Missing CORS headers. Present: {present_headers}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"Connection error: {str(e)}")
            return False

    def test_invalid_endpoint(self):
        """Test handling of invalid endpoints"""
        try:
            response = requests.get(f"{self.api_url}/nonexistent", timeout=10)
            
            if response.status_code == 404:
                self.log_test("Invalid Endpoint Handling", True, "404 returned for invalid endpoint")
                return True
            else:
                self.log_test("Invalid Endpoint Handling", False, f"Expected 404, got {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Invalid Endpoint Handling", False, f"Connection error: {str(e)}")
            return False

    def test_mongodb_connectivity(self):
        """Test MongoDB connectivity by creating and retrieving data"""
        try:
            # Create a test record
            test_data = {"client_name": "MongoDB Test User"}
            create_response = requests.post(
                f"{self.api_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if create_response.status_code != 200:
                self.log_test("MongoDB Connectivity", False, "Failed to create test record")
                return False
            
            created_id = create_response.json().get('id')
            
            # Retrieve records to verify persistence
            get_response = requests.get(f"{self.api_url}/status", timeout=10)
            
            if get_response.status_code == 200:
                records = get_response.json()
                # Check if our test record exists
                test_record_found = any(r.get('id') == created_id for r in records)
                
                if test_record_found:
                    self.log_test("MongoDB Connectivity", True, "Data persisted successfully in MongoDB")
                    return True
                else:
                    self.log_test("MongoDB Connectivity", False, "Test record not found in database")
                    return False
            else:
                self.log_test("MongoDB Connectivity", False, "Failed to retrieve records from database")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("MongoDB Connectivity", False, f"Connection error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend Test Suite")
        print("=" * 60)
        
        tests = [
            self.test_root_endpoint,
            self.test_create_status_check,
            self.test_get_status_checks,
            self.test_cors_headers,
            self.test_invalid_endpoint,
            self.test_mongodb_connectivity
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            try:
                result = test()
                if result:
                    passed += 1
            except Exception as e:
                print(f"❌ Test {test.__name__} failed with exception: {e}")
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All backend tests PASSED!")
            return True
        else:
            print(f"⚠️  {total - passed} backend tests FAILED!")
            return False

def main():
    """Main test execution"""
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n✅ Backend is functioning correctly!")
        sys.exit(0)
    else:
        print("\n❌ Backend has issues that need attention!")
        sys.exit(1)

if __name__ == "__main__":
    main()