# 核心数据类型

## 一、节点模板 NodeProto

> 创建一个 `NodeProto` 的必要数据：名称，宽度，高度，唯一 id。

`NodeProto` 是 `node` 的模板，来自同一个 `NodeProto` 的 `Node` 都有相同的 `Port` 且这些 `Port` 的顺序也是相同的。

`NodeProto` 是一个抽象概念，但是需要用户进行定义。

## 二、节点实例 Node

> 创建一个 `Node` 的必要数据: 所属 `NodeProto` 的 id，名称，唯一 id。

`Node` 依赖 `NodeProto` 生成，每一个 `Node` 对应最后图数据中的一个节点实例。

## 三、连接端口 Port

> 创建一个 `Port` 的必要数据: 所属 `NodeProto` 的 id，名称，`Port` 类型， 唯一 id。

`Port` 是挂载在 `NodeProto` 上的端口数据, 其中 `Port` 类型可以分为 INPUT 和 OUTPUT。

INPUT 类型的 `Port` 只能作为 `Edge` 的终点，同理 OUTPUT 类型的 `Port` 只能作为 `Edge` 的起点。

且 INPUT 类型的 `Port` 固定在 `NodeProto` 左侧，OUTPUT 类型的 `Port` 固定在 `NodeProto` 右侧。


## 四、连接关系 Edge

> 创建一个 `Edge` 的必要数据: 起点 `Node` 指针或 id，起点 `Port` 指针或 id，终点 `Node` 指针或 id，终点 `Port` 指针或 id。

`Edge` 是两个 `Node` + `Port` 之间的连线，表示在图数据中两个 `Port` 的连接关系。

在执行完算法后，一个 `Edge` 会由一条或多条平行于X轴或Y轴的线段组成。

::: warning 为什么 Edge 需要同时关联 Node 和 Port？
`Port` 数据是关联在 `NodeProto` 上的，而 `NodeProto` 是一个抽象概念，无法对应最终图数据上的节点。

所以图数据中一个 `Port` 的实例需要 `Node` + `Port` 的数据来进行定位。

而 `Edge` 需要表现在图数据中，所以他关联的起点 Port 和终点 Port 也需要用 `Node` + `Port` 的数据来进行定位。
:::
