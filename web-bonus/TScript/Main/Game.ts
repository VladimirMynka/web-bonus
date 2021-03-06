import { store } from "../Store/Store";
import { Util } from "../Common/Util";
import { Hero } from "../Fighters/Hero/Hero";
import { Enemy } from "../Fighters/Enemy/Enemy";
import { Fighter } from "../Fighters/Fighter";
import {FighterPrototype} from "../Fighters/FighterPrototype";
import {HeroPrototype} from "../Fighters/Hero/HeroPrototype";

export class Game {
    private _heroNumber: number;
    public gameEnded: boolean;
    public heroWon = true;
    private _killedEnemiesCount = 0;
    private _movesToEnd: number;
    public hero: Hero;
    public enemies: Array<Enemy>;
    private _score = 0;

    constructor() {
        this.initializeChosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', () => this.onConfirm());
        $('#new-game-button').on('click', () => window.location.reload());
    }

    private initializeChosenWindow(): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    }

    private initializeChosenWindowExcept(index: number, $card: JQuery<HTMLElement>): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heroes.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
    }

    private initializeOneCard(index: number) {
        let $card = $('#choose-card').clone();
        let prototype = store.heroes[index];
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(prototype.name);
        $card.find('.my-first-description').html(prototype.firstDescription);
        $card.find('.my-second-description').html(prototype.secondDescription);
        let $innerCard = $card.find('.card');
        let $popover = $('.choose-card-data-content').clone();
        this.fillPopover(prototype, $popover);
        $innerCard.attr('title', prototype.name);
        $innerCard.attr('data-content', $popover.html());
        $card.removeClass('d-none');
        $card.on('click', () => { this.chooseCardOnClick(index, $innerCard) });
        return $card;
    }

    private fillPopover(prototype: HeroPrototype, $popover: JQuery<HTMLElement>){
        $popover.find('.hp').text(prototype.hp);
        $popover.find('.mana').text(prototype.mana);
        $popover.find('.perks').html(prototype.skills.reduce((previous, current) =>
            `<div>${store.perks[current].name}</div>>`, ''));
        $popover.removeClass('d-none');
    }

    private chooseCardOnClick(index: number, $card: JQuery<HTMLElement>): void {
        $('#confirm-menu').removeClass('d-none');
        this.initializeChosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        Game.setReaction(store.heroes[index].answer, store.heroes[index]?.reaction, $card);
    }

    private static setReaction(string: string, method?: Function, $card?: JQuery): void {
        $('#reaction').html(string);
        if (typeof method === 'function')
            method($card);
    }

    private onConfirm(): void {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        };

        this.hero = new Hero(store.heroes[this._heroNumber], this);
        this.initializeEnemies();
        this._movesToEnd = store.movesToWinning;
        this.update();
    }

    private initializeEnemies(): void {
        this.enemies = [];
        for (let i = 0; i < store.startEnemyCount; i++) this.addEnemy();
    }

    public addEnemy(): void {
        if(arguments.length == 0)
            this.enemies.push(new Enemy(store.enemies[Util.randomInt(0, store.enemies.length)], this));
        else if(typeof arguments[0] === 'number')
            this.enemies.push(new Enemy(store.enemies[arguments[0]], this));
        else if(arguments[0] instanceof FighterPrototype)
            this.enemies.push(new Enemy(arguments[0], this));
    }

    public increaseKilledCount(): void {
        this._killedEnemiesCount++;
        $('#enemy-count').text(this._killedEnemiesCount);
        this.addScore(1000);
    }

    private async update() {
        if (this.gameEnded) {
            this.endGame();
            return;
        }
        this._movesToEnd--;
        $('#moves-to-win').text(this._movesToEnd);
        if (this._movesToEnd === 0)
            this.gameEnded = true;
        if (this.enemies.length < store.enemiesMaxCount && Util.randomInt(0, 100) < this.calculateAddingChance())
            this.addEnemy();
        await this.moveHero();
        await Util.sleep(1000);
        await this.moveEnemies();
        await Util.sleep(1000);
        this.enemies = this.enemies.filter((enemy) => !enemy.wereRemoved);
        await this.update();
    }

    private async moveEnemies() {
        $('#move-of').html('<span class="text-danger">Enemies</span>');
        for (let i = 0; i < this.enemies.length; i++) {
            await this.enemies[i].update();
            await Util.sleep(500);
        }
    }

    private async moveHero() {
        $('#move-of').html('<span class="text-success">Hero</span>');
        await this.hero.update();
    }

    private endGame(): void {
        let $endModal = $('#myModal2');
        $endModal.find('.modal-title').text(this.heroWon ? "You won!" : "You lost...");
        let $result = $('.progress-menu').clone().removeClass('col-8');
        $result.find('.mt-5').removeClass('mt-5');
        $result.find('.must-be-deleted').remove();
        $endModal.find('.modal-body').append($result);
        $('#button2').click();
    }

    private calculateAddingChance() {
        if (this.enemies.length === 0)
            return 100;
        let mc = store.enemiesMaxCount;
        let tc = this.enemies.length;
        let min = store.minAddEnemyChance;
        let max = store.maxAddEnemyChance;
        return (mc - tc) / mc * (max - min) + min;
    }

    activateEnemies(effect: Function): void {
        this.enemies.map((enemy) => { enemy.activate(effect) });
    }

    deactivateEnemies(): void {
        this.enemies.map((enemy) => { enemy.deactivate() });
    }

    addLog(maker: Fighter, target: Fighter, actionDescription: string): void {
        let $actionLog = $(`<div>
        ${Util.getFormatCurrentTime()} <b>${maker.prototype.name}</b> ${actionDescription} <b>${target == maker ? '' : target.prototype.name}</b>
        </div>`);
        $('#logs').prepend($actionLog);
    }

    addScore(count: number) {
        this._score += count;
        $('#score').text(this._score);
    }
}