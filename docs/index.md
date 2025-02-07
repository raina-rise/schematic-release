# Overview

`raina-schematic` 是一个 EDA 领域中计算 schematic 布局布线的相对最优解的工具。

`raina-schematic` 需要用户定义好 `节点模板(NodeProto)`, `节点(Node)`, `端口(Port)`, `连接线(Edge)` 的数据，然后输出给用户足以渲染成以下图片的数据

![demo](img/demo.png)

`raina-schematic` 支持使用 bin 文件，通过配置文件的形式输入原始数据，并输出 json，也支持通过静态链接库的形式，引入 includes 和 .a 文件，在程序中内部进行调用。
