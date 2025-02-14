# 模板文件

模板文件用于使用 ``./raina-schematic -f filePath `` 的形式传递给 `raina-schematic` 使用。

模板文件的内容就是填充程序所需的 `NodeProto`, `Node`, `Port`, `Edge` 数据，关于这些数据的定义可以查看 [[核心数据]](data.md) 章节。

模板文件的格式如下: 

```
#       id      displayname         width   height
### 这里填入 NodeProto 数据, 使用空格分割列, 以下是一行示例
proto    6    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/a_mux    80    60

#       id      proto   name 
### 这里填入 Port 数据, 使用空格分割列, 以下是一行示例
port    0    6    out    out

#       id      proto   name   type
### 这里填入 Node 数据, 使用空格分割列, 以下是一行示例
node    0    6    b_zero    default

#       outnode outpin  innode  inpin  name
### 这里填入 Edge 数据, 使用空格分割列, 以下是一行示例
edge    0    0    10    28 is_b_zero

```
:::tip 注意事项
各个数据之间的依赖主要依赖 id 字段进行关联，所以 id 在各个数据内部必须是唯一的
:::

以下是一个可实际使用的模板文件的 demo:

::: details demo
```
#       id      displayname         width   height
proto    0    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/b_zero    80    24
proto    1    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/a_reg    80    48
proto    2    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/a_lt_b    80    36
proto    3    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/sub    80    36
proto    4    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/b_mux    80    48
proto    5    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/b_reg    80    48
proto    6    /WORK/GcdUnitDpathRTL_0x4d0fc71ead8d3d9e/a_mux    80    60
proto    7    is_a_lt_b    1    1
proto    8    b_reg_en    1    1
proto    9    b_mux_sel    1    1
proto    10    is_b_zero    1    1
proto    11    a_mux_sel    1    1
proto    12    clk    1    1
proto    13    resp_msg    1    1
proto    14    req_msg_b    1    1
proto    15    req_msg_a    1    1
proto    16    a_reg_en    1    1

#       id      proto   name
port    0    0    out    out
port    1    0    in_    in
port    2    1    clk    in
port    3    1    out    out
port    4    1    en    in
port    5    1    in_    in
port    6    2    out    out
port    7    2    in1    in
port    8    2    in0    in
port    9    3    in1    in
port    10    3    in0    in
port    11    3    out    out
port    12    4    in_$000    in
port    13    4    out    out
port    14    4    sel    in
port    15    4    in_$001    in
port    16    5    clk    in
port    17    5    out    out
port    18    5    en    in
port    19    5    in_    in
port    20    6    sel    in
port    21    6    in_$001    in
port    22    6    in_$002    in
port    23    6    out    out
port    24    6    in_$000    in
port    25    7    is_a_lt_b    in
port    26    8    b_reg_en    out
port    27    9    b_mux_sel    out
port    28    10    is_b_zero    in
port    29    11    a_mux_sel    out
port    30    12    clk    out
port    31    13    resp_msg    in
port    32    14    req_msg_b    out
port    33    15    req_msg_a    out
port    34    16    a_reg_en    out

#       id      proto   name   type
node    0    0    b_zero    default
node    1    1    a_reg    default
node    2    2    a_lt_b    default
node    3    3    sub    default
node    4    4    b_mux    default
node    5    5    b_reg    default
node    6    6    a_mux    default
node    7    7    is_a_lt_b    east
node    8    8    b_reg_en    west
node    9    9    b_mux_sel    west
node    10    10    is_b_zero    east
node    11    11    a_mux_sel    west
node    12    12    clk    west
node    13    13    resp_msg    east
node    14    14    req_msg_b    west
node    15    15    req_msg_a    west
node    16    16    a_reg_en    west

#       outnode outpin  innode  inpin  name
edge    0    0    10    28 is_b_zero
edge    8    26    5    18 b_reg_en
edge    9    27    4    14 b_mux_sel
edge    4    13    5    19 b_mux$out
edge    3    11    6    21 resp_msg
edge    3    11    13    31 resp_msg
edge    11    29    6    20 a_mux_sel
edge    6    23    1    5 a_mux$out
edge    12    30    1    2 clk
edge    12    30    5    16 clk
edge    2    6    7    25 is_a_lt_b
edge    1    3    2    8 a_reg$out
edge    1    3    3    10 a_reg$out
edge    1    3    4    12 a_reg$out
edge    5    17    0    1 b_reg$out
edge    5    17    2    7 b_reg$out
edge    5    17    3    9 b_reg$out
edge    5    17    6    22 b_reg$out
edge    15    33    6    24 req_msg_a
edge    14    32    4    15 req_msg_b
edge    16    34    1    4 a_reg_en

```

:::

