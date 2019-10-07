const attacks = [
    {minChance: 7, damage: 40, name: 'critical'},
    {minChance: 5, damage: 20, name: 'big'},
    {minChance: 0, damage: 10, name: 'weak'},
];

const messages = {
    start: (player, enemy) => `Welcome! Your health is - ${player}%, enemy health - ${enemy}%`,
    end: (player, enemy) => `You ${enemy <= 0 ? 'win' : 'lost'}! Your hp level - ${player}, opponents hp level - ${enemy}`,
    chance: (player, enemy) => `your chance - ${player}, your opponent chance - ${enemy}`,
    turn: (player, enemy, hit, isEnemy) =>
        `${isEnemy ? 'Enemy' : 'Your'} turn...
        ${isEnemy ? 'Enemy' : 'You'} did a ${hit} hit
        ${isEnemy ? 'Your' : 'Enemy'} hp - ${isEnemy ? player : enemy}`
};

const simpleFight = () => {
    let player_hp = 100;
    let enemy_hp = 100;

    console.log(messages.start(player_hp, enemy_hp));

    while (player_hp > 0 && enemy_hp > 0) {
        const player_chance = Math.floor(Math.random() * 11) ;
        const enemy_chance = Math.floor(Math.random() * 11) ;

        console.log(messages.chance(player_chance, enemy_chance));

        if (player_chance !== enemy_chance) {
            const chance = Math.max(player_chance, enemy_chance);
            const attack = attacks.find(n => n.minChance < chance);
            const isEnemyAttacks = chance === enemy_chance;

            if (isEnemyAttacks) {
                player_hp -= attack.damage;
            } else {
                enemy_hp -= attack.damage;
            }
            console.log(messages.turn(player_hp, enemy_hp, attack.name, isEnemyAttacks));
        }
    }
    console.log(messages.end(player_hp, enemy_hp));
};

simpleFight();