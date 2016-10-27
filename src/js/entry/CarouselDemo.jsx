
import {Carousel} from '../index';

const src = ['ambition-morty', 'awkward-morty', 'despise', 'pride-morty', 'surprise-morty'];
const prefix = 'https://raw.githubusercontent.com/jerryshew/design/master/png';
              //https://raw.githubusercontent.com/jerryshew/design/master/png/ambition-morty.png
const getImgs = function () {
    let rtn = [];
    for(let i of src){
        // console.log("${prefix}/${i}:",`${prefix}/${i}`,`${prefix}`,`${i}`)
        // console.log(`${i}`)
        rtn.push(<img key={i} src={`${prefix}/${i}.png`}/>)
    }
    return rtn;
}

const imgNodes = getImgs();

export default class CarouselDemo extends React.Component{
    render(){
        let items = [];
        let prev = <h4>&lt;&lt;</h4>
        let next = <h4>&gt;&gt;</h4>
        return (
            <ul className="two carousel-demo">
                <h3>Crousel</h3>
                <li style={{width:'360px'}}>
                    <h4>Default carousel</h4>
                    <Carousel showArrow={true}>{imgNodes}</Carousel>
                </li>
                <li style={{width:'360px'}}>
                    <h4>Auto play carousel</h4>
                    <Carousel showArrow={true} autoPlay={true}>{imgNodes}</Carousel>
                </li>
                <li style={{width:'360px'}}>
                    <h4>Auto play carousel</h4>
                    <Carousel showArrow={true} autoPlay={true} prevNode={<span>上一页</span>} nextNode={<span>下一页</span>}>{imgNodes}</Carousel>
                </li>
            </ul>
        )
    }
}


ReactDOM.render(<CarouselDemo/>,document.querySelector('.app'))

function say(word) { console.log(word); }
say("Hello world");
say.call(window, "Hello world");



// min/max number in an array
var numbers = [5, 6, 2, 3, 7,11];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
console.log("max:",max)

// function add(a,b)
// {
//     console.log("a+b:",a+b)
//     // alert(a+b);
// }
// function sub(a,b)
// {
//     console.log("a-b:",a-b)
//     // alert(a-b);
// }
//
// add.call(sub,3,1);

//add.call(sub,3,1)==add(3,1)

// function Animal(){
//     this.name = "Animal";
//     this.showName = function(){
//         console.log("argument1:",arguments)
//         console.log("Animal-this.name:",this.name,arguments)
//     }
// }
//
// function Cat(name){
//     console.log("argument2:",arguments)
//     this.name = name||"Cat";
// }
//
// var animal = new Animal();
// var cat = new Cat("小猫2");
//
// //通过call或apply方法，将原本属于Animal对象的showName()方法交给cat来使用了。//结果为Cat
// //这里的cat对象,运行了animail.showName()方法
// animal.showName.call(cat,"小猫");
// animal.showName.apply(cat,["小老虎"])

function Animal(name) {
    this.name = name;
    this.showName = function () {
        console.log("Animal-this.name:",this.name,arguments)
    }
}

function Cat(name) {
    Animal.call(this,name)  //使用Animal对象代替this对象，那么Cat中不就有Aanimal的所有属性和方法吗，Cat对象就能够直接调用Animal的方法以及属性了

}
let animal = new Animal("小狗")
let cat = new Cat('小猫');
// console.log(cat)
// cat.showName()


function add(a,b,c){
    console.log("a+b+c:",a+b+c,"this：",this,arguments)
    return a+b+c;
}
function sub(c,d){
    console.log("c-d:",c-d,"this：",this,arguments)
    return c-d;
}
function result(){
    this.addValue = null;
    this.subValue = null;
    this.showResult=function(){
        console.log(this.addValue);
        console.log(this.subValue);
    }
}
var r = new result();

// // r.addValue = add.call(sub,4,2,10,20) //将add方法应用到sub上，即sub的指针指向add
// r.addValue = add.call(r,4,2,10,20) //将add方法应用到r对象上，这里表示对象r调用了add()方法
// r.addValue = add.call(null,4,2,10,20) //将add方法应用到r对象上，这里表示对象r调用了add()方法
// // r.addValue = add.apply(r,[4,2,10,20]) //将add方法应用到r对象上，这里表示对象r调用了add()方法
// // add(1,2,3,4)
// // r.subValue = sub.call(add,4,2,10)
// r.showResult()
// console.log("R:",r)