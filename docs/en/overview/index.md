# Project Overview

`raina-schematic`(https://github.com/raina-rise/schematic) is a tool in the EDA field for calculating the relatively optimal solution for schematic layout and routing.

## 1. What is the goal?

The goal of `raina-schematic` is to accept raw data **without positional information** and generate data that can describe the following view based on the connection relationships:

![demo](../../img/demo.png)

The necessary raw data includes `Node`, `Port`, and `Edge`.

## 2. Constraints

When generating data, `raina-schematic` will adhere to the following constraints:

1. **The layout direction of the graph is from left to right**
2. **All Edges follow the principle of entering from the left and exiting from the right on the Node**
3. **Ports are represented by a single coordinate point in the final graph, without dimensions**

## 3. Metrics

The main metrics for evaluating the program's performance are:

1. The number of edge crossings
2. The number of edge bends
3. Visual effect

The first two metrics can be quickly evaluated through statistics, while the third is more abstract but can be referenced from industry best practices.