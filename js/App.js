import Charactor from './Character';

const  { Application, Container, Sprite, loader }  = PIXI;
const resources = loader.resources;

const data = [
  {
    classify: 'head',
    url: '/img/head.1.png',
    width: 93,
    height: 50.5
  },
  {
    classify: 'body',
    url: '/img/body.1.png',
    width: 146.5,
    height: 158
  },
  {
    classify: 'leg',
    url: '/img/leg.1.png',
    width: 143.5,
    height: 84.5
  },
  {
    classify: 'body',
    url: '/img/body.2.png',
    width: 115,
    height: 118
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
    this.container = {};
    this.charactors = [];
    this.initial();
  }

  initial() {
    // load sprite
    loader.add(data)
    .on("progress", this.loadProgressHandler)
    .load((res)=>{
      const charactor = new Charactor(data[0], data[1], data[2]);
      this.charactors.push(charactor);
    });

    this.container = new Application({
      width: 414,
      height: 700,
      backgroundColor: '0xcccccc'
    });
    document.body.appendChild(this.container.view);
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