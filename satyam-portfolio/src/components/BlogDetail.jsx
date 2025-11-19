import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";

const blogPostsData = [
  {
    id: 1,
    title: "Building Production-Ready REST APIs with Node.js",
    category: "Backend",
    readTime: "8 min read",
    date: "March 15, 2025",
    excerpt: "Learn best practices for building scalable REST APIs with proper error handling, authentication, and database optimization.",
    image: "https://dummyimage.com/600x350/4F46E5/FFFFFF?text=REST+APIs",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    author: "Satyam Prajapati",
    
    content: `# Building Production-Ready REST APIs with Node.js

Building production-ready REST APIs requires more than just basic CRUD operations. Here are key considerations:

## 1. Error Handling
Implement proper HTTP status codes and meaningful error messages. This helps frontend developers understand what went wrong.

\`\`\`javascript
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});
\`\`\`

## 2. Authentication & Authorization
Use JWT tokens for secure API access. Store tokens securely and validate them on every protected route.

\`\`\`javascript
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
};
\`\`\`

## 3. Rate Limiting
Protect your API from abuse with rate limiting middleware. This prevents DDoS attacks and ensures fair usage.

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use('/api/', limiter);
\`\`\`

## 4. Database Optimization
Write efficient queries and use proper indexing. Bad queries can slow down your entire application.

- Use indexes on frequently queried fields
- Implement pagination for large datasets
- Use projection to fetch only needed fields

## 5. Logging & Monitoring
Implement comprehensive logging for debugging and monitoring. This helps track down issues in production.

\`\`\`javascript
const logger = require('morgan');
app.use(logger('combined'));
\`\`\`

## Key Takeaways

✅ Always validate input data  
✅ Use environment variables for sensitive data  
✅ Implement proper error handling  
✅ Add comprehensive logging  
✅ Use database transactions for multi-step operations  

Check out the [Express.js documentation](https://expressjs.com) for more details.`,
    
    relatedRepos: [
      {
        name: "Node.js Complete Guide",
        url: "https://github.com/satyam0777/Node-js",
        description: "Complete Node.js REST API implementation with authentication and error handling"
      },
      {
        name: "Express Server Examples",
        url: "https://github.com/satyam0777/Node-js",
        description: "Production-ready Express.js setup with middleware and logging"
      }
    ]
  },
  
  {
    id: 2,
    title: "React Performance Optimization: Tips & Tricks",
    category: "Frontend",
    readTime: "6 min read",
    date: "Feb 10, 2025",
    excerpt: "Discover techniques to optimize React applications for better performance including code splitting, memoization, and lazy loading.",
    image: "https://dummyimage.com/600x350/60A5FA/FFFFFF?text=React+Performance",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    author: "Satyam Prajapati",
    
    content: `# React Performance Optimization: Tips & Tricks

React applications can become slow if not optimized properly. Here's how to fix it:

## 1. Code Splitting
Split your code into smaller chunks and load them only when needed.

\`\`\`javascript
import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## 2. React.memo for Memoization
Prevent unnecessary re-renders of components that haven't changed.

\`\`\`javascript
const UserCard = React.memo(({ user }) => {
  console.log('Rendering UserCard');
  return <div>{user.name}</div>;
});
\`\`\`

## 3. useCallback Hook
Memoize callback functions to prevent unnecessary re-renders of child components.

\`\`\`javascript
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
\`\`\`

## 4. Virtual Lists (Windowing)
For large lists, render only visible items using libraries like react-window.

\`\`\`javascript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={35}
  width='100%'
>
  {Row}
</FixedSizeList>
\`\`\`

## 5. Bundle Analysis
Use webpack-bundle-analyzer to identify and remove large bundles.

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

## 6. Key Props in Lists
Always provide proper, unique key props in lists to help React identify which items have changed.

\`\`\`javascript
{items.map((item) => (
  <Item key={item.id} data={item} />
))}
\`\`\`

## Performance Metrics

Monitor these metrics:
- **FCP** (First Contentful Paint) - Should be < 1.8s
- **LCP** (Largest Contentful Paint) - Should be < 2.5s
- **CLS** (Cumulative Layout Shift) - Should be < 0.1

## Tools to Use

- React DevTools Profiler
- Lighthouse (Chrome DevTools)
- Web Vitals library
- Bundle Analyzer

Start optimizing today! `,
    
    relatedRepos: [
      {
        name: "React Placement Preparation",
        url: "https://github.com/satyam0777/React-placement-prepration",
        description: "Complete React interview preparation with optimization examples"
      },
      {
        name: "StudyHelperAI - Optimized React App",
        url: "https://github.com/satyam0777/Study-helper",
        description: "Real-world React app with performance optimizations implemented"
      }
    ]
  },
  
  {
    id: 3,
    title: "Mastering MongoDB Queries: From Basic to Advanced",
    category: "Database",
    readTime: "10 min read",
    date: "Nov 5, 2024",
    excerpt: "Deep dive into MongoDB query optimization, aggregation pipelines, and indexing strategies for better database performance.",
    image: "https://dummyimage.com/600x350/10B981/FFFFFF?text=MongoDB",
    tags: ["MongoDB", "Database", "Queries", "Backend"],
    author: "Satyam Prajapati",
    
    content: `# Mastering MongoDB Queries: From Basic to Advanced

MongoDB queries can be significantly optimized with proper techniques:

## 1. Aggregation Pipeline
Use pipelines for complex data transformations instead of fetching all data.

\`\`\`javascript
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: '$city', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
\`\`\`

## 2. Indexing Strategies
Create indexes on frequently queried fields to speed up queries dramatically.

\`\`\`javascript
// Create index on email field
db.users.createIndex({ email: 1 });

// Create compound index
db.users.createIndex({ age: 1, city: 1 });

// Create text index for search
db.articles.createIndex({ title: 'text', content: 'text' });
\`\`\`

## 3. Query Optimization
Use explain() to understand how MongoDB executes your queries.

\`\`\`javascript
db.users.find({ email: 'test@example.com' }).explain('executionStats')
\`\`\`

## 4. Pagination
Implement both offset-based and cursor-based pagination for different use cases.

\`\`\`javascript
// Offset-based pagination
db.posts.find()
  .skip(20)
  .limit(10)

// Cursor-based pagination (more efficient)
db.posts.find({ _id: { $gt: lastId } })
  .limit(10)
\`\`\`

## 5. Projection
Only fetch fields you need to reduce data transfer and improve performance.

\`\`\`javascript
// Fetch only name and email
db.users.find({}, { name: 1, email: 1, _id: 0 })
\`\`\`

## Best Practices

- Always index on fields used in WHERE clauses
- Use explain() to test query performance
- Denormalize data when necessary
- Archive old data regularly
- Monitor slow queries

## Common Query Patterns

### Find by Multiple Conditions
\`\`\`javascript
db.users.find({
  age: { $gte: 18, $lte: 65 },
  status: 'active'
})
\`\`\`

### Update Multiple Documents
\`\`\`javascript
db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: 'minor' } }
)
\`\`\`

Start optimizing your MongoDB queries today! 📊`,
    
    relatedRepos: [
      {
        name: "MongoDB Placement Guide",
        url: "https://github.com/satyam0777/mongodb-placement",
        description: "Collection of MongoDB optimization techniques and interview questions"
      },
      {
        name: "VetCare Platform - MongoDB Implementation",
        url: "https://github.com/satyam0777/VetCare-Plateform-CRM",
        description: "Production MongoDB implementation with complex queries and aggregation"
      }
    ]
  },
  
  {
    id: 4,
    title: "Real-Time Communication with Socket.io",
    category: "Backend",
    readTime: "7 min read",
    date: "Oct 28, 2024",
    excerpt: "Build real-time applications with Socket.io. Learn about events, namespaces, and handling connection issues.",
    image: "https://dummyimage.com/600x350/F59E0B/FFFFFF?text=Socket.io",
    tags: ["Socket.io", "Real-time", "WebSocket", "Node.js"],
    author: "Satyam Prajapati",
    
    content: `# Real-Time Communication with Socket.io

Socket.io enables real-time bidirectional communication. Here's how to use it effectively:

## 1. Basic Setup
\`\`\`javascript
const io = require('socket.io')(3000, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
\`\`\`

## 2. Namespaces
Organize socket events using namespaces for better code structure.

\`\`\`javascript
// Server
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  socket.on('message', (data) => {
    chatNamespace.emit('new-message', data);
  });
});

// Client
const socket = io('http://localhost:3000/chat');
socket.emit('message', { text: 'Hello' });
\`\`\`

## 3. Rooms
Group sockets into rooms for targeted broadcasts.

\`\`\`javascript
socket.on('join-room', (roomId) => {
  socket.join(roomId);
});

socket.on('send-message', (roomId, message) => {
  io.to(roomId).emit('receive-message', message);
});
\`\`\`

## 4. Error Handling
Properly handle connection errors and reconnection.

\`\`\`javascript
socket.on('connect_error', (error) => {
  console.log('Connection error:', error);
});

socket.on('reconnect', () => {
  console.log('Reconnected');
});
\`\`\`

## 5. Scalability with Redis Adapter
Use Redis adapter for multi-server deployments.

\`\`\`javascript
const io = require('socket.io')(3000);
const redisAdapter = require('@socket.io/redis-adapter');
const redis = require('redis');

const pubClient = redis.createClient();
const subClient = pubClient.duplicate();

io.adapter(redisAdapter(pubClient, subClient));
\`\`\`

## Real-Time Features to Build

- Live Chat Applications
- Notifications
- Collaborative Editing
- Live Dashboards
- Multiplayer Games

## Performance Tips

✅ Use rooms for targeted broadcasts  
✅ Implement message queuing for heavy loads  
✅ Use Redis adapter for scaling  
✅ Handle disconnections gracefully  
✅ Compress large payloads  

Real-time features enhance user experience! `,
    
    relatedRepos: [
      {
        name: "WebSocket & Real-Time Communication",
        url: "https://github.com/satyam0777/webSocket",
        description: "Complete WebSocket and Socket.io implementation guide"
      },
      {
        name: "VetCare Video Consultation - Socket.io",
        url: "https://github.com/satyam0777/VetCare-Plateform-CRM",
        description: "Real-time video consultation implementation with Socket.io"
      }
    ]
  },
  
  {
    id: 5,
    title: "DSA Interview Tips: Arrays & Strings",
    category: "DSA",
    readTime: "9 min read",
    date: "Feb 20, 2025",
    excerpt: "Common DSA patterns for array and string problems. Learn sliding window, two pointers, and prefix sum techniques.",
    image: "https://dummyimage.com/600x350/8B5CF6/FFFFFF?text=DSA+Arrays",
    tags: ["DSA", "Algorithms", "Arrays", "Strings"],
    author: "Satyam Prajapati",
    
    content: `# DSA Interview Tips: Arrays & Strings

## 🎯 MASTER DECISION TREE - "WHICH PATTERN WHEN?"

\`\`\`
                    ARRAY PROBLEM?
                         |
        ┌────────────────────┼─────────────────────┐
        |                    |                     |
    See "window"         See "pairs"         See "frequency"
    or "contiguous"?     or "sorted"?        or "count"?
        |                    |                     |
        v                    v                     v
   SLIDING WINDOW        TWO POINTER           HASHING
        |                    |                     |
    Size k given?        Array sorted?         Need count?
     /      \\             /      \\               /      \\
   YES      NO          YES      NO             YES      NO
    |        |           |        |              |        |
  FIXED   VARIABLE    OPPOSITE   SAME          MAP      SET
         "longest"    "pairs"  "in-place"
         "at most"
         
        See "maximum sum contiguous"?
                 |
                 v
          KADANE'S ALGORITHM
          (Extend or start fresh)
          
        See "range query" or "subarray sum"?
                 |
                 v
          PREFIX/SUFFIX SUM
          (Build once, query O(1))
          
        See "sort", "0,1,2", "Kth largest"?
                 |
                 v
            SORTING
         /            \\
     Basic sort    Dutch Flag
     O(n log n)    O(n), O(1)
     
        Simple "find min", "reverse"?
                 |
                 v
           BASIC ARRAY
        (Single pass/Two pointer)
\`\`\`

## 📝 ALL TEMPLATES QUICK REFERENCE

### 1️⃣ SLIDING WINDOW - FIXED
// USE WHEN: "Size k" given

\`\`\`javascript
int i = 0, j = 0;
while (j < n) {
    sum += arr[j];  // Add j
    
    if (j - i + 1 < k) j++;
    else if (j - i + 1 == k) {
        maxSum = max(maxSum, sum);  // Answer
        sum -= arr[i];  // Slide
        i++; j++;
    }
}
// Mantra: "Add j, check size, answer, slide both"
\`\`\`

### 2️⃣ SLIDING WINDOW - VARIABLE
// USE WHEN: "Longest", "At most k distinct"

\`\`\`javascript
int i = 0, j = 0, maxLen = 0;
while (j < n) {
    // Add arr[j] to window
    
    while (condition_invalid) {  // Shrink while bad
        // Remove arr[i]
        i++;
    }
    
    maxLen = max(maxLen, j - i + 1);  // Update answer
    j++;
}
// Mantra: "Add j, while bad shrink i, update max, move j"
\`\`\`

### 3️⃣ TWO POINTER - OPPOSITE ⬅️➡️
// USE WHEN: Sorted + Pairs + Target sum

\`\`\`javascript
int left = 0, right = n - 1;

while (left < right) {
    int sum = arr[left] + arr[right];
    
    if (sum == target) return true;
    else if (sum < target) left++;   // Need larger
    else right--;                     // Need smaller
}
// Mantra: "Less left++, Equal found, More right--"
\`\`\`

### 4️⃣ TWO POINTER - SAME ➡️➡️
// USE WHEN: Remove duplicates, Move zeros

\`\`\`javascript
int slow = 0;

for (int fast = 0; fast < n; fast++) {
    if (condition_met(arr[fast])) {  // Should I keep?
        arr[slow] = arr[fast];
        slow++;
    }
}
return slow;  // New length
// Mantra: "fast explores ALL, slow collects VALID"
\`\`\`

### 5️⃣ KADANE'S ALGORITHM
// USE WHEN: "Maximum sum contiguous subarray"

\`\`\`javascript
int maxSum = arr[0], curSum = arr[0];

for (int i = 1; i < n; i++) {
    curSum = max(arr[i], curSum + arr[i]);
            //    ↑           ↑
            // Start new   Extend old
    
    maxSum = max(maxSum, curSum);
}
return maxSum;
// Mantra: "Extend or Start Fresh - whichever is LARGER!"
\`\`\`

### 6️⃣ PREFIX SUM - BASIC
// USE WHEN: Multiple range queries [l, r]

\`\`\`javascript
// BUILD:
prefix[0] = arr[0];
for (int i = 1; i < n; i++) {
    prefix[i] = prefix[i-1] + arr[i];
}

// QUERY sum[l, r]:
int rangeSum = prefix[r] - (l == 0 ? 0 : prefix[l-1]);
// Mantra: "Precompute ONCE, Query INSTANTLY!"
\`\`\`

### 7️⃣ PREFIX SUM + HASHMAP
// USE WHEN: "Count subarrays with sum = k"

\`\`\`javascript
unordered_map<int, int> mp;
mp[0] = 1;  // IMPORTANT!

int sum = 0, count = 0;
for (int x : arr) {
    sum += x;
    count += mp[sum - k];  // Check if (sum - k) exists
    mp[sum]++;
}
// Mantra: "For subarray count: prefix + hashmap!"
\`\`\`

### 8️⃣ HASHING - FREQUENCY
// USE WHEN: "Count", "Frequency"

\`\`\`javascript
unordered_map<int, int> freq;

for (int x : arr) {
    freq[x]++;
}

// Find most frequent:
int maxFreq = 0;
for (auto& p : freq) {
    maxFreq = max(maxFreq, p.second);
}
// Mantra: "Count? MAP. Exists? SET."
\`\`\`

### 9️⃣ HASHING - TWO SUM
// USE WHEN: "Find two numbers that add to target"

\`\`\`javascript
unordered_map<int, int> seen;

for (int i = 0; i < n; i++) {
    int complement = target - arr[i];
    
    if (seen.count(complement)) {
        return {seen[complement], i};
    }
    seen[arr[i]] = i;
}
// Mantra: "Store complement, check if current exists!"
\`\`\`

### 🔟 BASIC ARRAY - MIN/MAX
// USE WHEN: "Find minimum/maximum"

\`\`\`javascript
int maxVal = arr[0];

for (int i = 1; i < n; i++) {
    if (arr[i] > maxVal) {
        maxVal = arr[i];
    }
}
// Mantra: "Assume first is best, then challenge!"
\`\`\`

### 1️⃣1️⃣ BASIC ARRAY - REVERSE
// USE WHEN: "Reverse array"

\`\`\`javascript
int left = 0, right = n - 1;

while (left < right) {
    swap(arr[left], arr[right]);
    left++;
    right--;
}
// Mantra: "Swap and move inward from both ends!"
\`\`\`

### 1️⃣2️⃣ BASIC ARRAY - ROTATE
// USE WHEN: "Rotate array by k"

\`\`\`javascript
void reverse(int arr[], int s, int e) {
    while (s < e) swap(arr[s++], arr[e--]);
}

k = k % n;
reverse(arr, 0, n-1);    // Reverse all
reverse(arr, 0, k-1);    // Reverse first k
reverse(arr, k, n-1);    // Reverse rest
// Mantra: "Reverse whole, reverse parts!"
\`\`\`

### 1️⃣3️⃣ SORTING - BASIC
// USE WHEN: "Sort array"

\`\`\`javascript
// Ascending:
sort(arr.begin(), arr.end());

// Descending:
sort(arr.begin(), arr.end(), greater<int>());
// Mantra: "sort() for ascending, greater<>() for descending!"
\`\`\`

### 1️⃣4️⃣ SORTING - DUTCH FLAG (0,1,2) ⭐ MOST FAMOUS
// USE WHEN: "Sort 0s, 1s, 2s" or "Three colors"

\`\`\`javascript
int low = 0, mid = 0, high = n - 1;

while (mid <= high) {
    if (arr[mid] == 0) {
        swap(arr[low], arr[mid]);
        low++; mid++;
    }
    else if (arr[mid] == 1) mid++;
    else {  // arr[mid] == 2
        swap(arr[mid], arr[high]);
        high--;  // Don't move mid!
    }
}
// Mantra: "0→Left, 2→Right, 1→Stay!"
\`\`\`

### 1️⃣5️⃣ SORTING - KTH LARGEST
// USE WHEN: "Find Kth largest element"

\`\`\`javascript
sort(arr.begin(), arr.end(), greater<int>());
return arr[k - 1];
// Mantra: "Sort descending, then arr[k-1]!"
\`\`\`

## 📊 COMPLEXITY REFERENCE TABLE

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 12px 15px; text-align: left; border: 1px solid #ddd; font-weight: 600;">Pattern</th>
      <th style="padding: 12px 15px; text-align: center; border: 1px solid #ddd; font-weight: 600;">Time</th>
      <th style="padding: 12px 15px; text-align: center; border: 1px solid #ddd; font-weight: 600;">Space</th>
      <th style="padding: 12px 15px; text-align: left; border: 1px solid #ddd; font-weight: 600;">When to Use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sliding Window (Fixed)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1) or O(k)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Window size k given</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sliding Window (Variable)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1) or O(k)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Find longest/smallest</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Two Pointer (Opposite)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sorted + pairs</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Two Pointer (Same)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">In-place modify</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Kadane's Algorithm</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Max sum contiguous</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Prefix Sum (Build)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Multiple range queries</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Prefix + HashMap</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Subarray count</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Frequency)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Count/frequency</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Two Sum)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Find pairs</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Basic Array (Min/Max)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Single pass scan</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sorting (STL)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n log n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(log n)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">General sorting</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sorting (Dutch Flag)</td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(n)</code></td>
      <td style="padding: 12px 15px; text-align: center; border: 1px solid #ddd;"><code>O(1)</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Only 0,1,2</td>
    </tr>
  </tbody>
</table>

## 🔑 MAGIC KEYWORDS → PATTERN MAPPING

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
  <thead>
    <tr style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
      <th style="padding: 12px 15px; text-align: left; border: 1px solid #ddd; font-weight: 600; width: 40%;">Keyword</th>
      <th style="padding: 12px 15px; text-align: left; border: 1px solid #ddd; font-weight: 600; width: 60%;">Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Window", "Size k"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sliding Window (Fixed)</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Longest", "Without repeat"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sliding Window (Variable)</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Maximum sum contiguous"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Kadane's Algorithm</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Range query [l,r]"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Prefix Sum</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Subarray sum = k"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Prefix + HashMap</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Count", "Frequency"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Map)</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Duplicate", "Exists"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Set)</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Two numbers add to target"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Two Sum)</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Sorted array", "Pair"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Two Pointer (Opposite)</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Remove duplicates", "Move zeros"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Two Pointer (Same)</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"0s, 1s, 2s", "Three colors"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sorting (Dutch Flag) ⭐</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Kth largest"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Sorting + Index</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Anagram", "Same letters"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Frequency)</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"First non-repeating"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Hashing (Map + Scan)</td>
    </tr>
    <tr style="background: #f8f9fa; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Rotate by k"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Basic Array (Reverse trick)</td>
    </tr>
    <tr style="background: white; border-bottom: 1px solid #ddd;">
      <td style="padding: 12px 15px; border: 1px solid #ddd;"><code>"Circular subarray"</code></td>
      <td style="padding: 12px 15px; border: 1px solid #ddd;">Kadane's (Total - Min)</td>
    </tr>
  </tbody>
</table>

## 💡 PRO TIPS FOR INTERVIEWS

- ✅ **Always start with the decision tree** - What pattern matches?
- ✅ **Solve in 3 steps**: Understand → Pattern → Code
- ✅ **State the mantra** - Shows deep understanding
- ✅ **Practice each template** - Make them muscle memory
- ✅ **Test edge cases** - Empty array, single element, all negatives
- ✅ **Explain complexity** - Time and space trade-offs
- ✅ **Ask clarifying questions** - "Can I modify array?" "Constraints?"

Master these 15 templates and solve 95% of array interview questions! 🚀`,
    
    relatedRepos: [
      {
        name: "DSA Array Problems",
        url: "https://github.com/satyam0777/DSA-Placement/tree/main/Array",
        description: "250+ Array DSA problems solved with detailed explanations"
      },
      {
        name: "DSA Mastery Platform",
        url: "https://github.com/satyam0777/DSA-mastery-project",
        description: "Interactive DSA learning platform with structured roadmap"
      }
    ]
  },
  
  {
    id: 6,
    title: "Payment Gateway Integration: Razorpay Guide",
    category: "Backend",
    readTime: "8 min read",
    date: "Sept 20, 2025",
    excerpt: "Complete guide to integrating Razorpay payment gateway in your applications with error handling and verification.",
    image: "https://dummyimage.com/600x350/EC4899/FFFFFF?text=Razorpay",
    tags: ["Razorpay", "Payments", "Backend", "Integration"],
    author: "Satyam Prajapati",
    
    content: `# Payment Gateway Integration: Razorpay Guide

Integrating Razorpay requires careful handling of orders and payments:

## 1. Initialize Razorpay
\`\`\`javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});
\`\`\`

## 2. Create Order
\`\`\`javascript
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: 'receipt_' + Date.now()
    });
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

## 3. Verify Payment Signature
Always verify payment signatures server-side - this is crucial!

\`\`\`javascript
const crypto = require('crypto');

function verifyPaymentSignature(orderId, paymentId, signature) {
  const body = orderId + '|' + paymentId;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');
  
  return expectedSignature === signature;
}

app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  if (verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});
\`\`\`

## 4. Frontend Integration
\`\`\`javascript
const options = {
  key: process.env.REACT_APP_RAZORPAY_KEY,
  amount: order.amount,
  currency: 'INR',
  name: 'Your Company',
  description: 'Product Description',
  order_id: order.id,
  handler: function(response) {
    // Verify on backend
    verifyPayment(response);
  },
  prefill: {
    email: user.email,
    contact: user.phone
  }
};

const razorpay = new window.Razorpay(options);
razorpay.open();
\`\`\`

## 5. Handle Webhook Events
Listen to payment notifications from Razorpay.

\`\`\`javascript
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  if (expectedSignature === signature) {
    const event = req.body;
    
    if (event.event === 'payment.authorized') {
      // Handle successful payment
      updatePaymentStatus(event.payload.payment.entity.id, 'success');
    }
  }
  
  res.json({ received: true });
});
\`\`\`

## 6. Refund Implementation
\`\`\`javascript
app.post('/refund', async (req, res) => {
  try {
    const { paymentId, amount } = req.body;
    
    const refund = await razorpay.payments.refund(paymentId, {
      amount: amount * 100
    });
    
    res.json(refund);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

## Security Checklist

✅ Always verify signatures server-side  
✅ Never expose key_secret in frontend  
✅ Use environment variables for credentials  
✅ Implement webhook verification  
✅ Handle failures gracefully  
✅ Log all transactions  
✅ Implement retry logic  

## Common Issues

1. **CORS Issues** - Configure CORS on your backend
2. **Signature Mismatch** - Verify you're using correct key_secret
3. **Amount Precision** - Remember Razorpay expects paise (×100)
4. **Webhook Timeout** - Respond with 200 within 5 seconds

Start accepting payments securely! 💳`,
    
    relatedRepos: [
      {
        name: "Node.js Complete Guide",
        url: "https://github.com/satyam0777/Node-js",
        description: "Complete Node.js backend implementation including payment integration"
      },
      {
        name: "VetCare Platform - Payment Integration",
        url: "https://github.com/satyam0777/VetCare-Plateform-CRM",
        description: "Real payment processing in production application"
      }
    ]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData.find(p => p.id === parseInt(id));
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate("/#blog")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Go Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <button
          onClick={() => navigate("/#blog")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Blog</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold uppercase">
            {post.category}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            <i className="fas fa-calendar mr-2"></i>{post.date}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            <i className="fas fa-clock mr-2"></i>{post.readTime}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            <i className="fas fa-user mr-2"></i>{post.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Repos */}
          {post.relatedRepos && post.relatedRepos.length > 0 && (
            <div className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-code text-purple-500"></i>
                Related GitHub Repositories
              </h3>
              <div className="space-y-4">
                {post.relatedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          <i className="fab fa-github mr-2"></i>
                          {repo.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {repo.description}
                        </p>
                      </div>
                      <i className="fas fa-external-link-alt text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Share it with other developers and help the community learn!
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fab fa-twitter"></i>
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fab fa-linkedin"></i>
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPostsData
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  className="cursor-pointer group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-bold text-gray-900 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
