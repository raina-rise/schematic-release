# 快速开始

## 一、依赖的数据

用户需要准备好程序所需的核心数据, 参考 [[核心数据]](data.md) 章节

## 二、下载 raina-schematic

在最新版的 Release 页面中进行下载: https://github.com/raina-rise/schematic-release/releases/latest

其中 raina-schematic 为 linux 环境下的 bin 文件(暂时还不支持 windows 和 mac 的可执行文件)

schematic-release.tar.gz 是一个 c++ 工程的静态链接库，其中包含 c++ 头文件和 .a 文件，用于在 c++ 工程中进行引入

## 三、bin 文件使用

在 Github 的 Release 中下载 raina-schematic 文件后，在命令行中通过

```shell
./raina-schematic -f data.txt
```

进行调用。

在启动命令中，调用了 data.txt 文件，这是一个模板文件，用户数据通过这个模板文件传输给程序。

该文件的格式: 参考 [[模板文件]](temp.md) 章节。

### 程序输出

程序输出的数据是以 json 格式解析的，其类型如下:

```typescript
{
    "edges": {
        "dst": string; // 终点 node 名称
        "dstX": number; // 终点 x 坐标
        "dstY": number; // 终点 y 坐标
        "name": string; // 初始化 edge 时传入的名称
        "src": string; // 起点 node 名称
        "srcX": number; // 起点 x 坐标
        "srcY": number; // 起点 y 坐标
        "bendPoints": { // 转折点，从 src 为起点，依次经过该数组中每个坐标，最后到达 dst 坐标
            "x": number; // x 坐标
            "y": number; // y 坐标
        }[];
    }[];
    "nodes": {
        "height": number; // node 的高度
        "name": string; // 初始化 node 时传入的名称
        "ports": {  // port 数据
            "name": string; // 初始化 port 时传入的名称
            "x": number; // port 在图中的 x 坐标
            "y": number; // port 在图中的 y 坐标
        }[];
        "width": number; // node 的宽度
        "x": number; // x 坐标
        "y": number; // y 坐标
    }[];
}
```

## 四、静态链接库使用

在 Github 的 Release 中下载 schematic-release.tar.gz 文件后，解压缩后将头文件和 .a 文件根据自己项目的情况引入到项目中。

:::warning 注意事项
raina-schematic 的头文件中依赖了 `nlohmann/json` 库，需要自己额外在项目中也引入一下
:::

```c++
// 以下头文件来自 raina-schematic
#include "include/Graph.h"
#include "include/LayeredEnginee.h"
#include "include/Node.h"
#include "include/NodeProto.h"
#include "include/Port.h"
#include "include/utils/VectorUtil.h"

int main() {

    auto graph = std::make_shared<gui::protocol::Graph>();
    auto enginee = std::make_shared<gui::protocol::LayeredEnginee>(graph);

    // 为 graph 添加 NodeProto
    graph->addNodeProto("nodeproto1", 80, 80, 0);

    // 为 graph 添加 Port
    graph->addPort("port1", 0, gui::protocol::PortType::OUTPUT, 0);
    graph->addPort("port2", 1, gui::protocol::PortType::INPUT, 0);

    // 为 graph 添加 Node
    graph->addNode(0, 0, "node1");
    graph->addNode(1, 0, "node2");

    // 为 graph 添加 Edge
    graph->addEdge(0, 0, 1, 1,"edge1");
    graph->addEdge(1, 0, 0, 1,"edge2");


    // 执行算法
    enginee->layered();

    // 输出结果数据
    for (auto &node : graph->getNodes()) {
        std::cout << node->name, node->getPos().x << node->getPos().y << node->getSize().x << node->getSize().y << std::endl;
    }
    for (auto &edge : graph->getEdges()) {
        auto lines = edge->getLines();
        for(auto &line: lines) {
            std::cout << edge->name << line->first.x << line-> first.y << line->second.x << line->second.y  << std::endl;
        }
    }

    return 0;
}


```
