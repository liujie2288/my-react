import MyReact from "./MyReact";
import "./test";

const container = document.getElementById("root");

// const virtualDom = (
//   <div className="container">
//     <h1>你好 Tiny React</h1>
//     <h2>(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <span>这是一段内容</span>
//     <button onClick={() => alert("你好")}>点击我</button>
//     <h3>这个将会被删除</h3>
//     <input value="2" />
//     2, 3
//   </div>
// );

// console.log(virtualDom);
// ===== 渲染victualDom start  =====

// MyReact.render(virtualDom, container);

// ===== 渲染victualDom end  =====

// ===== 渲染React组件 start  =====

// function Test(props) {
//   return <div>这是函数组件,{props.name}开发</div>;
// }

// class Test1 extends MyReact.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         这是类组件,
//         <Test />
//       </div>
//     );
//   }
// }

// MyReact.render(<Test1 />, container);

// ===== 渲染React组件 end  =====


// ===== victualDom 对比 start  =====


const virtualDom = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2>(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    <input value="2" />
    2, 3
  </div>
);

const modifyDom = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好111")}>点击我</button>
    <h3>这个将会被删除</h3>
    <input value="2" />
    2, 3
  </div>
);

MyReact.render(virtualDom, container);

setTimeout(()=>{
  MyReact.render(modifyDom, container);
},5000)

// ===== victualDom 对比 end  =====