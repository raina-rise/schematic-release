# Quick Start

## 1. Required Data

Users need to prepare the core data required by the program, refer to the [[Core Data]](data.md) section.

## 2. Download raina-schematic

Download from the latest Release page: https://github.com/raina-rise/schematic-release/releases/latest

The raina-schematic is a binary file for the Linux environment (Windows and Mac executable files are not supported yet).

schematic-release.tar.gz is a static link library for a C++ project, which includes C++ header files and .a files for inclusion in a C++ project.

## 3. Using the Binary File

After downloading the raina-schematic file from the GitHub Release, call it in the command line with

```shell
./raina-schematic -f data.txt
```

In the startup command, the data.txt file is called, which is a template file that transmits user data to the program.

The format of this file: refer to the [[Template File]](temp.md) section.

### Program Output

The output data of the program is parsed in JSON format, and its type is as follows:

```typescript
{
    "edges": {
        "dst": string; // Destination node name
        "dstX": number; // Destination x coordinate
        "dstY": number; // Destination y coordinate
        "name": string; // Name passed in when initializing the edge
        "src": string; // Source node name
        "srcX": number; // Source x coordinate
        "srcY": number; // Source y coordinate
        "bendPoints": { // Bend points, starting from src, passing through each coordinate in this array in sequence, and finally reaching the dst coordinate
            "x": number; // x coordinate
            "y": number; // y coordinate
        }[];
    }[];
    "nodes": {
        "height": number; // Node height
        "name": string; // Name passed in when initializing the node
        "ports": {  // Port data
            "name": string; // Name passed in when initializing the port
            "x": number; // x coordinate of the port in the graph
            "y": number; // y coordinate of the port in the graph
        }[];
        "width": number; // Node width
        "x": number; // x coordinate
        "y": number; // y coordinate
    }[];
}
```

## 4. Using the Static Link Library

After downloading the schematic-release.tar.gz file from the GitHub Release, decompress it and include the header files and .a files into your project according to your project's situation.

:::warning Note
The header files of raina-schematic depend on the `nlohmann/json` library, which needs to be additionally included in your project.
:::

```c++
// The following header files are from raina-schematic
#include "include/Graph.h"
#include "include/LayeredEnginee.h"
#include "include/Node.h"
#include "include/NodeProto.h"
#include "include/Port.h"
#include "include/utils/VectorUtil.h"

int main() {

    auto graph = std::make_shared<gui::protocol::Graph>();
    auto enginee = std::make_shared<gui::protocol::LayeredEnginee>(graph);

    // Add NodeProto to graph
    graph->addNodeProto("nodeproto1", 80, 80, 0);

    // Add Port to graph
    graph->addPort("port1", 0, gui::protocol::PortType::OUTPUT, 0);
    graph->addPort("port2", 1, gui::protocol::PortType::INPUT, 0);

    // Add Node to graph
    graph->addNode(0, 0, "node1");
    graph->addNode(1, 0, "node2");

    // Add Edge to graph
    graph->addEdge(0, 0, 1, 1,"edge1");
    graph->addEdge(1, 0, 0, 1,"edge2");

    // Execute the algorithm
    enginee->layered();

    // Output the result data
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
