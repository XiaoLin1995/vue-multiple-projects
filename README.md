## vue-multiple-projects

vue 多项目模板

### 解决的痛点

- 多个项目，有公用模块时，引用维护不方便
- 若以路由区分项目，路由懒加载打包时，所有项目也都会打包

### 特点

- 各项目独立，需要公用模块时，可按需引入
- 各项目独立编译，打包时不会打包其他项目

### 价值

- 认可此模板的话，可直接基于此模板开发
- 可从此模板学习到，如何使用 nodejs、webpack、vue-cli 达到此效果的，然后定制适合自己的模板

### 下载

```
git clone https://github.com/XiaoLin1995/vue-multiple-projects.git
```

### 使用

projects 下建立各个项目，公用模块放在 src 目录下。


如下运行命令（项目名添加到最后）:
```
npm run serve project1

npm run build project1
```
