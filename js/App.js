import Charactor from './Character';

const { Application, Container, Sprite, loader } = PIXI;
const resources = loader.resources;

const data = [
  {
    catagory: 'head',
    url: '/img/head.1.png',
    width: 93,
    height: 50.5
  },
  {
    catagory: 'body',
    url: '/img/body.1.png',
    width: 146.5,
    height: 158
  },
  {
    catagory: 'leg',
    url: '/img/leg.1.png',
    width: 143.5,
    height: 84.5
  },
  {
    catagory: 'body',
    url: '/img/body.2.png',
    width: 146.5,
    height: 158
  },
]

// loader.add("/img/body.1.png")
//   .load(setup);

// function setup() {

//   //Create the cat sprite
//   let body = new Sprite(loader.resources["/img/body.1.png"].texture);

//   //Add the cat to the stage
//   app.stage.addChild(body);

// }

class App {
  constructor() {
    // 根容器
    this.rootContainer = {};
    // 装饰层
    this.layerOrnament = {};
    // 元素层
    this.layerCharacter = {};

    this.elements = [];
    this.initial();
  }

  initial() {
    // load sprite
    loader.add(data)
      .on("progress", this.loadProgressHandler)
      .load((res) => {
        const charactor = new Charactor(data[0], data[1], data[2]);
        const charactor1 = new Charactor(data[0], data[3], data[2]);
        const charactor2 = new Charactor(data[0], data[1], data[2]);
        this.elements.push(charactor);
        this.elements.push(charactor1);
        this.elements.push(charactor2);
      });
    const { clientWidth, clientHeight} = document.documentElement;
    this.rootContainer = new Application({
      width: clientWidth,
      height: clientHeight,
      backgroundColor: '0xcccccc'
    });
    this.layerOrnament = new Container({
      width: clientWidth,
      height: clientHeight
    });
    this.layerCharacter = new Container({
      width: clientWidth,
      height: clientHeight
    })
    document.body.appendChild(this.rootContainer.view);
    this.rootContainer.stage.addChild(this.layerOrnament)
    this.rootContainer.stage.addChild(this.layerCharacter)
  }
  // progress bar
  loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
  }

  renderStage() {

  }

  renderMenu() {
    const scrollContent = new Container();
  }

  removeCharator() {

  }

  updateCharator() {

  }

  updateTabs() {

  }
}

export default new App();