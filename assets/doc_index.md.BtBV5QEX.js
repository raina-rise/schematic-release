import{_ as i,c as a,o as n,ae as h}from"./chunks/framework.CWgCn7-Z.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"doc/index.md","filePath":"doc/index.md"}'),t={name:"doc/index.md"};function k(l,s,p,e,E,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="一、依赖的数据" tabindex="-1">一、依赖的数据 <a class="header-anchor" href="#一、依赖的数据" aria-label="Permalink to &quot;一、依赖的数据&quot;">​</a></h2><p>用户需要准备好程序所需的核心数据, 参考 <a href="./data.html">[核心数据]</a> 章节</p><h2 id="二、下载-raina-schematic" tabindex="-1">二、下载 raina-schematic <a class="header-anchor" href="#二、下载-raina-schematic" aria-label="Permalink to &quot;二、下载 raina-schematic&quot;">​</a></h2><p>在最新版的 Release 页面中进行下载: <a href="https://github.com/raina-rise/schematic-release/releases/latest" target="_blank" rel="noreferrer">https://github.com/raina-rise/schematic-release/releases/latest</a></p><p>其中 raina-schematic 为 linux 环境下的 bin 文件(暂时还不支持 windows 和 mac 的可执行文件)</p><p>schematic-release.tar.gz 是一个 c++ 工程的静态链接库，其中包含 c++ 头文件和 .a 文件，用于在 c++ 工程中进行引入</p><h2 id="三、bin-文件使用" tabindex="-1">三、bin 文件使用 <a class="header-anchor" href="#三、bin-文件使用" aria-label="Permalink to &quot;三、bin 文件使用&quot;">​</a></h2><p>在 Github 的 Release 中下载 raina-schematic 文件后，在命令行中通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./raina-schematic</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data.txt</span></span></code></pre></div><p>进行调用。</p><p>在启动命令中，调用了 data.txt 文件，这是一个模板文件，用户数据通过这个模板文件传输给程序。</p><p>该文件的格式: 参考 <a href="./temp.html">[模板文件]</a> 章节。</p><h3 id="程序输出" tabindex="-1">程序输出 <a class="header-anchor" href="#程序输出" aria-label="Permalink to &quot;程序输出&quot;">​</a></h3><p>程序输出的数据是以 json 格式解析的，其类型如下:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;edges&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;dst&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 终点 node 名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;dstX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 终点 x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;dstY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 终点 y 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化 edge 时传入的名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 起点 node 名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;srcX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 起点 x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;srcY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 起点 y 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;bendPoints&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转折点，从 src 为起点，依次经过该数组中每个坐标，最后到达 dst 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// y 坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }[];</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;nodes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// node 的高度</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化 node 时传入的名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;ports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// port 数据</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化 port 时传入的名称</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// port 在图中的 x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// port 在图中的 y 坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }[];</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// node 的宽度</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// x 坐标</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// y 坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="四、静态链接库使用" tabindex="-1">四、静态链接库使用 <a class="header-anchor" href="#四、静态链接库使用" aria-label="Permalink to &quot;四、静态链接库使用&quot;">​</a></h2><p>在 Github 的 Release 中下载 schematic-release.tar.gz 文件后，解压缩后将头文件和 .a 文件根据自己项目的情况引入到项目中。</p><div class="warning custom-block"><p class="custom-block-title">注意事项</p><p>raina-schematic 的头文件中依赖了 <code>nlohmann/json</code> 库，需要自己额外在项目中也引入一下</p></div><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下头文件来自 raina-schematic</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/Graph.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/LayeredEnginee.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/Node.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/NodeProto.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/Port.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;include/utils/VectorUtil.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make_shared</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> enginee </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make_shared</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LayeredEnginee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(graph);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 为 graph 添加 NodeProto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addNodeProto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nodeproto1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 为 graph 添加 Port</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;port1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PortType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::OUTPUT, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;port2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PortType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::INPUT, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 为 graph 添加 Node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 为 graph 添加 Edge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEdge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;edge1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEdge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;edge2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 执行算法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enginee-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">layered</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 输出结果数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node : graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getNodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node-&gt;name, node-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">edge : graph-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEdges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lines </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> edge-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line: lines) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> edge-&gt;name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line-&gt;first.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line-&gt; first.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line-&gt;second.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line-&gt;second.y  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,20)]))}const y=i(t,[["render",k]]);export{g as __pageData,y as default};
