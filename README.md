# kmeans-clust
> k-means clustering in TypeScript

[![NPM](https://nodei.co/npm/kmeans-clust.png?compact=true)](https://nodei.co/npm/kmeans-clust/)
[![Build Status](https://travis-ci.org/mleko/kmeans-clust.svg?branch=master)](https://travis-ci.org/mleko/kmeans-clust)

### Installation

Library can be installed via [npm](https://www.npmjs.com/package/kmeans-clust).

```
$ npm install kmeans-clust
```

### Example

```typescript
import {kmeans} from "kmeans-clust";
const points = [[0], [1], [9], [10]];
kmeans(points, 2)
 //=> [ { centroid: [ 0.5 ], points: [ [Array], [Array] ], error: 1 },
 //=>   { centroid: [ 9.5 ], points: [ [Array], [Array] ], error: 1 } ]
```

#### To run graphic example execute command
```
$ npm run example
```

Live example is available https://mleko.gitlab.io/kmeans-clust/

### [License (MIT)](LICENSE.md)
