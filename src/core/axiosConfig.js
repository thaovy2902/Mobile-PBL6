import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.8:8000/api/v1/',
});
const access_token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6WyJzdGF0aXN0aWNfZGF0ZW9mZjp0ZWFtIiwidGVhbTp2aWV3IiwicHJvdmlkZXI6dmlldyIsInJlbWFpbl9sZWF2ZTp2aWV3IiwidXNlcl9sdW5jaDp1cGRhdGVfbGlzdF9hdXRvX2Jvb2tpbmciLCJ1c2VyX2x1bmNoOmdldF9hbGwiLCJyZXF1ZXN0X29mZjp2aWV3IiwidHlwZV9wYXk6dmlldyIsImx1bmNoZXM6dmlldyIsInN0YXRpc3RpY19kYXRlb2ZmOnVzZXIiLCJyZXF1ZXN0X29mZjplZGl0IiwidXNlcjphY2Nlc3NfcGVyc29uYWwiLCJvZmZpY2U6dmlldyIsInVzZXI6ZWRpdF9wdWJsaWNfdXNlcl9pbmZvcm1hdGlvbl9saXN0IiwidHlwZV9vZmY6dmlldyIsInVzZXJfbHVuY2g6ZWRpdCIsInVzZXI6dmlld19wdWJsaWNfdXNlcl9pbmZvcm1hdGlvbl9saXN0Il0sImV4cCI6MTYzOTA0OTcyOCwiaXNzdWVyIjoiRnVsbEhvcGUiLCJzdWIiOiIwODQ3ZTE1ZS1mMTg3LTQ5NDItOTIzNy0yOWUyOGRlMGMyZmIiLCJpYXQiOjE2MzkwNDYxMjgsIm5iZiI6MTYzOTA0NjEyOH0.qa3BrCFbZCAmfjUqjPJTA8NZglPZY6Bbjh-n6ydUzhPdunQWn9ZI510oByQv85P7r-oM2BPoyUXZk7M3j3hVeN95mx3xDQ2s4XcHbjn0ZEas_L9lYj3aF4axBRUhk33ZYUilvm1efzHwg6MQ4KKYf5RSyo1cWAO3VAFlxPZNER98F8QpydOD19v9u1-ExCggXxKtCG0wQplp5bwyIUHLpJMd8gEWoyyj_qv6eLcyo2O3HmbCN2aA5ZeXME23aq5bNZzQaU8fpDTBFwXKzkGzztFO-EYZ4Ti-pJ3W-eW9AHQ_mcYRPQ2NhB9ZczhNjoXOCIowb01uTXUlIu34AQ8AAg';

instance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

export default instance;
