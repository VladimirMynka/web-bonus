class FighterPrototype {
    constructor() {
        this.id = arguments[0];
        this.name = arguments[1];
        this.hp = arguments[2];
        this.mana = arguments[3];
        this.skills = arguments[4];
        this.motto = arguments[5];
    }
}

class HeroPrototype extends FighterPrototype {
    constructor() {
        super(...arguments);
        this.firstDescription = arguments[6];
        this.secondDescription = arguments[7];
        this.answer = arguments[8];
    }
}

class PerkPrototype {
    constructor() {
        this.id = arguments[0];
        this.name = arguments[1];
        this.mana = arguments[2];
        this.info = arguments[3];
        this.effect = arguments[4];
        this.forSelf = arguments[5];
    }
}

let store = {
    heroes: [
        new HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 3],
            'Всех закукумбрю!',
            '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают',
            'Не <span class="text-danger">красный</span>! Не путать!',
            'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!'),

        new HeroPrototype(1, 'Помидориус', 300, 200, [0, 2, 3],
            'Я краснею',
            '<span class="text-danger">Красный</span>, гладкий, твой',
            'Не <span class="text-success">зелёный</span>! Не путать!',
            'Ахахахахахахахаххахахахахах'),

        new HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3],
            'Как я сюда попал',
            '<span class="text-warning">Жёлтый</span>, попал сюда случайно',
            'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!',
            'Молю тебя!'),

        new HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 200, 50, [1, 2, 3],
            'Пумпурумпум',
            'Не путать с Кукумбером!',
            'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!',
            'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!'),

        new HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2],
            'Пшпшпшп',
            'Самый <b>большой</b>',
            'Самый спелый',
            '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype(0, 'Тварь', 500, 100, [0, 1, 3],
            '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype(0, 'Ничтожество', 500, 100, [0, 1, 3],
            'Агрх!'),
        new FighterPrototype(0, 'Ублюдок', 500, 100, [0, 1, 3],
            'Упф'),
        new FighterPrototype(0, 'Мразь', 500, 100, [0, 1, 3],
            '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype(0, 'Взрыв', 100, 'Убивает всех', 
            (target) => { target.addHp(-20); }, false),
        new PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', 
            (target) => { target.addHp(-10); }, false),
        new PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', 
            (target) => { target.addHp(50); }, true),
        new PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', 
            (target) => { 
                target.addMana(200); 
                target.addHp(-50);
            }, true)
    ]
};

let heroNumber = -1;

function hehe() {
    $('#confirm-menu').removeClass('d-none');
    $('.tick').removeClass('border-primary');
    this.classList.add('border-primary');
    heroNumber = this.dataset.heroId;
    haha();
}

function hahah() {
    $('.tack').removeClass('border-primary');
    this.classList.add('border-primary');
    heroNumber = this.dataset.heroId;
    haha();
}

function haha() {
    $('#reaction').html(heroNumber === -1 ? "" : store.heroes[heroNumber].answer)
}

let game;

function onLoad() {
    game = new Game();
}

$(window).on('load', onLoad);

class Game {
    constructor() {
        let $container = $('#card-container');
        for (let i = 0; i < store.heroes.length; i++) {
            let $card = $('#choose-card').clone();
            $card.children('div').attr('data-hero-id', i);
            $card.find('.my-title').html(store.heroes[i].name);
            $card.find('.my-first-description').html(store.heroes[i].firstDescription);
            $card.find('.my-second-description').html(store.heroes[i].secondDescription);
            $card.removeClass('d-none');
            $container.append($card);

        }
        $('#button').click();
        $('.tick').on('click', hehe);
        $('.tack').on('click', hahah);
        $('#game-start-button').on('click', () => this.onConfirm());
    }

    onConfirm() {
        $('#button').click();
        if (heroNumber === -1) {
            window.location.reload();
        };

        $('#hero-card').find('.my-title').html(store.heroes[heroNumber].name);
        $('#hero-card').find('.my-motto').html(store.heroes[heroNumber].motto);

        this.hero = new Hero(store.heroes[heroNumber], this);
        this.enemies = [];
        this.initializeEnemies();
    }

    initializeEnemies() {
        for (let i = 0; i < 4; i++) this.addEnemy();
    }

    addEnemy() {
        this.enemies.push(new Enemy(store.enemies[randomInt(0, store.enemies.length)]));
    }

    activateEnemies(effect) {
        this.enemies.map((enemy) => { enemy.activate(effect) });
    }

    deactivateEnemies(effect) {
        this.enemies.map((enemy) => { enemy.deactivate(effect) });
    }

    apply(target) {

    }
}

class FighterCard {
    constructor(name = "enemy name", motto = "motto") {
        this.$card = this.$initializeCard(name, motto);
        this.$getMenu().append(this.$card);
    }

    $getMenu() {
        return $('#enemies-menu');
    }

