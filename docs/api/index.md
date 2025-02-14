# API 文档

## 概述

`Graph` 类管理节点和边的关系，所有操作都可以基于这个类完成

## 类

### `gui::protocol::Graph`

#### 公共成员函数

- `Graph()`
  - 构造函数。

- `std::shared_ptr<NodeProto> addNodeProto(const std::shared_ptr<NodeProto> &nodeProto)`
  - 使用 `NodeProto` 的指针添加 `NodeProto`。
  - 参数:
    - `nodeProto`: `NodeProto` 的指针。
  - 返回:
    - 添加的 `NodeProto` 的指针。

- `std::shared_ptr<NodeProto> addNodeProto(std::string name, double width, double height, int id)`
  - 使用参数添加 `NodeProto`。
  - 参数:
    - `name`: `NodeProto` 的名字。
    - `width`: `NodeProto` 的宽度。
    - `height`: `NodeProto` 的高度。
    - `id`: `NodeProto` 的 id, 用于标识 `NodeProto`, 不能重复。
  - 返回:
    - 添加的 `NodeProto` 的指针。

- `std::vector<std::shared_ptr<NodeProto>> &getNodeProtos()`
  - 获取所有 `NodeProto`。
  - 返回:
    - 所有 `NodeProto` 的引用。

- `std::shared_ptr<NodeProto> getDummyNodeProto()`
  - 获取 `DummyNode` 归属的 `NodeProto`，内部方法，不应该被外部调用。
  - 返回:
    - `DummyNode` 归属的 `NodeProto` 的指针。

- `std::shared_ptr<Port> addPort(std::string name, int id, PortType portType, int protoId)`
  - 使用参数添加 `Port`。
  - 参数:
    - `name`: `Port` 的名字。
    - `id`: `Port` 的 id, 用于标识 `Port`, 不能重复。
    - `portType`: `Port` 的类型, `INPUT` 或 `OUTPUT`。
    - `protoId`: 归属的 `NodeProto` 的 id。
  - 返回:
    - 添加的 `Port` 的指针。

- `std::vector<std::shared_ptr<Port>> &getPorts()`
  - 获取所有 `Port`。
  - 返回:
    - 所有 `Port` 的引用。

- `std::shared_ptr<Port> getPortById(int id)`
  - 根据 `port` 的 id 获取 `Port`。
  - 参数:
    - `id`: `Port` 的 id。
  - 返回:
    - 对应 id 的 `Port` 的指针。

- `void updateAllPortPos()`
  - 调用所有 `nodeProto` 的 `updatePortPos` 方法更新 `port` 的相对坐标。

- `std::shared_ptr<Node> addNode(const std::shared_ptr<Node> &node)`
  - 使用 `Node` 的指针添加 `Node`。
  - 参数:
    - `node`: `Node` 的指针。
  - 返回:
    - 添加的 `Node` 的指针。

- `std::shared_ptr<Node> addNode(int id, int protoId, std::string name)`
  - 使用参数添加 `Node`。
  - 参数:
    - `id`: `node` 的 id, 用于标识 `Node`, 不能重复。
    - `protoId`: `node` 归属的 `proto` 的 id。
    - `name`: `node` 的名字。
  - 返回:
    - 添加的 `Node` 的指针。

- `std::shared_ptr<Node> addNode(int id, int protoId, std::string name, NodeSide side)`
  - 使用参数添加固定层级的 `Node`。
  - 参数:
    - `id`: `node` 的 id, 用于标识 `Node`, 不能重复。
    - `protoId`: `node` 归属的 `proto` 的 id。
    - `name`: `node` 的名字。
    - `side`: 固定层级，可选择第一层或最后一层。
  - 返回:
    - 添加的 `Node` 的指针。

- `std::shared_ptr<Node> getNodeById(int id)`
  - 根据 id 获取 `Node`。
  - 参数:
    - `id`: `Node` 的 id。
  - 返回:
    - 对应 id 的 `Node` 的指针。

- `void removeNode(std::shared_ptr<Node> &node)`
  - 移除 `Node`, 内部方法，不应该被外部调用。
  - 参数:
    - `node`: `Node` 的指针。

- `std::shared_ptr<Edge> addEdge(std::shared_ptr<Edge> &edge)`
  - 使用 `Edge` 的指针添加 `Edge`。
  - 参数:
    - `edge`: `Edge` 的指针。
  - 返回:
    - 添加的 `Edge` 的指针。

- `std::shared_ptr<Edge> addEdge(std::shared_ptr<Node> &srcNode, std::shared_ptr<Port> &srcPort, std::shared_ptr<Node> &dstNode, std::shared_ptr<Port> &dstPort, std::string name)`
  - 使用参数添加 `Edge`。
  - 参数:
    - `srcNode`: 起点 `Node` 的指针。
    - `srcPort`: 起点 `Port` 的指针。
    - `dstNode`: 终点 `Node` 的指针。
    - `dstPort`: 终点 `Port` 的指针。
    - `name`: `Edge` 的名字。
  - 返回:
    - 添加的 `Edge` 的指针。

- `std::shared_ptr<Edge> addEdge(int srcNodeId, int srcPortId, int dstNodeId, int dstPortId, std::string name)`
  - 使用参数添加 `Edge`。
  - 参数:
    - `srcNodeId`: 起点 `Node` 的 id。
    - `srcPortId`: 起点 `Port` 的 id。
    - `dstNodeId`: 终点 `Node` 的 id。
    - `dstPortId`: 终点 `Port` 的 id。
    - `name`: `Edge` 的名字。
  - 返回:
    - 添加的 `Edge` 的指针。

- `void removeEdge(std::shared_ptr<Edge> &edge)`
  - 删除 `Edge`, 内部方法，不应该被外部调用。
  - 参数:
    - `edge`: `Edge` 的指针。

- `std::vector<std::shared_ptr<Node>> &getNodes()`
  - 获取所有 `Node`。
  - 返回:
    - 所有 `Node` 的引用。

- `std::vector<std::shared_ptr<Edge>> &getEdges()`
  - 获取所有 `Edge`。
  - 返回:
    - 所有 `Edge` 的引用。

- `std::vector<std::shared_ptr<Layer>> &getLayers()`
  - 获取所有 `Layer`。
  - 返回:
    - 所有 `Layer` 的引用。

- `void addLayers(const std::shared_ptr<Layer> &layer)`
  - 在当前 `layers` 数组尾部再添加一层 `Layer`, 内部方法，不应该被外部调用。
  - 参数:
    - `layer`: `Layer` 的指针。

- `std::vector<std::shared_ptr<Node>> &getLayerlessNodes()`
  - 获取当前还没分配层级的 `Node`，内部方法，不应该被外部调用。
  - 返回:
    - 所有还没分配层级的 `Node` 的引用。

- `std::vector<std::shared_ptr<Node>> &getHiddenNodes()`
  - 内部方法，不应该被外部调用。
  - 返回:
    - 所有隐藏的 `Node` 的引用。

- `void setHiddenNodes(std::vector<std::shared_ptr<Node>> &nodes)`
  - 内部方法，不应该被外部调用。
  - 参数:
    - `nodes`: 隐藏的 `Node` 的引用。

- `std::vector<std::vector<std::shared_ptr<Node>>> toNodeArray()`
  - 获取 `Node` 从左到右，从上到下的二维数组。
  - 返回:
    - `Node` 的二维数组。

- `nlohmann::json json()`
  - 以 `JSON` 形式输出数据。
  - 返回:
    - `JSON` 数据。
