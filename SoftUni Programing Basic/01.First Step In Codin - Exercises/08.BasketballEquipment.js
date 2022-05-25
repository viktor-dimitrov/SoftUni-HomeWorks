function basketballEquipment(input){
    const yearTax = Number(input[0])
    const sneakersPrice = yearTax - (yearTax * 0.4);
    const equipmentPrice = sneakersPrice - (sneakersPrice * 0.2);
    const ballPrice = equipmentPrice * 0.25;
    const accPrice = ballPrice * 0.2;
    const totalPrice = yearTax + sneakersPrice + equipmentPrice + ballPrice + accPrice;
    console.log (totalPrice); 



}
basketballEquipment (["550"])