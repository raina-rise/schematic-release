# API 使用说明

## 调用示例

```cpp
#include "schematic/include/Graph.h"
#include "schematic/include/LayeredEnginee.h"
#include "schematic/include/Node.h"
#include "schematic/include/NodeProto.h"
#include "schematic/include/Port.h"
#include "schematic/include/utils/VectorUtil.h"

std::shared_ptr<gui::protocol::Graph> runSchematic() {
    auto graph = std::make_shared<gui::protocol::Graph>();
    auto enginee = std::make_shared<gui::protocol::LayeredEnginee>(graph);
    int protoId = 1;
    graph->addNodeProto("nodeProtoName", 80, 20, protoId);
    auto port = graph->addPort(pinHN, portId++, gui::protocol::PortType::OUTPUT, protoId);
    auto node = graph->addNode(nodeId++, protoId, cellHN, gui::protocol::NodeSide::FIRST_SEPARATE);

    graph->addEdge(outport.node, outport.port, inport.node, inport.port, netHandleName);

    enginee->layered();
    return enginee->getGraph();
}
```

## Edge.h

### Edge 类

- **构造函数**

  ```cpp
  Edge(std::shared_ptr<Node> &srcNode, std::shared_ptr<Port> &srcPort, std::shared_ptr<Node> &dstNode, std::shared_ptr<Port> &dstPort, std::string name);
  ```

- **方法**
  ```cpp
  EdgeTarget getSrc();
  EdgeTarget getDst();
  EdgeTarget getOther(const std::shared_ptr<Node> &someNode);
  EdgeTarget getOther(EdgeTarget &edgeTarget);
  void setSrc(EdgeTarget &nextSrc);
  void setDst(EdgeTarget &nextDst);
  KVector getSrcPoint();
  KVector getDstPoint();
  KVectorChain &getBendPoints();
  std::vector<Line> getLines();
  int countIntersections(std::shared_ptr<Edge> &edge);
  std::pair<int, std::vector<KVector>> getIntersections(std::shared_ptr<Edge> &edge);
  bool isInLayerEdge();
  nlohmann::json json();
  void hidden();
  void show();
  bool isReverse();
  static std::optional<KVector> getIntersection(const Line &line1, const Line &line2);
  ```

## Graph.h

### Graph 类

- **构造函数**

  ```cpp
  Graph();
  ```

- **方法**
  ```cpp
  std::shared_ptr<NodeProto> addNodeProto(const std::shared_ptr<NodeProto> &nodeProto);
  std::shared_ptr<NodeProto> addNodeProto(std::string name, double width, double height, int id);
  std::vector<std::shared_ptr<NodeProto>> &getNodeProtos();
  std::shared_ptr<NodeProto> getDummyNodeProto();
  std::shared_ptr<Port> addPort(std::string name, int id, PortType portType, int protoId);
  std::vector<std::shared_ptr<Port>> &getPorts();
  std::shared_ptr<Port> getPortById(int id);
  void updateAllPortPos();
  std::shared_ptr<Node> addNode(const std::shared_ptr<Node> &node);
  std::shared_ptr<Node> addNode(int id, int protoId, std::string name);
  std::shared_ptr<Node> addNode(int id, int protoId, std::string name, NodeSide side);
  std::shared_ptr<Node> getNodeById(int id);
  void removeNode(std::shared_ptr<Node> &node);
  std::shared_ptr<Edge> addEdge(std::shared_ptr<Edge> &edge);
  std::shared_ptr<Edge> addEdge(std::shared_ptr<Node> &srcNode, std::shared_ptr<Port> &srcPort, std::shared_ptr<Node> &dstNode, std::shared_ptr<Port> &dstPort, std::string name);
  std::shared_ptr<Edge> addEdge(int srcNodeId, int srcPortId, int dstNodeId, int dstPortId, std::string name);
  void removeEdge(std::shared_ptr<Edge> &edge);
  std::vector<std::shared_ptr<Node>> &getNodes();
  std::vector<std::shared_ptr<Edge>> &getEdges();
  std::vector<std::shared_ptr<Layer>> &getLayers();
  void addLayers(const std::shared_ptr<Layer> &layer);
  std::vector<std::shared_ptr<Node>> &getLayerlessNodes();
  std::vector<std::shared_ptr<Node>> &getHiddenNodes();
  void setHiddenNodes(std::vector<std::shared_ptr<Node>> &nodes);
  std::vector<std::vector<std::shared_ptr<Node>>> toNodeArray();
  nlohmann::json json();
  ```

## Node.h

### Node 类

- **构造函数**

  ```cpp
  explicit Node(std::string name, std::shared_ptr<NodeProto> &proto, int _id);
  Node(std::string name, std::shared_ptr<NodeProto> &proto, int _id, NodeSide side);
  ```

- **方法**
  ```cpp
  int getId() const;
  void setId(int id);
  std::shared_ptr<NodeProto> getProto();
  KVector &getSize();
  std::vector<std::shared_ptr<Port>> &getInputPorts();
  std::vector<std::shared_ptr<Port>> &getOutputPorts();
  std::vector<std::shared_ptr<Port>> getAllPorts();
  std::vector<std::shared_ptr<Port>> &getPortsByPortType(PortType type);
  std::vector<EdgeTarget> getConnectedPorts(std::shared_ptr<Port> &port);
  KVector getPortPos(std::shared_ptr<Port> &port);
  std::vector<std::shared_ptr<Edge>> getEdges();
  std::vector<std::shared_ptr<Edge>> getIncomingEdges();
  std::vector<std::shared_ptr<Edge>> getOutgoingEdges();
  std::vector<std::shared_ptr<Edge>> getEdgesByPort(const std::shared_ptr<Port> &port);
  void addEdge(std::shared_ptr<Port> &port, std::shared_ptr<Edge> &edge);
  void removeEdge(std::shared_ptr<Port> &port, std::shared_ptr<Edge> &edge);
  std::shared_ptr<Layer> &getLayer();
  NodeSide getSide();
  void setSide(NodeSide nextSide);
  HiddenNodeConnections::Connection getHiddenNodeConnections();
  void setHiddenNodeConnections(HiddenNodeConnections::Connection &connections);
  void setLayer(const std::shared_ptr<Layer> &layer);
  nlohmann::json json();
  void setDummy(const std::shared_ptr<Edge> &dummyOrigin);
  void setDummySource(const std::shared_ptr<Port> &dummySource);
  void setDummyTarget(const std::shared_ptr<Port> &dummyTarget);
  ```

## NodeProto.h

### NodeProto 类

- **构造函数**

  ```cpp
  NodeProto(std::string name, double width, double height, int id);
  ```

- **方法**
  ```cpp
  std::shared_ptr<Port> addPort(std::string portName, int id, PortType portType);
  void updatePortPos();
  ```

## Port.h

### Port 类

- **构造函数**

  ```cpp
  explicit Port(std::string name, int _id, PortType portType);
  ```

- **方法**
  ```cpp
  KVector getAnchor();
  nlohmann::json json();
  ```
