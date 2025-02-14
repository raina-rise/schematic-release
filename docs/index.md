# 项目简介

`raina-schematic`(https://github.com/raina-rise/schematic) 是一个 EDA 领域中计算 schematic 布局布线的相对最优解的工具。

## 一、目标是什么

`raina-schematic` 的目标是接受不具备位置信息的原始数据后，根据连接关系，生成足以描述出如下视图的数据:

![demo](img/demo.png)

其中必要的原始数据包括 `节点(Node)`, `端口(Port)`, `连接(Edge)`。 



## 二、 指标

判断程序优劣的指标主要有

1. 连接线交叉数
2. 连接线拐弯数
3. 视觉效果

其中1,2条可以通过统计迅速进行判断，第三条比较抽象，但业界也有相关的bp可以进行参考。


## 二、核心机制

### 2.1 核心数据类型

#### 节点模板 NodeProto

`NodeProto` 是 `node` 的模板，来自同一个 `NodeProto` 的 `Node` 都有相同的 `Port` 且这些 `Port` 的顺序也是相同的。

`NodeProto` 是一个虚的概念，但是需要用户进行定义。

#### 节点实例 Node

`Node` 依赖 `NodeProto` 生成，每一个 `Node` 对应最后图数据中的一个节点实例。

#### 连接端口 Port

`Port` 是挂载在 `NodeProto` 上的端口数据，用于


所有 `连接关系(Edge)` 必须是两个 `Node` + `Port` 之间的连线。












`raina-schematic` 需要用户定义好 `节点模板(NodeProto)`, `节点(Node)`, `端口(Port)`, `连接线(Edge)` 的数据，然后输出给用户足以渲染成以下图片的数据



`raina-schematic` 支持使用 bin 文件，通过配置文件的形式输入原始数据，并输出 json，也支持通过静态链接库的形式，引入 includes 和 .a 文件，在程序中内部进行调用。
