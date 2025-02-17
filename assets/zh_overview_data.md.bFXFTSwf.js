import{_ as e}from"./chunks/relate-demo.63JtzhOZ.js";import{_ as d,c,o as t,ag as r}from"./chunks/framework.ifgpkas4.js";const u=JSON.parse('{"title":"核心数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"zh/overview/data.md","filePath":"zh/overview/data.md"}'),a={name:"zh/overview/data.md"};function p(i,o,l,P,N,n){return t(),c("div",null,o[0]||(o[0]=[r('<h1 id="核心数据类型" tabindex="-1">核心数据类型 <a class="header-anchor" href="#核心数据类型" aria-label="Permalink to &quot;核心数据类型&quot;">​</a></h1><h2 id="零、概述" tabindex="-1">零、概述 <a class="header-anchor" href="#零、概述" aria-label="Permalink to &quot;零、概述&quot;">​</a></h2><p>若有如下图的数据需要被创建:</p><p><img src="'+e+'" alt="relate-demo"></p><p>假设图中 4 个元器件共分为三种类型，其中 B、C 是同一类型的。</p><p>创建核心数据流程如下:</p><ul><li><p>第一步创建 3 个 <code>NodeProto</code> 分别对应</p><ul><li>A 的元器件(取名 protoA)</li><li>B、C 的元器件(取名 protoBC)</li><li>D 的元器件(取名 protoD)</li></ul></li><li><p>第二步创建 <code>Port</code>, 根据图中的关系可以看出 protoA 有一个输入端口，两个输出端口，便为 protoA 创建 portA1 为 INPUT 类型 port，再创建 portA2, portA3 为 OUTPUT 类型 port。同理再为 protoBC 和 protoD 也依照此流程创建 port。</p></li><li><p>第三步创建 <code>Node</code>, 创建 NodeA，NodeB，NodeC，NodeD 分别对应图中四个节点，创建他们时，只需要传入关联的 <code>NodeProto</code> 即可。</p></li><li><p>第四步创建 <code>Edge</code>, 根据图中的关系可以看到连接 NodeA 和 NodeB 的 <code>Edge</code> 的起点位置是 <code>NodeA</code>+<code>portA2</code>,终点位置是 <code>NodeB</code>+<code>portB1</code>, 使用这两个位置信息即可创建一条 <code>Edge</code>, 其他 <code>Edge</code> 同理。</p></li></ul><h2 id="一、节点模板-nodeproto" tabindex="-1">一、节点模板 NodeProto <a class="header-anchor" href="#一、节点模板-nodeproto" aria-label="Permalink to &quot;一、节点模板 NodeProto&quot;">​</a></h2><blockquote><p>创建一个 <code>NodeProto</code> 的必要数据：名称，宽度，高度，唯一 id。</p></blockquote><p><code>NodeProto</code> 是 <code>node</code> 的模板，来自同一个 <code>NodeProto</code> 的 <code>Node</code> 都有相同的 <code>Port</code> 且这些 <code>Port</code> 的顺序也是相同的。</p><p><code>NodeProto</code> 是一个抽象概念，但是需要用户进行定义。</p><h2 id="二、节点实例-node" tabindex="-1">二、节点实例 Node <a class="header-anchor" href="#二、节点实例-node" aria-label="Permalink to &quot;二、节点实例 Node&quot;">​</a></h2><blockquote><p>创建一个 <code>Node</code> 的必要数据: 所属 <code>NodeProto</code> 的 id，名称，唯一 id。</p></blockquote><p><code>Node</code> 依赖 <code>NodeProto</code> 生成，每一个 <code>Node</code> 对应最后图数据中的一个节点实例。</p><h2 id="三、连接端口-port" tabindex="-1">三、连接端口 Port <a class="header-anchor" href="#三、连接端口-port" aria-label="Permalink to &quot;三、连接端口 Port&quot;">​</a></h2><blockquote><p>创建一个 <code>Port</code> 的必要数据: 所属 <code>NodeProto</code> 的 id，名称，<code>Port</code> 类型， 唯一 id。</p></blockquote><p><code>Port</code> 是挂载在 <code>NodeProto</code> 上的端口数据, 其中 <code>Port</code> 类型可以分为 INPUT 和 OUTPUT。</p><p>INPUT 类型的 <code>Port</code> 只能作为 <code>Edge</code> 的终点，同理 OUTPUT 类型的 <code>Port</code> 只能作为 <code>Edge</code> 的起点。</p><p>且 INPUT 类型的 <code>Port</code> 固定在 <code>NodeProto</code> 左侧，OUTPUT 类型的 <code>Port</code> 固定在 <code>NodeProto</code> 右侧。</p><h2 id="四、连接关系-edge" tabindex="-1">四、连接关系 Edge <a class="header-anchor" href="#四、连接关系-edge" aria-label="Permalink to &quot;四、连接关系 Edge&quot;">​</a></h2><blockquote><p>创建一个 <code>Edge</code> 的必要数据: 起点 <code>Node</code> 指针或 id，起点 <code>Port</code> 指针或 id，终点 <code>Node</code> 指针或 id，终点 <code>Port</code> 指针或 id。</p></blockquote><p><code>Edge</code> 是两个 <code>Node</code> + <code>Port</code> 之间的连线，表示在图数据中两个 <code>Port</code> 的连接关系。</p><p>在执行完算法后，一个 <code>Edge</code> 会由一条或多条平行于 X 轴或 Y 轴的线段组成。</p><div class="warning custom-block"><p class="custom-block-title">为什么 Edge 需要同时关联 Node 和 Port？</p><p><code>Port</code> 数据是关联在 <code>NodeProto</code> 上的，而 <code>NodeProto</code> 是一个抽象概念，无法对应最终图数据上的节点。</p><p>所以图数据中一个 <code>Port</code> 的实例需要 <code>Node</code> + <code>Port</code> 的数据来进行定位。</p><p>而 <code>Edge</code> 需要表现在图数据中，所以他关联的起点 Port 和终点 Port 也需要用 <code>Node</code> + <code>Port</code> 的数据来进行定位。</p></div>',24)]))}const _=d(a,[["render",p]]);export{u as __pageData,_ as default};
