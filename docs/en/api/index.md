# API Documentation

## Graph.h

### Overview

The `Graph` class manages the relationships between nodes and edges, and all operations can be performed based on this class.

### Namespace

- `gui::protocol`

### Public Member Functions

- `Graph()`
  - Constructor.

- `std::shared_ptr<NodeProto> addNodeProto(const std::shared_ptr<NodeProto> &nodeProto)`
  - Add `NodeProto` using a pointer to `NodeProto`.
  - Parameters:
    - `nodeProto`: Pointer to `NodeProto`.
  - Returns:
    - Pointer to the added `NodeProto`.

- `std::shared_ptr<NodeProto> addNodeProto(std::string name, double width, double height, int id)`
  - Add `NodeProto` using parameters.
  - Parameters:
    - `name`: Name of the `NodeProto`.
    - `width`: Width of the `NodeProto`.
    - `height`: Height of the `NodeProto`.
    - `id`: ID of the `NodeProto`, used to identify `NodeProto`, must be unique.
  - Returns:
    - Pointer to the added `NodeProto`.

- `std::vector<std::shared_ptr<NodeProto>> &getNodeProtos()`
  - Get all `NodeProto`.
  - Returns:
    - Reference to all `NodeProto`.

- `std::shared_ptr<NodeProto> getDummyNodeProto()`
  - Get the `NodeProto` to which the `DummyNode` belongs, internal method, should not be called externally.
  - Returns:
    - Pointer to the `NodeProto` to which the `DummyNode` belongs.

- `std::shared_ptr<Port> addPort(std::string name, int id, PortType portType, int protoId)`
  - Add `Port` using parameters.
  - Parameters:
    - `name`: Name of the `Port`.
    - `id`: ID of the `Port`, used to identify `Port`, must be unique.
    - `portType`: Type of the `Port`, `INPUT` or `OUTPUT`.
    - `protoId`: ID of the `NodeProto` to which it belongs.
  - Returns:
    - Pointer to the added `Port`.

- `std::vector<std::shared_ptr<Port>> &getPorts()`
  - Get all `Port`.
  - Returns:
    - Reference to all `Port`.

- `std::shared_ptr<Port> getPortById(int id)`
  - Get `Port` by its ID.
  - Parameters:
    - `id`: ID of the `Port`.
  - Returns:
    - Pointer to the `Port` with the corresponding ID.

- `void updateAllPortPos()`
  - Call the `updatePortPos` method of all `nodeProto` to update the relative coordinates of `port`.

- `std::shared_ptr<Node> addNode(const std::shared_ptr<Node> &node)`
  - Add `Node` using a pointer to `Node`.
  - Parameters:
    - `node`: Pointer to `Node`.
  - Returns:
    - Pointer to the added `Node`.

- `std::shared_ptr<Node> addNode(int id, int protoId, std::string name)`
  - Add `Node` using parameters.
  - Parameters:
    - `id`: ID of the `node`, used to identify `Node`, must be unique.
    - `protoId`: ID of the `proto` to which the `node` belongs.
    - `name`: Name of the `node`.
  - Returns:
    - Pointer to the added `Node`.

- `std::shared_ptr<Node> addNode(int id, int protoId, std::string name, NodeSide side)`
  - Add a fixed-level `Node` using parameters.
  - Parameters:
    - `id`: ID of the `node`, used to identify `Node`, must be unique.
    - `protoId`: ID of the `proto` to which the `node` belongs.
    - `name`: Name of the `node`.
    - `side`: Fixed level, can be the first or last level.
  - Returns:
    - Pointer to the added `Node`.

- `std::shared_ptr<Node> getNodeById(int id)`
  - Get `Node` by its ID.
  - Parameters:
    - `id`: ID of the `Node`.
  - Returns:
    - Pointer to the `Node` with the corresponding ID.

- `void removeNode(std::shared_ptr<Node> &node)`
  - Remove `Node`, internal method, should not be called externally.
  - Parameters:
    - `node`: Pointer to `Node`.

- `std::shared_ptr<Edge> addEdge(std::shared_ptr<Edge> &edge)`
  - Add `Edge` using a pointer to `Edge`.
  - Parameters:
    - `edge`: Pointer to `Edge`.
  - Returns:
    - Pointer to the added `Edge`.

- `std::shared_ptr<Edge> addEdge(std::shared_ptr<Node> &srcNode, std::shared_ptr<Port> &srcPort, std::shared_ptr<Node> &dstNode, std::shared_ptr<Port> &dstPort, std::string name)`
  - Add `Edge` using parameters.
  - Parameters:
    - `srcNode`: Pointer to the source `Node`.
    - `srcPort`: Pointer to the source `Port`.
    - `dstNode`: Pointer to the destination `Node`.
    - `dstPort`: Pointer to the destination `Port`.
    - `name`: Name of the `Edge`.
  - Returns:
    - Pointer to the added `Edge`.