    $initializeCard(name, motto) {
        let $card = $('#fighter-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-motto').html(motto);
        $card.removeClass('d-none');
        return $card;
    }

    setHpWidth(percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.hp-progress').width(percents + '%');
    }

    setManaWidth(percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    }

    getRealPercents(percents) {
        if (percents < 0) return 0;
        if (percents > 100) return 100;
        return percents;
    }

    turnOn() {
        this.$card.on("click", () => {
            $('.enemy-card').removeClass('border-primary');
            this.$card.addClass('border-primary');
            this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseenter", () => {
            this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", () => {
            this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
        this.$card.addClass('bg-light');
    }

    turnOff() {
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
        this.$card.removeClass('bg-light');
    }
}

class EnemyCard extends FighterCard {

}

class HeroCard extends FighterCard {
    constructor(name, motto) {
        super(name, motto);
        this.$card.removeClass('enemy-card');
    }

    $getMenu() {
        return $('#hero-menu');
    }
}

class PerkCard {
    constructor(name = "perk name", info = "info") {
        this.$card = this.$initializeCard(name, info);
        $('#hero-menu').append(this.$card);
        this.onclick = null;
    }

    $initializeCard(name, info) {
        let $card = $('#perk-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-info').html(info);
        $card.removeClass('d-none');
        $card.addClass('bg-light');
        return $card;
    }

    setOnclick(method) {
        this.onclick = method;
    }

    setProgressWidth(percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
        if (percents >= 100) this.turnOn();
        else this.turnOff();
    }

    getRealPercents(percents) {
        if (percents < 0) return 0;
        if (percents > 100) return 100;
        return +percents;
    }

    turnOn() {
        this.$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this.$card.on("click", () => {
            $('.perk-card').removeClass('border-primary');
            this.$card.addClass('border-primary');
            this.onclick();
        });
        this.$card.on("mouseenter", () => {
            this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", () => {
            this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
    }

    turnOff() {
        this.$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
    }
}

class Fighter {
    constructor(prototype, game) {
        this.prototype = prototype;
        this.card = this.createCard(prototype);
        this.hp = prototype.hp;
        this.mana = prototype.mana;
        this.game = game;
    }

    createCard(prototype) {
        return new FighterCard(prototype.name, prototype.motto);
    }

    setHp(count) {
        this.hp = this.getRealHp(count);
        this.card.setHpWidth(this.hp * 100 / this.prototype.hp);
    }

    addHp(count) {
        setHp(+this.hp + (+count));
    }

    getRealHp(count) {
        if (count < 0) return 0;
        if (count > this.prototype.hp) return this.prototype.hp;
        return count;
    }

    setMana(count) {
        this.mana = this.getRealMana(count);
        this.card.setManaWidth(this.mana * 100 / this.prototype.mana);
    }

    getRealMana(count) {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    activate() {
        this.card.turnOn();
    }

    deactivate() {
        this.card.turnOff();
    }
}

class Enemy extends Fighter {
    createCard(prototype) {
        return new EnemyCard(prototype.name, prototype.motto);
    }
}

class Hero extends Fighter {
    constructor() {
        super(...arguments);
        this.perks = []; 
        this.initializePerks();
        this.method = null;
    }

    initializePerks() {
        this.prototype.skills.forEach(perkNumber => {
            if(store.perks[perkNumber].forSelf) 
                this.perks.push(new OnHeroPerk(store.perks[perkNumber], this));
            else 
                this.perks.push(new OnEnemyPerk(store.perks[perkNumber], this));
        });
    }

    createCard(prototype) {
        return new HeroCard(prototype.name, prototype.motto);
    }

    setMethod(targetMethod, effectMethod) {
        targetMethod();
        this.method = effectMethod;
    }

    getOnEnemyMethod() {
        return () => {
            this.deactivate();
            this.game.activateEnemies();
        };
    }

    getOnHeroMethod() {
        return () => {
            this.game.deactivateEnemies();
            this.activate();
        };
    }
}

class Perk {
    constructor(prototype, hero) {
        this.prototype = prototype;
        this.card = this.createCard(prototype);
        this.hero = hero;
        this.card.setOnclick(this.getOnclick());
        this.mana = 0;
        this.update();
    }

    async update() {
        this.addMana(1);
        await sleep(100);
        await this.update();
    }

    createCard(prototype) {
        return new PerkCard(prototype.name, prototype.info);
    }

    setMana(count) {
        this.mana = this.getRealMana(count);
        this.card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    }

    addMana(count) {
        this.setMana(+this.mana + (+count));
    }

    getRealMana(count) {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    getOnclick() {
        return () => { this.hero.setMethod(this.getOnclickType(), this.prototype.effect) };
    }

    getOnclickType() {
        return this.hero.getOnEnemyMethod();
    }
}

class OnHeroPerk extends Perk {
    getOnclickType() {
        return this.hero.getOnHeroMethod();
    }
}

class OnEnemyPerk extends Perk {

}

function randomInt(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}