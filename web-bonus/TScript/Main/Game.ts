import { store } from "../Store/Store";
import { Util } from "../Common/Util";
import { Hero } from "../Fighters/Hero/Hero";
import { Enemy } from "../Fighters/Enemy/Enemy";

export class Game {
    private _heroNumber: number;

    constructor() {
        this.initializeChoosenWindow();
        $('#button').click();
        $('#zakroysya').on('click', () => this.onConfirm());
    }

    private initializeChoosenWindow(): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heros.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    }

    private initializeChoosenWindowExcept(index: number, $card: JQuery<HTMLElement>): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heros.length; i++) {
            if (i === index) 
                $container.append($card);
            else 
                $container.append(this.initializeOneCard(i));
        }
    }

    private initializeOneCard(index: number) {
        let $card = $('#choose-card').clone();
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(store.heros[index].name);
        $card.find('.my-first-description').html(store.heros[index].firstDescription);
        $card.find('.my-second-description').html(store.heros[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', () => { this.chooseCardOnClick(index, $card.find('.card')) });
        return $card;
    }

    private chooseCardOnClick(index: number, $card: JQuery<HTMLElement>): void {
        $('#hoho').removeClass('d-none');
        this.initializeChoosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction(store.heros[index].answer, store.heros[index]?.reaction, $card);
    }

    private setReaction(string: string, method?: Function, $card?: JQuery): void {
        $('#reaction').html(string);
        if (typeof method === 'function') 
            method($card);
    }

    public hero: Hero;
    public enemies: Array<Enemy>;

    onConfirm(): void {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        };

        this.hero = new Hero(store.heros[this._heroNumber], this);
        this.enemies = [];
        this.initializeEnemies();
    }

    initializeEnemies(): void {
        for (let i = 0; i < 4; i++) this.addEnemy();
    }

    addEnemy(): void {
        this.enemies.push(new Enemy(store.enemies[Util.randomInt(0, store.enemies.length)], this));
    }

    activateEnemies(effect: Function): void {
        this.enemies.map((enemy) => { enemy.activate(effect) });
    }

    disactivateEnemies(): void {
        this.enemies.map((enemy) => { enemy.disactivate() });
    }
}