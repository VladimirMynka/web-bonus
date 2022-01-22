(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCard = void 0;
var GameCard = /** @class */ (function () {
    function GameCard() {
    }
    GameCard.prototype.getCoords = function () {
        return this.$card.offset();
    };
    return GameCard;
}());
exports.GameCard = GameCard;
},{}],2:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(resolve, ms);
                    })];
            });
        });
    };
    Util.randomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.floor(Math.random() * (max - min) + min);
    };
    Util.getFormatCurrentTime = function () {
        var date = new Date();
        return "[".concat(date.getHours().toString().padStart(2, '0'), ":").concat(date.getMinutes().toString().padStart(2, '0'), ":").concat(date.getSeconds().toString().padStart(2, '0'), "]");
    };
    Util.fireworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $fireworks, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $fireworks = $('.fireworks');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 5];
                        $fireworks.removeClass('d-none');
                        $fireworks.offset({ left: Util.randomInt(0, 500), top: Util.randomInt(0, 500) });
                        return [4 /*yield*/, Util.sleep(500)];
                    case 2:
                        _a.sent();
                        $fireworks.addClass('d-none');
                        return [4 /*yield*/, Util.sleep(100)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Util.getImagesPaths = function (number, count) {
        return Array.apply(null, { length: count }).map(function (unused, index) {
            return "./images/animation/".concat(number, "/image_part_").concat((index + 1).toString().padStart(3, '0'), ".png");
        });
    };
    return Util;
}());
exports.Util = Util;
},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
var Fighter_1 = require("../Fighter");
var EnemyCard_1 = require("./EnemyCard");
var EnemyPerk_1 = require("../../Perks/ForEnemy/EnemyPerk");
var Store_1 = require("../../Store/Store");
var Util_1 = require("../../Common/Util");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(prototype, game) {
        return _super.call(this, prototype, game) || this;
    }
    Enemy.prototype.initializePerks = function () {
        var _this = this;
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new EnemyPerk_1.EnemyPerk(Store_1.store.perks[0], this, this.game));
        this.prototype.skills.forEach(function (perkNumber) {
            _this.perks.push(new EnemyPerk_1.EnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Enemy.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                if (this.game.gameEnded)
                    return [2 /*return*/];
                if (this.hp === 0 || this.wereRemoved) {
                    return [2 /*return*/];
                }
                if (Util_1.Util.randomInt(0, 100) < Store_1.store.enemyMoveChance) {
                    index = Util_1.Util.randomInt(1, this.perks.length);
                    while (index > 0 && !this.perks[index].canBeApplied())
                        index = this.increasePerkIndex(index);
                    this.perks[index].apply();
                }
                else
                    this.perks[0].apply();
                _super.prototype.update.call(this);
                return [2 /*return*/];
            });
        });
    };
    Enemy.prototype.increasePerkIndex = function (index) {
        return (index + 1) % this.perks.length;
    };
    Enemy.prototype.createCard = function (prototype) {
        return new EnemyCard_1.EnemyCard(prototype.name, prototype.motto);
    };
    Enemy.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.increaseKilledCount();
    };
    return Enemy;
}(Fighter_1.Fighter));
exports.Enemy = Enemy;
},{"../../Common/Util":2,"../../Perks/ForEnemy/EnemyPerk":13,"../../Store/Store":21,"../Fighter":5,"./EnemyCard":4}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyCard = void 0;
var FighterCard_1 = require("../FighterCard");
var EnemyCard = /** @class */ (function (_super) {
    __extends(EnemyCard, _super);
    function EnemyCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyCard;
}(FighterCard_1.FighterCard));
exports.EnemyCard = EnemyCard;
},{"../FighterCard":6}],5:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
var FighterCard_1 = require("./FighterCard");
var Util_1 = require("../Common/Util");
var Store_1 = require("../Store/Store");
var Fighter = /** @class */ (function () {
    function Fighter(prototype, game) {
        this.prototype = prototype;
        this.game = game;
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.perks = [];
        this.initializePerks();
    }
    Fighter.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.hp === 0 || this._wereRemoved) {
                    return [2 /*return*/];
                }
                this.addMana(30);
                this.addHp(10);
                this.perks.forEach(function (perk) { return perk.update(); });
                return [2 /*return*/];
            });
        });
    };
    Fighter.prototype.remove = function () {
        if (this._wereRemoved)
            return;
        this._wereRemoved = true;
        this.card.remove();
        this.game.addLog(this, this, Store_1.store.diedLog);
        document.removeEventListener('keydown', handler);
        document.addEventListener('keydown', handler);
    };
    Fighter.prototype.createCard = function (prototype) {
        return new FighterCard_1.FighterCard(prototype.name, prototype.motto);
    };
    Object.defineProperty(Fighter.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (count) {
            this._hp = this.getAdequateHp(count);
            this.card.setHpWidth(this._hp * 100 / this.prototype.hp);
            if (this._hp === 0)
                this.remove();
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addHp = function (count) {
        var startHp = this._hp;
        this.hp = this._hp + count;
        return this._hp - startHp;
    };
    Fighter.prototype.getAdequateHp = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.hp)
            return this.prototype.hp;
        return count;
    };
    Object.defineProperty(Fighter.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this._mana = this.getAdequateMana(count);
            this.card.setManaWidth(this._mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addMana = function (count) {
        var startMana = this._mana;
        this.mana = this._mana + count;
        return this._mana - startMana;
    };
    Fighter.prototype.getAdequateMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Fighter.prototype.activate = function (effect) {
        this.card.turnOn(effect, this);
    };
    Fighter.prototype.deactivate = function () {
        this.card.turnOff();
    };
    Fighter.prototype.getCard = function () {
        return this.card;
    };
    Fighter.prototype.getCoords = function () {
        return this.card.getCoords();
    };
    Object.defineProperty(Fighter.prototype, "wereRemoved", {
        get: function () {
            return this._wereRemoved;
        },
        enumerable: false,
        configurable: true
    });
    return Fighter;
}());
exports.Fighter = Fighter;
function handler(event) {
    if (event.code == 'KeyF') {
        document.removeEventListener('keydown', handler);
        Util_1.Util.fireworks();
    }
}
},{"../Common/Util":2,"../Store/Store":21,"./FighterCard":6}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var FighterCard = /** @class */ (function (_super) {
    __extends(FighterCard, _super);
    function FighterCard(name, motto) {
        if (name === void 0) { name = "enemy name"; }
        if (motto === void 0) { motto = "motto"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, motto);
        _this.$getMenu().append(_this.$card);
        return _this;
    }
    FighterCard.prototype.$getMenu = function () {
        return $('#enemies-menu');
    };
    FighterCard.prototype.$initializeCard = function (name, motto) {
        var $card = $('#fighter-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-motto').html(motto);
        $card.removeClass('d-none');
        return $card;
    };
    FighterCard.prototype.setHpWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.hp-progress').width(percents + '%');
    };
    FighterCard.prototype.setManaWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    };
    FighterCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    FighterCard.prototype.turnOn = function (effect, owner) {
        var _this = this;
        this.$card.off("click mouseenter mouseleave");
        this.$card.on("click", function () {
            effect(owner);
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
        this.$card.addClass('bg-light');
    };
    FighterCard.prototype.turnOff = function () {
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
        this.$card.removeClass('bg-light');
    };
    FighterCard.prototype.remove = function () {
        this.$card.remove();
    };
    return FighterCard;
}(GameCard_1.GameCard));
exports.FighterCard = FighterCard;
},{"../Common/GameCard":1}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterPrototype = void 0;
var FighterPrototype = /** @class */ (function () {
    function FighterPrototype(id, name, hp, mana, skills, motto) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.skills = skills;
        this.motto = motto;
    }
    return FighterPrototype;
}());
exports.FighterPrototype = FighterPrototype;
},{}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Fighter_1 = require("../Fighter");
var HeroCard_1 = require("./HeroCard");
var OnHeroPerk_1 = require("../../Perks/ForHero/OnHeroPerk");
var OnEnemyPerk_1 = require("../../Perks/ForHero/OnEnemyPerk");
var Store_1 = require("../../Store/Store");
var Util_1 = require("../../Common/Util");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(prototype, game) {
        var _this = _super.call(this, prototype, game) || this;
        _this.moveEnded = true;
        return _this;
    }
    Hero.prototype.initializePerks = function () {
        var _this = this;
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[0], this, this.game));
        this.prototype.skills.forEach(function (perkNumber) {
            if (Store_1.store.perks[perkNumber].forSelf)
                _this.perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[perkNumber], _this, _this.game));
            else
                _this.perks.push(new OnEnemyPerk_1.OnEnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Hero.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.update.call(this);
                        if (this.hp === 0 || this.wereRemoved) {
                            return [2 /*return*/];
                        }
                        this.perks.forEach(function (perk) { return perk.tryActivate(); });
                        this.moveEnded = false;
                        _a.label = 1;
                    case 1:
                        if (!!this.moveEnded) return [3 /*break*/, 3];
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.perks.forEach(function (perk) { return perk.deactivate(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Hero.prototype.createCard = function (prototype) {
        return new HeroCard_1.HeroCard(prototype.name, prototype.motto);
    };
    Hero.prototype.setMethod = function (targetMethod, effectMethod) {
        targetMethod(effectMethod);
    };
    Hero.prototype.sayManaLacking = function () {
        this.card.drawManaLacking();
    };
    Hero.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.gameEnded = true;
        this.game.heroWon = false;
    };
    return Hero;
}(Fighter_1.Fighter));
exports.Hero = Hero;
},{"../../Common/Util":2,"../../Perks/ForHero/OnEnemyPerk":15,"../../Perks/ForHero/OnHeroPerk":16,"../../Store/Store":21,"../Fighter":5,"./HeroCard":9}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroCard = void 0;
var Util_1 = require("../../Common/Util");
var FighterCard_1 = require("../FighterCard");
var HeroCard = /** @class */ (function (_super) {
    __extends(HeroCard, _super);
    function HeroCard(name, motto) {
        var _this = _super.call(this, name, motto) || this;
        _this.$card.removeClass('enemy-card');
        return _this;
    }
    HeroCard.prototype.$getMenu = function () {
        return $('#hero-menu');
    };
    HeroCard.prototype.drawManaLacking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $manaProgress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $manaProgress = this.$card.find('.mana-progress');
                        $manaProgress.removeClass('bg-primary').addClass('bg-dark');
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 1:
                        _a.sent();
                        $manaProgress.removeClass('bg-dark').addClass('bg-primary');
                        return [2 /*return*/];
                }
            });
        });
    };
    return HeroCard;
}(FighterCard_1.FighterCard));
exports.HeroCard = HeroCard;
},{"../../Common/Util":2,"../FighterCard":6}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPrototype = void 0;
var FighterPrototype_1 = require("../FighterPrototype");
var HeroPrototype = /** @class */ (function (_super) {
    __extends(HeroPrototype, _super);
    function HeroPrototype(id, name, hp, mana, skills, motto, firstDescription, secondDescription, answer, reaction) {
        var _this = _super.call(this, id, name, hp, mana, skills, motto) || this;
        _this.firstDescription = firstDescription;
        _this.secondDescription = secondDescription;
        _this.answer = answer;
        _this.reaction = reaction;
        return _this;
    }
    return HeroPrototype;
}(FighterPrototype_1.FighterPrototype));
exports.HeroPrototype = HeroPrototype;
},{"../FighterPrototype":7}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Store_1 = require("../Store/Store");
var Util_1 = require("../Common/Util");
var Hero_1 = require("../Fighters/Hero/Hero");
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.heroWon = true;
        this._killedEnemiesCount = 0;
        this._score = 0;
        this.initializeChosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', function () { return _this.onConfirm(); });
        $('#new-game-button').on('click', function () { return window.location.reload(); });
    }
    Game.prototype.initializeChosenWindow = function () {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeChosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeOneCard = function (index) {
        var _this = this;
        var $card = $('#choose-card').clone();
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(Store_1.store.heroes[index].name);
        $card.find('.my-first-description').html(Store_1.store.heroes[index].firstDescription);
        $card.find('.my-second-description').html(Store_1.store.heroes[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', function () { _this.chooseCardOnClick(index, $card.find('.card')); });
        return $card;
    };
    Game.prototype.chooseCardOnClick = function (index, $card) {
        var _a;
        $('#confirm-menu').removeClass('d-none');
        this.initializeChosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        Game.setReaction(Store_1.store.heroes[index].answer, (_a = Store_1.store.heroes[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
    };
    Game.setReaction = function (string, method, $card) {
        $('#reaction').html(string);
        if (typeof method === 'function')
            method($card);
    };
    Game.prototype.onConfirm = function () {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        }
        ;
        this.hero = new Hero_1.Hero(Store_1.store.heroes[this._heroNumber], this);
        this.initializeEnemies();
        this._movesToEnd = Store_1.store.movesToWinning;
        this.update();
    };
    Game.prototype.initializeEnemies = function () {
        this.enemies = [];
        for (var i = 0; i < Store_1.store.startEnemyCount; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
    };
    Game.prototype.increaseKilledCount = function () {
        this._killedEnemiesCount++;
        $('#enemy-count').text(this._killedEnemiesCount);
        this.addScore(1000);
    };
    Game.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.gameEnded) {
                            this.endGame();
                            return [2 /*return*/];
                        }
                        this._movesToEnd--;
                        $('#moves-to-win').text(this._movesToEnd);
                        if (this._movesToEnd === 0)
                            this.gameEnded = true;
                        if (this.enemies.length < Store_1.store.enemiesMaxCount && Util_1.Util.randomInt(0, 100) < this.calculateAddingChance())
                            this.addEnemy();
                        return [4 /*yield*/, this.moveHero()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.moveEnemies()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 4:
                        _a.sent();
                        this.enemies = this.enemies.filter(function (enemy) { return !enemy.wereRemoved; });
                        return [4 /*yield*/, this.update()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.moveEnemies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#move-of').html('<span class="text-danger">Enemies</span>');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.enemies.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.enemies[i].update()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.moveHero = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#move-of').html('<span class="text-success">Hero</span>');
                        return [4 /*yield*/, this.hero.update()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.endGame = function () {
        var $endModal = $('#myModal2');
        $endModal.find('.modal-title').text(this.heroWon ? "You won!" : "You lost...");
        var $result = $('.progress-menu').clone().removeClass('col-8');
        $result.find('.mt-5').removeClass('mt-5');
        $result.find('.must-be-deleted').remove();
        $endModal.find('.modal-body').append($result);
        $('#button2').click();
    };
    Game.prototype.calculateAddingChance = function () {
        if (this.enemies.length === 0)
            return 100;
        var mc = Store_1.store.enemiesMaxCount;
        var tc = this.enemies.length;
        var min = Store_1.store.minAddEnemyChance;
        var max = Store_1.store.maxAddEnemyChance;
        return (mc - tc) / mc * (max - min) + min;
    };
    Game.prototype.activateEnemies = function (effect) {
        this.enemies.map(function (enemy) { enemy.activate(effect); });
    };
    Game.prototype.deactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.deactivate(); });
    };
    Game.prototype.addLog = function (maker, target, actionDescription) {
        var $actionLog = $("<div>\n        ".concat(Util_1.Util.getFormatCurrentTime(), " <b>").concat(maker.prototype.name, "</b> ").concat(actionDescription, " <b>").concat(target == maker ? '' : target.prototype.name, "</b>\n        </div>"));
        $('#logs').prepend($actionLog);
    };
    Game.prototype.addScore = function (count) {
        this._score += count;
        $('#score').text(this._score);
    };
    return Game;
}());
exports.Game = Game;
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/Hero/Hero":8,"../Store/Store":21}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeJSON = void 0;
var Game_1 = require("./Game");
var game;
//storeJSON = data;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
},{"./Game":11}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyPerk = void 0;
var Perk_1 = require("../Perk");
var PerkAnimation_1 = require("../PerkAnimation");
var EnemyPerk = /** @class */ (function (_super) {
    __extends(EnemyPerk, _super);
    function EnemyPerk(prototype, owner, game) {
        var _this = _super.call(this, prototype, owner, game) || this;
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(owner.getCard(), prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    EnemyPerk.prototype.apply = function () {
        var target = this.prototype.forSelf ? this.owner : this.game.hero;
        this.applyEffect(target);
    };
    return EnemyPerk;
}(Perk_1.Perk));
exports.EnemyPerk = EnemyPerk;
},{"../Perk":17,"../PerkAnimation":18}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPerk = void 0;
var PerkCard_1 = require("../PerkCard");
var PerkAnimation_1 = require("../PerkAnimation");
var Perk_1 = require("../Perk");
var HeroPerk = /** @class */ (function (_super) {
    __extends(HeroPerk, _super);
    function HeroPerk(prototype, hero, game) {
        var _this = _super.call(this, prototype, hero, game) || this;
        _this._card = _this.createCard(prototype);
        _this._card.setOnclick(_this.getOnclick());
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(_this._card, prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    HeroPerk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    HeroPerk.prototype.setMana = function (count) {
        _super.prototype.setMana.call(this, count);
        this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    };
    HeroPerk.prototype.getOnclick = function () {
        var _this = this;
        return function () {
            _this.getActivator()(function (target) {
                if (_this.prototype.fighterManaDemand > _this.owner.mana) {
                    _this.owner.sayManaLacking();
                    return;
                }
                _this.applyEffect(target);
                _this.owner.moveEnded = true;
            });
        };
    };
    HeroPerk.prototype.applyEffect = function (target) {
        if (this.canBeApplied) {
            _super.prototype.applyEffect.call(this, target);
            this.game.addScore(this.prototype.score);
            this.game.deactivateEnemies();
            this.owner.deactivate();
        }
    };
    HeroPerk.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.owner.deactivate();
            _this.game.activateEnemies(onClickFunction);
        };
    };
    HeroPerk.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.game.deactivateEnemies();
            _this.owner.activate(onClickFunction);
        };
    };
    HeroPerk.prototype.tryActivate = function () {
        if (this.mana >= this.prototype.mana)
            this._card.turnOn();
    };
    HeroPerk.prototype.deactivate = function () {
        this._card.turnOff();
    };
    return HeroPerk;
}(Perk_1.Perk));
exports.HeroPerk = HeroPerk;
},{"../Perk":17,"../PerkAnimation":18,"../PerkCard":19}],15:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnEnemyPerk = void 0;
var HeroPerk_1 = require("./HeroPerk");
var OnEnemyPerk = /** @class */ (function (_super) {
    __extends(OnEnemyPerk, _super);
    function OnEnemyPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnEnemyPerk.prototype.getActivator = function () {
        return this.getOnEnemyMethod();
    };
    return OnEnemyPerk;
}(HeroPerk_1.HeroPerk));
exports.OnEnemyPerk = OnEnemyPerk;
},{"./HeroPerk":14}],16:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnHeroPerk = void 0;
var HeroPerk_1 = require("./HeroPerk");
var OnHeroPerk = /** @class */ (function (_super) {
    __extends(OnHeroPerk, _super);
    function OnHeroPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnHeroPerk.prototype.getActivator = function () {
        return this.getOnHeroMethod();
    };
    return OnHeroPerk;
}(HeroPerk_1.HeroPerk));
exports.OnHeroPerk = OnHeroPerk;
},{"./HeroPerk":14}],17:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perk = void 0;
var PerkCard_1 = require("./PerkCard");
var Perk = /** @class */ (function () {
    function Perk(prototype, owner, game) {
        this.prototype = prototype;
        this.owner = owner;
        this.game = game;
        this._mana = 0;
    }
    Perk.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addMana(20);
                return [2 /*return*/];
            });
        });
    };
    Perk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    Object.defineProperty(Perk.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this.setMana(count);
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.setMana = function (count) {
        this._mana = this.getRealMana(count);
    };
    Perk.prototype.addMana = function (count) {
        this.mana = this.mana + count;
    };
    Perk.prototype.getRealMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Perk.prototype.applyEffect = function (target) {
        var _this = this;
        if (!this.canBeApplied())
            return;
        this.mana = 0;
        this.owner.addMana(-this.prototype.fighterManaDemand);
        if (this.animation != null)
            this.animation.animate(target.getCoords()).then(function () {
                _this.prototype.effect(target, _this.owner, _this.game);
            });
        else
            this.prototype.effect(target, this.owner, this.game);
        this.game.addLog(this.owner, target, this.prototype.actionString);
    };
    Perk.prototype.canBeApplied = function () {
        return this.mana >= this.prototype.mana && this.owner.mana >= this.prototype.fighterManaDemand;
    };
    return Perk;
}());
exports.Perk = Perk;
},{"./PerkCard":19}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkAnimation = void 0;
var Util_1 = require("../Common/Util");
var PerkAnimation = /** @class */ (function () {
    function PerkAnimation(startPointHandler, imagesPaths) {
        this.startPointHandler = startPointHandler;
        this.imagesPaths = imagesPaths;
    }
    PerkAnimation.prototype.animate = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var $original, $animation, index, imagePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $original = $('.animation');
                        $animation = $original.clone().removeClass('animation');
                        $original.after($animation);
                        $animation.removeClass('d-none');
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.imagesPaths.length)) return [3 /*break*/, 4];
                        imagePath = this.imagesPaths[index];
                        $animation.attr('src', imagePath);
                        $animation.offset({
                            left: this.startPointHandler.getCoords().left + (endpoint.left - this.startPointHandler.getCoords().left) * index / (this.imagesPaths.length),
                            top: this.startPointHandler.getCoords().top + (endpoint.top - this.startPointHandler.getCoords().top) * index / (this.imagesPaths.length)
                        });
                        return [4 /*yield*/, Util_1.Util.sleep(500 / this.imagesPaths.length)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        $animation.remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PerkAnimation;
}());
exports.PerkAnimation = PerkAnimation;
},{"../Common/Util":2}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var PerkCard = /** @class */ (function (_super) {
    __extends(PerkCard, _super);
    function PerkCard(name, info) {
        if (name === void 0) { name = "perk name"; }
        if (info === void 0) { info = "info"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, info);
        $('#hero-menu').append(_this.$card);
        _this._onclick = null;
        return _this;
    }
    PerkCard.prototype.$initializeCard = function (name, info) {
        var $card = $('#perk-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-info').html(info);
        $card.removeClass('d-none');
        $card.addClass('bg-light');
        return $card;
    };
    PerkCard.prototype.setOnclick = function (method) {
        this._onclick = method;
    };
    PerkCard.prototype.setProgressWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    };
    PerkCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    PerkCard.prototype.turnOn = function () {
        var _this = this;
        this.$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this.$card.on("click", function () {
            $('.perk-card').removeClass('border-primary');
            _this.$card.addClass('border-primary');
            _this._onclick();
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
    };
    PerkCard.prototype.turnOff = function () {
        this.$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
    };
    return PerkCard;
}(GameCard_1.GameCard));
exports.PerkCard = PerkCard;
},{"../Common/GameCard":1}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkPrototype = void 0;
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, fighterManaDemand, info, effect, forSelf, actionString, score, animationPaths) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.fighterManaDemand = fighterManaDemand;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
        this.actionString = actionString;
        this.score = score;
        this.animationPaths = animationPaths;
    }
    return PerkPrototype;
}());
exports.PerkPrototype = PerkPrototype;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var HeroPrototype_1 = require("../Fighters/Hero/HeroPrototype");
var FighterPrototype_1 = require("../Fighters/FighterPrototype");
var PerkPrototype_1 = require("../Perks/PerkPrototype");
var Util_1 = require("../Common/Util");
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var storeJSON = JSON.parse(data);
exports.store = {
    enemiesMaxCount: storeJSON.enemiesMaxCount,
    minAddEnemyChance: storeJSON.minAddEnemyChance,
    maxAddEnemyChance: storeJSON.maxAddEnemyChance,
    movesToWinning: storeJSON.movesToWinning,
    startEnemyCount: storeJSON.startEnemyCount,
    enemyMoveChance: storeJSON.enemyMoveChance,
    diedLog: storeJSON.diedLog,
    heroes: storeJSON.heroes.map((jsonHero) => parseHero(jsonHero)),
    enemies: storeJSON.enemies,
    perks: storeJSON.perks.map((jsonPerk) => parsePerk(jsonPerk))
}
function parseHero(json) {
    return new HeroPrototype_1.HeroPrototype(json.id, json.name, json.hp, json.mana, json.skills, json.motto, json.firstDescription, json.secondDescription, json.answer, function ($card) { Function('$card', json.reaction)($card); });
}
function parsePerk(json) {
    return new PerkPrototype_1.PerkPrototype(json.id, json.name, json.mana, json.fighterManaDemand, json.info, function (target, owner, game) {
        Function('target, owner', 'game', json.effect)(target, owner, game);
    }, json.forSelf, json.actionString, json.score, json.countOfImages != null ? Util_1.Util.getImagesPaths(json.id, json.countOfImages) : null);
}
// exports.store = {
//     enemiesMaxCount: 12,
//     minAddEnemyChance: 15,
//     maxAddEnemyChance: 35,
//     movesToWinning: 40,
//     startEnemyCount: 1,
//     enemyMoveChance: 75,
//     diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
//     heroes: [
//         new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
//             $card.addClass("bg-success text-white");
//             $card.find("span").removeClass().addClass("text-dark");
//         }),
//         new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 750, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
//             $card.parent().parent().children().children().addClass("bg-transparent");
//             $card.addClass("bg-light text-dark");
//             $card.removeClass("bg-transparent");
//             $card.parent().parent().parent().parent().addClass("bg-dark text-white");
//             Util_1.Util.sleep(2000).then(function () {
//                 $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
//             });
//         }),
//         new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 1000, 70, [0, 3, 6, 8], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
//             $card.addClass("bg-warning");
//             $card.find(".text-warning").removeClass("text-warning");
//         }),
//         new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 400, 500, [0, 3, 5, 7], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function () {
//             Util_1.Util.fireworks();
//         }),
//         new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 800, 100, [0, 2, 3, 6], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Съешь меня?</span>')
//     ],
//     enemies: [
//         new FighterPrototype_1.FighterPrototype(0, 'Редисон', 300, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
//         new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 400, 80, [0, 1, 5, 7], 'Агрх!'),
//         new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
//         new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
//     ],
//     perks: [
//         new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () {
//         }, true, 'пропустил ход', 0),
//         new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 30, 20, 'Пытается убить одного врага', function (target) {
//             target.addHp(-100);
//         }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
//         new PerkPrototype_1.PerkPrototype(2, 'Молния', 50, 50, 'Пытается убить всех', function (target, owner, game) {
//             if (owner instanceof Enemy_1.Enemy)
//                 game.enemies.forEach(function (enemy) { return (enemy.addHp(10)); });
//             game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
//         }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
//         new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, _) {
//             target.addHp(250);
//         }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
//         new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target) {
//             target.addMana(150);
//             target.addHp(-30);
//         }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
//         new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 50, 20, 'Пытается убить во благо', function (target, owner) {
//             owner.addHp(-target.addHp(-75));
//         }, false, 'украл здоровье у', 50, Util_1.Util.getImagesPaths(5, 9)),
//         new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 100, 70, 'Пытается убить окружение врага', function (target, owner, game) {
//             var enemy = target;
//             enemy.addHp(-200);
//             var index = game.enemies.indexOf(enemy);
//             if (index > 0)
//                 game.enemies[index - 1].addHp(-100);
//             if (index < game.enemies.length - 1)
//                 game.enemies[index + 1].addHp(-100);
//         }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
//         new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner) {
//             owner.addMana(-target.addMana(-100));
//         }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
//         new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
//             owner.addHp(-300);
//             owner.addMana(-300);
//         }, true, 'очень глупый', 500)
//     ]
// };
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL0ZvckVuZW15L0VuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9IZXJvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBTUEsQ0FBQztJQUhVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7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LEVBQ0QsWUFBWSxFQUNaLFVBQUMsTUFBZSxFQUFFLEtBQWM7WUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0QsSUFBSSxFQUNKLGNBQWMsRUFDZCxHQUFHLENBQ047S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FyZCB7XHJcbiAgICBwcm90ZWN0ZWQgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiB7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRjYXJkLm9mZnNldCgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludChtaW4gPSAwLCBtYXggPSAxMDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXRDdXJyZW50VGltZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4gYFske2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7ZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1dYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGZpcmV3b3JrcygpIHtcclxuICAgICAgICBsZXQgJGZpcmV3b3JrcyA9ICQoJy5maXJld29ya3MnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAkZmlyZXdvcmtzLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5vZmZzZXQoeyBsZWZ0OiBVdGlsLnJhbmRvbUludCgwLCA1MDApLCB0b3A6IFV0aWwucmFuZG9tSW50KDAsIDUwMCkgfSlcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAkZmlyZXdvcmtzLmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW1hZ2VzUGF0aHMobnVtYmVyOiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiBjb3VudCB9KS5tYXAoKHVudXNlZDogYW55LCBpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgLi9pbWFnZXMvYW5pbWF0aW9uLyR7bnVtYmVyfS9pbWFnZV9wYXJ0XyR7KGluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfS5wbmdgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEVuZW15Q2FyZCB9IGZyb20gXCIuL0VuZW15Q2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0ZvckVuZW15L0VuZW15UGVya1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi8uLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBGaWdodGVyIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBwZXJrczogRW5lbXlQZXJrW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5za2lsbHMuaW5kZXhPZigwKSA8IDApXHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgRW5lbXlQZXJrKHN0b3JlLnBlcmtzWzBdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS5za2lsbHMuZm9yRWFjaChwZXJrTnVtYmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBFbmVteVBlcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lRW5kZWQpIHJldHVybjtcclxuXHRpZiAodGhpcy5ocCA9PT0gMCB8fCB0aGlzLndlcmVSZW1vdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IHN0b3JlLmVuZW15TW92ZUNoYW5jZSl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IFV0aWwucmFuZG9tSW50KDEsIHRoaXMucGVya3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCAmJiAhdGhpcy5wZXJrc1tpbmRleF0uY2FuQmVBcHBsaWVkKCkpXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5jcmVhc2VQZXJrSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmtzW2luZGV4XS5hcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGVya3NbMF0uYXBwbHkoKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluY3JlYXNlUGVya0luZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoaW5kZXggKyAxKSAlIHRoaXMucGVya3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbmNyZWFzZUtpbGxlZENvdW50KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gXCIuLi9QZXJrcy9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya3MvUGVya1wiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfaHA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21hbmE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBjYXJkOiBGaWdodGVyQ2FyZDtcclxuICAgIHByb3RlY3RlZCBwZXJrczogUGVya1tdO1xyXG4gICAgcHJpdmF0ZSBfd2VyZVJlbW92ZWQ6IGJvb2xlYW47IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2hwID0gcHJvdG90eXBlLmhwO1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSBwcm90b3R5cGUubWFuYTtcclxuICAgICAgICB0aGlzLnBlcmtzID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGVya3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCB8fCB0aGlzLl93ZXJlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkTWFuYSgzMCk7XHJcbiAgICAgICAgdGhpcy5hZGRIcCgxMCk7XHJcbiAgICAgICAgdGhpcy5wZXJrcy5mb3JFYWNoKChwZXJrKSA9PiBwZXJrLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlcmVSZW1vdmVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fd2VyZVJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuYWRkTG9nKHRoaXMsIHRoaXMsIHN0b3JlLmRpZWRMb2cpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlnaHRlckNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBocCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuZ2V0QWRlcXVhdGVIcChjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldEhwV2lkdGgodGhpcy5faHAgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5ocCk7XHJcbiAgICAgICAgaWYodGhpcy5faHAgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydEhwID0gdGhpcy5faHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMuX2hwICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwIC0gc3RhcnRIcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUuaHApIHJldHVybiB0aGlzLnByb3RvdHlwZS5ocDtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRBZGVxdWF0ZU1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydE1hbmEgPSB0aGlzLl9tYW5hO1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMuX21hbmEgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYSAtIHN0YXJ0TWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9uKGVmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FyZCgpOiBHYW1lQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29vcmRzKCk6IElQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZC5nZXRDb29yZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdlcmVSZW1vdmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZXJlUmVtb3ZlZDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5RicpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICAgICAgVXRpbC5maXJld29ya3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4vRmlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJDYXJkIGV4dGVuZHMgR2FtZUNhcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiZW5lbXkgbmFtZVwiLCBtb3R0byA9IFwibW90dG9cIikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRnZXRNZW51KCkuYXBwZW5kKHRoaXMuJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCAkZ2V0TWVudSgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gJCgnI2VuZW1pZXMtbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgJGluaXRpYWxpemVDYXJkKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNmaWdodGVyLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LW1vdHRvJykuaHRtbChtb3R0byk7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SHBXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcuaHAtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hbmFXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlYWxQZXJjZW50cyhwZXJjZW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAocGVyY2VudHMgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAocGVyY2VudHMgPiAxMDApIHJldHVybiAxMDA7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT24oZWZmZWN0OiBGdW5jdGlvbiwgb3duZXI6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBlZmZlY3Qob3duZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJycpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgaHA6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHNraWxsczogbnVtYmVyW10sIFxyXG4gICAgICAgIHB1YmxpYyBtb3R0bzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgSGVyb1Byb3RvdHlwZSB9IGZyb20gXCIuL0hlcm9Qcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm9DYXJkIH0gZnJvbSBcIi4vSGVyb0NhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgT25IZXJvUGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JIZXJvL09uSGVyb1BlcmtcIjtcclxuaW1wb3J0IHsgT25FbmVteVBlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9PbkVuZW15UGVya1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi8uLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBIZXJvUGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JIZXJvL0hlcm9QZXJrXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEhlcm9QZXJrW107XHJcbiAgICBwdWJsaWMgbW92ZUVuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IEhlcm9Qcm90b3R5cGUsXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5za2lsbHMuaW5kZXhPZigwKSA8IDApXHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1swXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZS5wZXJrc1twZXJrTnVtYmVyXS5mb3JTZWxmKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBPbkhlcm9QZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBPbkVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIHVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuXHRpZiAodGhpcy5ocCA9PT0gMCB8fCB0aGlzLndlcmVSZW1vdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZXJrcy5mb3JFYWNoKChwZXJrKSA9PiBwZXJrLnRyeUFjdGl2YXRlKCkpO1xyXG4gICAgICAgIHRoaXMubW92ZUVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLm1vdmVFbmRlZClcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDAwKTtcclxuICAgICAgICB0aGlzLnBlcmtzLmZvckVhY2goKHBlcmspID0+IHBlcmsuZGVhY3RpdmF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZXJvQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWV0aG9kKHRhcmdldE1ldGhvZDogRnVuY3Rpb24sIGVmZmVjdE1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRNZXRob2QoZWZmZWN0TWV0aG9kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F5TWFuYUxhY2tpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgKDxIZXJvQ2FyZD50aGlzLmNhcmQpLmRyYXdNYW5hTGFja2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLmhlcm9Xb24gPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdlbmVteS1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjaGVyby1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRyYXdNYW5hTGFja2luZygpIHtcclxuICAgICAgICBsZXQgJG1hbmFQcm9ncmVzcyA9IHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykuYWRkQ2xhc3MoJ2JnLWRhcmsnKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctZGFyaycpLmFkZENsYXNzKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvUHJvdG90eXBlIGV4dGVuZHMgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogbnVtYmVyLCBcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgc2tpbGxzOiBBcnJheTxudW1iZXI+LCBcclxuICAgICAgICBtb3R0bzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBmaXJzdERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNlY29uZERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGFuc3dlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFjdGlvbj86ICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGhwLCBtYW5hLCBza2lsbHMsIG1vdHRvKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9oZXJvTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2FtZUVuZGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGhlcm9Xb24gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfa2lsbGVkRW5lbWllc0NvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX21vdmVzVG9FbmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZXJvOiBIZXJvO1xyXG4gICAgcHVibGljIGVuZW1pZXM6IEFycmF5PEVuZW15PjtcclxuICAgIHByaXZhdGUgX3Njb3JlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9zZW5XaW5kb3coKTtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICAkKCcjZ2FtZS1zdGFydC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29uZmlybSgpKTtcclxuICAgICAgICAkKCcjbmV3LWdhbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9zZW5XaW5kb3coKTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNob3NlbldpbmRvd0V4Y2VwdChpbmRleDogbnVtYmVyLCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleClcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKCRjYXJkKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU9uZUNhcmQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNjaG9vc2UtY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuY2hpbGRyZW4oJ2RpdicpLmF0dHIoJ2RhdGEtaGVyby1pZCcsIGluZGV4KTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKHN0b3JlLmhlcm9lc1tpbmRleF0ubmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWZpcnN0LWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvZXNbaW5kZXhdLmZpcnN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1zZWNvbmQtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9lc1tpbmRleF0uc2Vjb25kRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5vbignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXgsICRjYXJkLmZpbmQoJy5jYXJkJykpIH0pO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNob29zZUNhcmRPbkNsaWNrKGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2NvbmZpcm0tbWVudScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9zZW5XaW5kb3dFeGNlcHQoaW5kZXgsICRjYXJkLnBhcmVudCgpKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLl9oZXJvTnVtYmVyID0gaW5kZXg7XHJcbiAgICAgICAgR2FtZS5zZXRSZWFjdGlvbihzdG9yZS5oZXJvZXNbaW5kZXhdLmFuc3dlciwgc3RvcmUuaGVyb2VzW2luZGV4XT8ucmVhY3Rpb24sICRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZXRSZWFjdGlvbihzdHJpbmc6IHN0cmluZywgbWV0aG9kPzogRnVuY3Rpb24sICRjYXJkPzogSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI3JlYWN0aW9uJykuaHRtbChzdHJpbmcpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBtZXRob2QoJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oZXJvTnVtYmVyID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oc3RvcmUuaGVyb2VzW3RoaXMuX2hlcm9OdW1iZXJdLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fbW92ZXNUb0VuZCA9IHN0b3JlLm1vdmVzVG9XaW5uaW5nO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLnN0YXJ0RW5lbXlDb3VudDsgaSsrKSB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFbmVteSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkoc3RvcmUuZW5lbWllc1tVdGlsLnJhbmRvbUludCgwLCBzdG9yZS5lbmVtaWVzLmxlbmd0aCldLCB0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlS2lsbGVkQ291bnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fa2lsbGVkRW5lbWllc0NvdW50Kys7XHJcbiAgICAgICAgJCgnI2VuZW15LWNvdW50JykudGV4dCh0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQpO1xyXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21vdmVzVG9FbmQtLTtcclxuICAgICAgICAkKCcjbW92ZXMtdG8td2luJykudGV4dCh0aGlzLl9tb3Zlc1RvRW5kKTtcclxuICAgICAgICBpZiAodGhpcy5fbW92ZXNUb0VuZCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgc3RvcmUuZW5lbWllc01heENvdW50ICYmIFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCB0aGlzLmNhbGN1bGF0ZUFkZGluZ0NoYW5jZSgpKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlSGVybygpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlRW5lbWllcygpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW5lbXkpID0+ICFlbmVteS53ZXJlUmVtb3ZlZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG1vdmVFbmVtaWVzKCkge1xyXG4gICAgICAgICQoJyNtb3ZlLW9mJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkVuZW1pZXM8L3NwYW4+Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbmVtaWVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbW92ZUhlcm8oKSB7XHJcbiAgICAgICAgJCgnI21vdmUtb2YnKS5odG1sKCc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPkhlcm88L3NwYW4+Jyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5oZXJvLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5kR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGVuZE1vZGFsID0gJCgnI215TW9kYWwyJyk7XHJcbiAgICAgICAgJGVuZE1vZGFsLmZpbmQoJy5tb2RhbC10aXRsZScpLnRleHQodGhpcy5oZXJvV29uID8gXCJZb3Ugd29uIVwiIDogXCJZb3UgbG9zdC4uLlwiKTtcclxuICAgICAgICBsZXQgJHJlc3VsdCA9ICQoJy5wcm9ncmVzcy1tZW51JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnY29sLTgnKTtcclxuICAgICAgICAkcmVzdWx0LmZpbmQoJy5tdC01JykucmVtb3ZlQ2xhc3MoJ210LTUnKTtcclxuICAgICAgICAkcmVzdWx0LmZpbmQoJy5tdXN0LWJlLWRlbGV0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLWJvZHknKS5hcHBlbmQoJHJlc3VsdCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbjInKS5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgICAgIGxldCBtYyA9IHN0b3JlLmVuZW1pZXNNYXhDb3VudDtcclxuICAgICAgICBsZXQgdGMgPSB0aGlzLmVuZW1pZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBtaW4gPSBzdG9yZS5taW5BZGRFbmVteUNoYW5jZTtcclxuICAgICAgICBsZXQgbWF4ID0gc3RvcmUubWF4QWRkRW5lbXlDaGFuY2U7XHJcbiAgICAgICAgcmV0dXJuIChtYyAtIHRjKSAvIG1jICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVFbmVtaWVzKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMubWFwKChlbmVteSkgPT4geyBlbmVteS5hY3RpdmF0ZShlZmZlY3QpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRlYWN0aXZhdGUoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMb2cobWFrZXI6IEZpZ2h0ZXIsIHRhcmdldDogRmlnaHRlciwgYWN0aW9uRGVzY3JpcHRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkYWN0aW9uTG9nID0gJChgPGRpdj5cclxuICAgICAgICAke1V0aWwuZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKX0gPGI+JHttYWtlci5wcm90b3R5cGUubmFtZX08L2I+ICR7YWN0aW9uRGVzY3JpcHRpb259IDxiPiR7dGFyZ2V0ID09IG1ha2VyID8gJycgOiB0YXJnZXQucHJvdG90eXBlLm5hbWV9PC9iPlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgICAgICQoJyNsb2dzJykucHJlcGVuZCgkYWN0aW9uTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY29yZShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gY291bnQ7XHJcbiAgICAgICAgJCgnI3Njb3JlJykudGV4dCh0aGlzLl9zY29yZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmxldCBnYW1lOiBHYW1lO1xyXG5cclxuZXhwb3J0IGxldCBzdG9yZUpTT047XHJcbi8vc3RvcmVKU09OID0gZGF0YTtcclxuXHJcbmZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBvbkxvYWQpOyIsImltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIlxyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIlxyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgb3duZXI6IEVuZW15LFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgb3duZXIsIGdhbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQZXJrQW5pbWF0aW9uKG93bmVyLmdldENhcmQoKSwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMucHJvdG90eXBlLmZvclNlbGYgPyB0aGlzLm93bmVyIDogdGhpcy5nYW1lLmhlcm87XHJcbiAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrXCI7XHJcblxyXG50eXBlIFBlcmtDYXJkT25DbGljayA9ICgpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvckZpZ2h0ZXJDYXJkT25DbGljayA9ICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEFjdGl2YXRpb25GdW5jdGlvbiA9IChtZXRob2Q6IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4gdm9pZDtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGVyb1BlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIHByaXZhdGUgX2NhcmQ6IFBlcmtDYXJkO1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG93bmVyOiBIZXJvO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgaGVybzogSGVybyxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGhlcm8sIGdhbWUpXHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0T25jbGljayh0aGlzLmdldE9uY2xpY2soKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24odGhpcy5fY2FyZCwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyLnNldE1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0UHJvZ3Jlc3NXaWR0aCh0aGlzLm1hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBQZXJrQ2FyZE9uQ2xpY2sge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZhdG9yKCkoXHJcbiAgICAgICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kID4gdGhpcy5vd25lci5tYW5hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuc2F5TWFuYUxhY2tpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIubW92ZUVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXBwbHlFZmZlY3QodGFyZ2V0OiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuQmVBcHBsaWVkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGRTY29yZSh0aGlzLnByb3RvdHlwZS5zY29yZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWFjdGl2YXRlRW5lbWllcygpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb25cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0T25FbmVteU1ldGhvZCgpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAob25DbGlja0Z1bmN0aW9uOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmF0ZUVuZW1pZXMob25DbGlja0Z1bmN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRPbkhlcm9NZXRob2QoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gKG9uQ2xpY2tGdW5jdGlvbjogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWFjdGl2YXRlRW5lbWllcygpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmFjdGl2YXRlKG9uQ2xpY2tGdW5jdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5QWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5tYW5hKVxyXG4gICAgICAgICAgICB0aGlzLl9jYXJkLnR1cm5PbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhcmQudHVybk9mZigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWN0aXZhdGlvbkZ1bmN0aW9uLCBIZXJvUGVyayB9IGZyb20gXCIuL0hlcm9QZXJrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25FbmVteVBlcmsgZXh0ZW5kcyBIZXJvUGVyayB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T25FbmVteU1ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWN0aXZhdGlvbkZ1bmN0aW9uLCBIZXJvUGVyayB9IGZyb20gXCIuL0hlcm9QZXJrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25IZXJvUGVyayBleHRlbmRzIEhlcm9QZXJrIHtcclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPbkhlcm9NZXRob2QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcmtDYXJkIH0gZnJvbSBcIi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrIHtcclxuICAgIHByb3RlY3RlZCBfbWFuYTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGFuaW1hdGlvbj86IFBlcmtBbmltYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBwcm90ZWN0ZWQgb3duZXI6IEZpZ2h0ZXIsXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5hZGRNYW5hKDIwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5hKGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0TWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHRoaXMuZ2V0UmVhbE1hbmEoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLm1hbmEgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UmVhbE1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhcHBseUVmZmVjdCh0YXJnZXQ6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQmVBcHBsaWVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5tYW5hID0gMDtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZE1hbmEoLXRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUodGFyZ2V0LmdldENvb3JkcygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMub3duZXIsIHRoaXMuZ2FtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5vd25lciwgdGhpcy5nYW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuYWRkTG9nKHRoaXMub3duZXIsIHRhcmdldCwgdGhpcy5wcm90b3R5cGUuYWN0aW9uU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuQmVBcHBsaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmEgPj0gdGhpcy5wcm90b3R5cGUubWFuYSAmJiB0aGlzLm93bmVyLm1hbmEgPj0gdGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9pbnQge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbn0gXHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0FuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0YXJ0UG9pbnRIYW5kbGVyOiBHYW1lQ2FyZCxcclxuICAgICAgICBwcml2YXRlIGltYWdlc1BhdGhzOiBBcnJheTxzdHJpbmc+IFxyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlKGVuZHBvaW50OiBJUG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9yaWdpbmFsID0gJCgnLmFuaW1hdGlvbicpO1xyXG4gICAgICAgIGxldCAkYW5pbWF0aW9uID0gJG9yaWdpbmFsLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICRvcmlnaW5hbC5hZnRlcigkYW5pbWF0aW9uKTtcclxuICAgICAgICAkYW5pbWF0aW9uLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbWFnZXNQYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlUGF0aCA9IHRoaXMuaW1hZ2VzUGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLmF0dHIoJ3NyYycsIGltYWdlUGF0aCk7XHJcbiAgICAgICAgICAgICRhbmltYXRpb24ub2Zmc2V0KHsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLmxlZnQgKyAoZW5kcG9pbnQubGVmdCAtIHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkubGVmdCkgKiBpbmRleCAvICh0aGlzLmltYWdlc1BhdGhzLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkudG9wICsgKGVuZHBvaW50LnRvcCAtIHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkudG9wKSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDAgLyB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRhbmltYXRpb24ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIHByaXZhdGUgX29uY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcInBlcmsgbmFtZVwiLCBpbmZvID0gXCJpbmZvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBpbmZvKTtcclxuICAgICAgICAkKCcjaGVyby1tZW51JykuYXBwZW5kKHRoaXMuJGNhcmQpO1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIGluZm86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNwZXJrLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWluZm8nKS5odG1sKGluZm8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T25jbGljayhtZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc1dpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlYWxQZXJjZW50cyhwZXJjZW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAocGVyY2VudHMgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAocGVyY2VudHMgPiAxMDApIHJldHVybiAxMDA7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5wZXJrLWNhcmQnKS5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICAgICAgdGhpcy5fb25jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5hZGRDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJycpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIG1hbmE6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgZmlnaHRlck1hbmFEZW1hbmQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaW5mbzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBlZmZlY3Q6ICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyPzogRmlnaHRlciwgZ2FtZT86IEdhbWUpID0+IHZvaWQsXHJcbiAgICAgICAgcHVibGljIGZvclNlbGY6IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIGFjdGlvblN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzY29yZTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhbmltYXRpb25QYXRocz86IHN0cmluZ1tdXHJcbiAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7SGVyb1Byb3RvdHlwZX0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQge0ZpZ2h0ZXJQcm90b3R5cGV9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7UGVya1Byb3RvdHlwZX0gZnJvbSBcIi4uL1BlcmtzL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHtGaWdodGVyfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHtFbmVteX0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcbmltcG9ydCB7c3RvcmVKU09OfSBmcm9tIFwiLi4vTWFpbi9Qcm9ncmFtXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFN0b3JlIHtcclxuICAgIGVuZW1pZXNNYXhDb3VudDogbnVtYmVyLFxyXG4gICAgbWluQWRkRW5lbXlDaGFuY2U6IG51bWJlcixcclxuICAgIG1heEFkZEVuZW15Q2hhbmNlOiBudW1iZXIsXHJcbiAgICBtb3Zlc1RvV2lubmluZzogbnVtYmVyLFxyXG4gICAgc3RhcnRFbmVteUNvdW50OiBudW1iZXIsXHJcbiAgICBlbmVteU1vdmVDaGFuY2U6IG51bWJlcixcclxuICAgIGRpZWRMb2c6IHN0cmluZyxcclxuICAgIGhlcm9lczogSGVyb1Byb3RvdHlwZVtdLFxyXG4gICAgZW5lbWllczogRmlnaHRlclByb3RvdHlwZVtdLFxyXG4gICAgcGVya3M6IFBlcmtQcm90b3R5cGVbXVxyXG59XHJcblxyXG4vLyBleHBvcnQgbGV0IHN0b3JlOiBTdG9yZSA9IHtcclxuLy8gICAgIGVuZW1pZXNNYXhDb3VudDogc3RvcmVKU09OLmVuZW1pZXNNYXhDb3VudCxcclxuLy8gICAgIG1pbkFkZEVuZW15Q2hhbmNlOiBzdG9yZUpTT04ubWluQWRkRW5lbXlDaGFuY2UsXHJcbi8vICAgICBtYXhBZGRFbmVteUNoYW5jZTogc3RvcmVKU09OLm1heEFkZEVuZW15Q2hhbmNlLFxyXG4vLyAgICAgbW92ZXNUb1dpbm5pbmc6IHN0b3JlSlNPTi5tb3Zlc1RvV2lubmluZyxcclxuLy8gICAgIHN0YXJ0RW5lbXlDb3VudDogc3RvcmVKU09OLnN0YXJ0RW5lbXlDb3VudCxcclxuLy8gICAgIGVuZW15TW92ZUNoYW5jZTogc3RvcmVKU09OLmVuZW15TW92ZUNoYW5jZSxcclxuLy8gICAgIGRpZWRMb2c6IHN0b3JlSlNPTi5kaWVkTG9nLFxyXG4vLyAgICAgaGVyb2VzOiBzdG9yZUpTT04uaGVyb2VzLm1hcCgoanNvbkhlcm8pID0+IHBhcnNlSGVybyhqc29uSGVybykpLFxyXG4vLyAgICAgZW5lbWllczogc3RvcmVKU09OLmVuZW1pZXMsXHJcbi8vICAgICBwZXJrczogc3RvcmVKU09OLnBlcmtzLm1hcCgoanNvblBlcmspID0+IHBhcnNlUGVyayhqc29uUGVyaykpXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSGVybyhqc29uOiBhbnkpOiBIZXJvUHJvdG90eXBlIHtcclxuICAgIHJldHVybiBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICBqc29uLmlkLFxyXG4gICAgICAgIGpzb24ubmFtZSxcclxuICAgICAgICBqc29uLmhwLFxyXG4gICAgICAgIGpzb24ubWFuYSxcclxuICAgICAgICBqc29uLnNraWxscyxcclxuICAgICAgICBqc29uLm1vdHRvLFxyXG4gICAgICAgIGpzb24uZmlyc3REZXNjcmlwdGlvbixcclxuICAgICAgICBqc29uLnNlY29uZERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGpzb24uYW5zd2VyLFxyXG4gICAgICAgICgkY2FyZCkgPT4geyBGdW5jdGlvbignJGNhcmQnLCBqc29uLnJlYWN0aW9uKSgkY2FyZCkgfVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBlcmsoanNvbjogYW55KTogUGVya1Byb3RvdHlwZSB7XHJcbiAgICByZXR1cm4gbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAganNvbi5pZCxcclxuICAgICAgICBqc29uLm5hbWUsXHJcbiAgICAgICAganNvbi5tYW5hLFxyXG4gICAgICAgIGpzb24uZmlnaHRlck1hbmFEZW1hbmQsXHJcbiAgICAgICAganNvbi5pbmZvLFxyXG4gICAgICAgICh0YXJnZXQsIG93bmVyLCBnYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIEZ1bmN0aW9uKCd0YXJnZXQsIG93bmVyJywgJ2dhbWUnLCBqc29uLmVmZmVjdCkoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzb24uZm9yU2VsZixcclxuICAgICAgICBqc29uLmFjdGlvblN0cmluZyxcclxuICAgICAgICBqc29uLnNjb3JlLFxyXG4gICAgICAgIGpzb24uY291bnRPZkltYWdlcyAhPSBudWxsID8gVXRpbC5nZXRJbWFnZXNQYXRocyhqc29uLmlkLCBqc29uLmNvdW50T2ZJbWFnZXMpIDogbnVsbFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlOiBTdG9yZSA9IHtcclxuICAgIGVuZW1pZXNNYXhDb3VudDogMTIsXHJcbiAgICBtaW5BZGRFbmVteUNoYW5jZTogMTUsXHJcbiAgICBtYXhBZGRFbmVteUNoYW5jZTogMzUsXHJcbiAgICBtb3Zlc1RvV2lubmluZzogNDAsXHJcbiAgICBzdGFydEVuZW15Q291bnQ6IDEsXHJcbiAgICBlbmVteU1vdmVDaGFuY2U6IDc1LFxyXG4gICAgZGllZExvZzogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qv9C+0LPQuNCxLjwvc3Bhbj4gUHJlc3MgRiB0byBwYXkgcmVzcGVjdCcsXHJcbiAgICBoZXJvZXM6IFtcclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Ca0YPQutGD0LzQsdC10YAnLFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLFxyXG4gICAgICAgICAgICAn0JLRgdC10YUg0LfQsNC60YPQutGD0LzQsdGA0Y4hJyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQv9GD0L/Ri9GA0YfQsNGC0YvQuSwg0LvRjtCx0LjRgiwg0LrQvtCz0LTQsCDQtdCz0L4g0LrRg9GB0LDRjtGCJyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9Cl0L7RhdC+LCDRhdC10YXQtdC5ISDQryDRgtC10LHRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LDQutGD0LrRg9C80LHRgNGOPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctc3VjY2VzcyB0ZXh0LXdoaXRlXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwic3BhblwiKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKFwidGV4dC1kYXJrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICfQn9C+0LzQuNC00L7RgNC40YPRgScsXHJcbiAgICAgICAgICAgIDc1MCxcclxuICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAn0JTRi9C90YfRg9C90LTRg9C6JyxcclxuICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgIFswLCAzLCA2LCA4XSxcclxuICAgICAgICAgICAgJ9Ca0LDQuiDRjyDRgdGO0LTQsCDQv9C+0L/QsNC7JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+0JbRkdC70YLRi9C5PC9zcGFuPiwg0L/QvtC/0LDQuyDRgdGO0LTQsCDRgdC70YPRh9Cw0LnQvdC+JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAn0JzQvtC70Y4g0YLQtdCx0Y8hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCIudGV4dC13YXJuaW5nXCIpLnJlbW92ZUNsYXNzKFwidGV4dC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC1saWdodFwiPtCe0LPRg9GA0YbQsNC9PC9zcGFuPicsXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBbMCwgMywgNSwgN10sXHJcbiAgICAgICAgICAgICfQn9GD0LzQv9GD0YDRg9C80L/Rg9C8JyxcclxuICAgICAgICAgICAgJ9Cd0LUg0L/Rg9GC0LDRgtGMINGBINCa0YPQutGD0LzQsdC10YDQvtC8IScsXHJcbiAgICAgICAgICAgICfQotC+0LbQtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L3QviDQvdC1INCa0YPQutGD0LzQsdC10YAhJyxcclxuICAgICAgICAgICAgJ9Cd0LUg0LLQt9C00YPQvNCw0Lkg0YHQutCw0LfQsNGC0YwsINGH0YLQviDRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCa0YPQutGD0LzQsdC10YA8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgJ9CQ0YDQsdGD0LfQvtC9JyxcclxuICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAyLCAzLCA2XSxcclxuICAgICAgICAgICAgJ9Cf0YjQv9GI0L/RiNC/JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0LkgPGI+0LHQvtC70YzRiNC+0Lk8L2I+JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0Lkg0YHQv9C10LvRi9C5JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0KHRitC10YjRjCDQvNC10L3Rjz88L3NwYW4+J1xyXG4gICAgICAgIClcclxuICAgIF0sXHJcbiAgICBlbmVtaWVzOiBbXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQoNC10LTQuNGB0L7QvScsXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QndC10L3QsNCy0LjQttGDITwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9CR0LDQutC70LDQttGD0L0nLFxyXG4gICAgICAgICAgICA0MDAsXHJcbiAgICAgICAgICAgIDgwLFxyXG4gICAgICAgICAgICBbMCwgMSwgNSwgN10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Ci0L7QvNCw0YLRg9GBJyxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAxLCA1XSxcclxuICAgICAgICAgICAgJ9Cj0L/RhCdcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0KLRi9C60LLQuNC9JyxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAxLCA0XSxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlclwiPtCV0YXQtdGF0LXQtdGF0LXRhTwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgIF0sXHJcbiAgICBwZXJrczogW1xyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0J/RgNC+0L/Rg9GB0Log0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/RgNC+0L/Rg9GB0YLQuNC7INGF0L7QtCcsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJ9CS0LfRgNGL0LInLFxyXG4gICAgICAgICAgICAzMCxcclxuICAgICAgICAgICAgMjAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QtNC90L7Qs9C+INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTEwMClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQt9GA0YvQstC+0Lwg0L/QvicsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDEsIDI1KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAn0JzQvtC70L3QuNGPJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINCy0YHQtdGFJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvd25lciBpbnN0YW5jZW9mIEVuZW15KVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4gKGVuZW15LmFkZEhwKDEwKSkpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoLTcwKSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQvNC+0LvQvdC40LXQuSDQv9C+INCy0YHQtdC8LCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQv9C+JyxcclxuICAgICAgICAgICAgMTIwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDIsIDYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICfQm9C10YfQtdC90LjQtScsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgJ9Cd0LjQutC+0LPQviDQvdC1INC/0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIF86IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgyNTApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/QvtC00LvQtdGH0LjQu9GB0Y8g0LvQtdGH0LXQvdC40LXQvCcsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDMsIDEzKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAn0JbQtdGA0YLQstCwJyxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1hbmEoMTUwKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtMzApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/RgNC10LTQv9GA0LjQvdGP0Lsg0L/QvtC/0YvRgtC60YMg0YHRg9C40YbQuNC00LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjQuyDQvNCw0L3QvdGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNCwgMjApXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC20LjQt9C90LgnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgMjAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLQviDQsdC70LDQs9C+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZEhwKC10YXJnZXQuYWRkSHAoLTc1KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAn0YPQutGA0LDQuyDQt9C00L7RgNC+0LLRjNC1INGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNSwgOSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgJ9CS0LjRhdGA0YwnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDcwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC+0LrRgNGD0LbQtdC90LjQtSDQstGA0LDQs9CwJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IDxFbmVteT50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5hZGRIcCgtMjAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGdhbWUuZW5lbWllcy5pbmRleE9mKGVuZW15KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIGdhbWUuZW5lbWllc1tpbmRleCAtIDFdLmFkZEhwKC0xMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgZ2FtZS5lbmVtaWVzLmxlbmd0aCAtIDEpIGdhbWUuZW5lbWllc1tpbmRleCArIDFdLmFkZEhwKC0xMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQstC40YXRgNC10Lwg0L/QviDRgdC+0YHQtdC00Y/QvCwg0LTQsCDQuCDQv9C+INGB0LDQvNC+0LzRgycsXHJcbiAgICAgICAgICAgIDEyMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg2LCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LzQsNC90YsnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4nLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtdGFyZ2V0LmFkZE1hbmEoLTEwMCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LzQsNC90YMg0YMnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg3LCAyNilcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgJ9CR0L7Qu9GM0YjQvtC5INC4INCz0LvRg9C/0YvQuSDQstGA0LXQtCDRgdC10LHQtScsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICco0YLQtdGB0YLQvtCy0L7QtSknLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkSHAoLTMwMCk7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRNYW5hKC0zMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L7Rh9C10L3RjCDQs9C70YPQv9GL0LknLFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApXHJcbiAgICBdXHJcbn07Il19
