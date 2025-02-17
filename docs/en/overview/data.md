# Core Data Types

## 0. Overview

If the following data needs to be created:

![relate-demo](../../img/relate-demo.jpg)

Assuming there are 4 components in the graph divided into three types, where B and C are of the same type.

The process of creating core data is as follows:

- First, create 3 `NodeProto` corresponding to

  - Component A (named protoA)
  - Components B and C (named protoBC)
  - Component D (named protoD)

- Second, create `Port`. According to the relationships in the graph, it can be seen that protoA has one input port and two output ports, so create portA1 as an INPUT type port for protoA, and then create portA2 and portA3 as OUTPUT type ports. Similarly, create ports for protoBC and protoD in the same way.

- Third, create `Node`. Create NodeA, NodeB, NodeC, and NodeD corresponding to the four nodes in the graph. When creating them, only the associated `NodeProto` needs to be passed in.

- Fourth, create `Edge`. According to the relationships in the graph, it can be seen that the `Edge` connecting NodeA and NodeB has a starting position of `NodeA`+`portA2` and an ending position of `NodeB`+`portB1`. Use these two positions to create an `Edge`, and other `Edges` are created in the same way.

## 1. Node Template NodeProto

> Necessary data to create a `NodeProto`: name, width, height, unique id.

`NodeProto` is a template for `node`. Nodes from the same `NodeProto` have the same `Port` and the order of these `Ports` is also the same.

`NodeProto` is an abstract concept but needs to be defined by the user.

## 2. Node Instance Node

> Necessary data to create a `Node`: id of the associated `NodeProto`, name, unique id.

`Node` is generated based on `NodeProto`. Each `Node` corresponds to a node instance in the final graph data.

## 3. Connection Port Port

> Necessary data to create a `Port`: id of the associated `NodeProto`, name, `Port` type, unique id.

`Port` is the port data mounted on `NodeProto`. The `Port` type can be INPUT or OUTPUT.

INPUT type `Ports` can only be used as the destination of an `Edge`, and OUTPUT type `Ports` can only be used as the source of an `Edge`.

INPUT type `Ports` are fixed on the left side of `NodeProto`, and OUTPUT type `Ports` are fixed on the right side of `NodeProto`.

## 4. Connection Relationship Edge

> Necessary data to create an `Edge`: starting `Node` pointer or id, starting `Port` pointer or id, ending `Node` pointer or id, ending `Port` pointer or id.

`Edge` is the connection between two `Node` + `Port`, representing the connection relationship between two `Ports` in the graph data.

After the algorithm is executed, an `Edge` will consist of one or more line segments parallel to the X-axis or Y-axis.

::: warning Why does Edge need to associate both Node and Port?
`Port` data is associated with `NodeProto`, and `NodeProto` is an abstract concept that cannot correspond to the final node in the graph data.

Therefore, an instance of a `Port` in the graph data needs the data of `Node` + `Port` for positioning.

Since `Edge` needs to be represented in the graph data, the starting and ending Ports it associates with also need the data of `Node` + `Port` for positioning.
:::
