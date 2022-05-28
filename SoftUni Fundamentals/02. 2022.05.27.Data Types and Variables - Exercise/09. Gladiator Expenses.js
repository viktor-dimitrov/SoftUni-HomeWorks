function gladiatorExpenses (lostsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetDamage = 0;
    let swordDamage = 0;
    let shieladDamage = 0;
    let armorDamage = 0;
    let tempShieldDamage = 0;

    for (let i = 1; i <= lostsCount; i++) {
        
        if(i % 2 == 0 ) {
            helmetDamage ++;
        }
        if(i % 3 == 0) {
            swordDamage ++;
        }
        if(i % 2 == 0 && i % 3 == 0) {
            shieladDamage ++;
            
        }
        if(shieladDamage % 2 == 0 && shieladDamage != 0 && i % 2 == 0 && i % 3 == 0) {
            armorDamage ++;
        }
        
    }

    let totalPrice = (helmetDamage * helmetPrice) + (swordDamage * swordPrice) + (shieladDamage * shieldPrice) + (armorDamage * armorPrice);

   console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
gladiatorExpenses (23,
    12.50,
    21.50,
    40,
    200)