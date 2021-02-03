# 📙 Documentation

## ✍ Test Case(s)
**Single Test Case**

`default: 0`
Output File doesn't include the test case number.

**Multi Test Cases**

`range:` ![range](https://latex.codecogs.com/svg.latex?\normal%20[1,%2010^{6}-1])

Output File contains the count of the total test case(s)

## ⚙️ Size Constraints

### Numbers
Numeric range: ![range](https://latex.codecogs.com/svg.latex?\normal%20[-5\cdot10^{18},%205\cdot10^{18}])

### Strings
String length range: ![range](https://latex.codecogs.com/svg.latex?\normal%20[1,%2010^{7}])

<!-- `(total no of test cases) * (sum of length of all the string over all test cases) <= 10^7` -->

![condition](https://latex.codecogs.com/svg.latex?\normal%20(\text{total}\enspace%20\text{no}\enspace%20\text{of}\enspace%20\text{test}\enspace%20\text{cases})%20\cdot%20(\text{sum}\enspace%20\text{of}\enspace%20\text{length}\enspace%20\text{of}\enspace%20\text{all}\enspace%20\text{the}\enspace%20\text{string}\enspace%20\text{over}\enspace%20\text{all}\enspace%20\text{test}\enspace%20\text{cases})%20\le{10^7})

### Arrays

Array size range: ![range](https://latex.codecogs.com/svg.latex?\normal%20[1,%2010^{7}])

<!-- `(total no of test cases) * (sum of size of array over all test cases) <= 10^7` -->


![condition](https://latex.codecogs.com/svg.latex?\normal%20(\text{total}\enspace%20\text{no}\enspace%20\text{of}\enspace%20\text{test}\enspace%20\text{cases})%20\cdot%20(\text{sum}\enspace%20\text{of}\enspace%20\text{size}\enspace%20\text{of}\enspace%20\text{array}\enspace%20\text{over}\enspace%20\text{all}\enspace%20\text{test}\enspace%20\text{cases})%20\le{10^7})


### Grids
maximum possible size: ![max-size](https://latex.codecogs.com/svg.latex?\normal%205000\cdot5000)

<!-- `(total no of test cases) * (sum of dimentions of grid over all test cases) <= 10^7` -->

![condition](https://latex.codecogs.com/svg.latex?\normal%20(\text{total}\enspace%20\text{no}\enspace%20\text{of}\enspace%20\text{test}\enspace%20\text{cases})%20\cdot%20(\text{sum}\enspace%20\text{of}\enspace%20\text{dimention}\enspace%20\text{of}\enspace%20\text{grid}\enspace%20\text{over}\enspace%20\text{all}\enspace%20\text{test}\enspace%20\text{cases})%20\le{10^7})

### Trees

maximum possible nodes: ![max-size](https://latex.codecogs.com/svg.latex?\normal%2010^{7})

<!-- `(total no of test cases) * (sum of nodes over all test cases) <= 10^7` -->

![condition](https://latex.codecogs.com/svg.latex?\normal%20(\text{total}\enspace%20\text{no}\enspace%20\text{of}\enspace%20\text{test}\enspace%20\text{cases})%20\cdot%20(\text{sum}\enspace%20\text{of}\enspace%20\text{edges}\enspace%20\text{over}\enspace%20\text{all}\enspace%20\text{test}\enspace%20\text{cases})%20\le{10^7})


### Graphs

maximum possible nodes: ![max-size](https://latex.codecogs.com/svg.latex?\normal%2010^{6})

maximum possible edges: ![max-size](https://latex.codecogs.com/svg.latex?\normal%2010^{6})

![edges range](https://latex.codecogs.com/svg.latex?1\le%20E%20\le%20\frac{N%20\cdot%20(N+1)}{2})

<!-- `(total no of test cases) * (sum of edges over all test cases) <= 10^7` -->

![condition](https://latex.codecogs.com/svg.latex?\normal%20(\text{total}\enspace%20\text{no}\enspace%20\text{of}\enspace%20\text{test}\enspace%20\text{cases})%20\cdot%20(\text{sum}\enspace%20\text{of}\enspace%20\text{edges}\enspace%20\text{over}\enspace%20\text{all}\enspace%20\text{test}\enspace%20\text{cases})%20\le{10^7})


## 📝 Examples

### Array of Strings
> Array of size N containing `Bob` or `Alice` as Elements

```
$ test-gen
? Enter the Input file name in.txt
? Enter the number of test cases 10
? Choose type of test cases String
? Enter Pattern as Regular Expression (Alice|Bob)
✔ Input file successfully created!!
```

### Graph
```
$ test-gen
? Enter the Input file name input.txt
? Enter the number of test cases 10
? Choose type of test cases Graph
? Type of tree Directed Weighted Graph
? Enter the nodes range [separated by comma] 10,40
? Enter the edges range [separated by comma] 40,80
? Enter the weight range [separated by comma] 1000,2000
✔ Input file successfully created!!
```

### Grid of Fractions
> Generate a random grid of `#` or `*` of size 10*10

```
$ test-gen
? Enter the Input file name input.txt
? Enter the number of test cases 50
? Choose type of test cases Grid
? Enter minimum dimention of grid [comma separated] 10,10
? Enter maximum dimention of grid [comma separated] 10,10
? How do you want to generate array? Using Regular Expression
? Enter Pattern as Regular Expression \*|\#
✔ Input file successfully created!!
```

> 💡 To generate inputs of fix size use maximum and mimimum size limits same.

## 🏷 Output Formats
### Permutation Array
* First line of each test case contains a single integer `N`, denoting the size of Permutation Array.
* The second line of each test case contains `N` integer `(1 ≤ P ≤ N)` - the Permutation Array

### Unweighted Tree
* First line of each test case contains total number of Nodes in a Tree, Say `N`
* The following `N−1` lines each contain two space-separated integers `U` and `V` `(1≤U,V≤N)`, denoting an edge from `U` to `V`

### Weighted Tree
* First line of each test case contains total number of Nodes in a Tree, Say `N`
* The following `N−1` lines each contain three space-separated integers `U`, `V` and `Weight` `(1≤U,V≤N)`, denoting endpoints of the edge and its weight respectively.

### Undirected/Directed Unwieghted Graphs
* First line of each test case contains two space-separated integers `N` and `E`, denoting the total number of nodes and edges, respectively.
* The following `E` lines each cotain two space-separated integers `U` and `V` `(1≤U,V≤N)`, denoting an edge from `U` to `V`

### Directed Weighted Graph
* First line of each test case contains two space-separated integers `N` and `E`, denoting the total number of nodes and edges, respectively.
* The following `E` lines each cotain three space-separated integers `U`, `V` and `Weight` `(1≤U,V≤N)`, denoting endpoints of the edge and its weight respectively.

> **Note:** Output format of other input-type is straight forward.

## 🚧 Under Development
* Generating random test with the seed value
* Test generator for a DAG

## 🐛 Known Issues
Negative lookaheads don't affect while generating random string from Pattern(Regex) [issue #18](https://github.com/fent/randexp.js/issues/18)
