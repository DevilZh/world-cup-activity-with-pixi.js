import app from './App';
import Element from './Element';

const { Container, Sprite, loader} = PIXI;
const resources = loader.resources;

class Charactor extends Element{
  constructor() {
    super();
    this.charactorConfig = {
      headHeight: 70,
      bodyHeight: 217
    }
    this.charactor = {};
    this.create(...arguments);
  }

  create(headSource, bodySource, legSource) {
    const { headHeight, bodyHeight } = this.charactorConfig;

    const head = resources[headSource.url].texture;
    const body = resources[bodySource.url].texture;
    const leg   = resources[legSource.url].texture;

    const spriteHead = new Sprite(head);
    const spriteBody = new Sprite(body);
    const spriteLeg = new Sprite(leg);

    spriteHead.position.set(50, 0);
    spriteBody.position.set(0, headHeight);
    spriteLeg.position.set(0, bodyHeight);

    spriteHead.width = headSource.width;
    spriteHead.height = headSource.height;

    spriteBody.width = bodySource.width;
    spriteBody.height = bodySource.height;

    spriteLeg.width = legSource.width;
    spriteLeg.height = legSource.height;

    this.container.addChild(spriteLeg);
    this.container.addChild(spriteBody);
    this.container.addChild(spriteHead);
    app.layerCharacter.addChild(this.container);
  }
}

export default Charactor;