- `std::shared_ptr<Edge> addEdge(int srcNodeId, int srcPortId, int dstNodeId, int dstPortId, std::string name)`
  - Add `Edge` using parameters.
  - Parameters:
    - `srcNodeId`: ID of the source `Node`.
    - `srcPortId`: ID of the source `Port`.
    - `dstNodeId`: ID of the destination `Node`.
    - `dstPortId`: ID of the destination `Port`.
    - `name`: Name of the `Edge`.
  - Returns:
    - Pointer to the added `Edge`.

- `void removeEdge(std::shared_ptr<Edge> &edge)`
  - Remove `Edge`, internal method, should not be called externally.
  - Parameters:
    - `edge`: Pointer to `Edge`.

- `std::vector<std::shared_ptr<Node>> &getNodes()`
  - Get all `Node`.
  - Returns:
    - Reference to all `Node`.

- `std::vector<std::shared_ptr<Edge>> &getEdges()`
  - Get all `Edge`.
  - Returns:
    - Reference to all `Edge`.

- `std::vector<std::shared_ptr<Layer>> &getLayers()`
  - Get all `Layer`.
  - Returns:
    - Reference to all `Layer`.

- `void addLayers(const std::shared_ptr<Layer> &layer)`
  - Add a `Layer` to the end of the current `layers` array, internal method, should not be called externally.
  - Parameters:
    - `layer`: Pointer to `Layer`.

- `std::vector<std::shared_ptr<Node>> &getLayerlessNodes()`
  - Get `Node` that have not yet been assigned a level, internal method, should not be called externally.
  - Returns:
    - Reference to all `Node` that have not yet been assigned a level.

- `std::vector<std::shared_ptr<Node>> &getHiddenNodes()`
  - Internal method, should not be called externally.
  - Returns:
    - Reference to all hidden `Node`.

- `void setHiddenNodes(std::vector<std::shared_ptr<Node>> &nodes)`
  - Internal method, should not be called externally.
  - Parameters:
    - `nodes`: Reference to hidden `Node`.

- `std::vector<std::vector<std::shared_ptr<Node>>> toNodeArray()`
  - Get a 2D array of `Node` from left to right, top to bottom.
  - Returns:
    - 2D array of `Node`.

- `nlohmann::json json()`
  - Output data in `JSON` format.
  - Returns:
    - `JSON` data.


## LayeredEngine.h

### Overview

This file contains the definition of the `LayeredEngine` class and its related structures, used for symbol library data and layout algorithms.

### Namespace

- `gui::protocol`

### Structs

#### SymbolPortItem

Port structure of the symbol library data.

##### Member Variables

- `std::string name`  
  Port name
- `float x`  
  Port x coordinate
- `float y`  
  Port y coordinate

##### Constructor

```cpp
SymbolPortItem(std::string name, float x, float y);
```

- `name`  
  Port name
- `x`  
  Port x coordinate
- `y`  
  Port y coordinate

#### SymbolItem

Symbol library data structure.

##### Member Variables

- `std::string name`  
  Symbol name
- `float width`  
  Symbol width
- `float height`  
  Symbol height
- `std::vector<SymbolPortItem> ports`  
  List of symbol ports

##### Constructor

```cpp
explicit SymbolItem(std::string name, float width, float height);
```

- `name`  
  Symbol name
- `width`  
  Symbol width
- `height`  
  Symbol height

### Class

#### LayeredEngine

Algorithm engine class.

##### Member Functions

```cpp
explicit LayeredEngine(const std::shared_ptr<Graph> &graph);
```

- `graph`  
  Shared pointer to the graph object

```cpp
explicit LayeredEngine(const std::filesystem::path &path);
```

- `path`  
  File path

```cpp
void layered();
```

Start the layout algorithm.

```cpp
nlohmann::json printJson(const std::filesystem::path &path);
```

- `path`  
  File path

Return JSON data.

```cpp
std::shared_ptr<Graph> getGraph();
```

Return a shared pointer to the graph object.

```cpp
std::vector<SymbolItem> getSymbols(const std::filesystem::path &path);
```

- `path`  
  File path

Return a list of symbols.

##### Member Variables

- `std::shared_ptr<Graph> graph`  
  Shared pointer to the graph object
- `std::unordered_map<std::shared_ptr<Node>, int> layer`  
  Node layer mapping
