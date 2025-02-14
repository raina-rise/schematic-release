import{_ as a,c as o,o as t,ae as r}from"./chunks/framework.CWgCn7-Z.js";const i="/schematic-release/assets/demo.BHEHoWc7.png",_=JSON.parse('{"title":"项目简介","description":"","frontmatter":{},"headers":[],"relativePath":"overview/index.md","filePath":"overview/index.md"}'),c={name:"overview/index.md"};function s(n,e,d,l,h,p){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">​</a></h1><p><code>raina-schematic</code>(<a href="https://github.com/raina-rise/schematic" target="_blank" rel="noreferrer">https://github.com/raina-rise/schematic</a>) 是一个 EDA 领域中计算 schematic 布局布线的相对最优解的工具。</p><h2 id="一、目标是什么" tabindex="-1">一、目标是什么 <a class="header-anchor" href="#一、目标是什么" aria-label="Permalink to &quot;一、目标是什么&quot;">​</a></h2><p><code>raina-schematic</code> 的目标是接受 <strong>不具备位置信息</strong> 的原始数据后，根据连接关系，生成足以描述出如下视图的数据:</p><p><img src="'+i+'" alt="demo"></p><p>其中必要的原始数据包括 <code>节点(Node)</code>, <code>端口(Port)</code>, <code>连接(Edge)</code>。</p><h2 id="二、限制条件" tabindex="-1">二、限制条件 <a class="header-anchor" href="#二、限制条件" aria-label="Permalink to &quot;二、限制条件&quot;">​</a></h2><p><code>raina-schematic</code> 生成数据时会遵守以下条件:</p><ol><li><strong>图的布局方向是从左到右的</strong></li><li><strong>所有 Edge 在 Node 上都遵循左进右出的原则</strong></li><li><strong>Port 在最后的图中的表示只有一个坐标点，没有尺寸</strong></li></ol><h2 id="二、-指标" tabindex="-1">二、 指标 <a class="header-anchor" href="#二、-指标" aria-label="Permalink to &quot;二、 指标&quot;">​</a></h2><p>判断程序优劣的指标主要有</p><ol><li>连接线交叉数</li><li>连接线拐弯数</li><li>视觉效果</li></ol><p>其中1,2条可以通过统计迅速进行判断，第三条比较抽象，但业界也有相关的bp可以进行参考。</p>',13)]))}const g=a(c,[["render",s]]);export{_ as __pageData,g as default};
