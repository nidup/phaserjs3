
export class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({
            key: "MainScene"
        });
    }

    preload(): void {
        this.load.image("logo", "../assets/palette/bkd32.png");
    }

    create(): void {
        this.phaserSprite = this.add.sprite(400, 300, "logo");
    }
}
