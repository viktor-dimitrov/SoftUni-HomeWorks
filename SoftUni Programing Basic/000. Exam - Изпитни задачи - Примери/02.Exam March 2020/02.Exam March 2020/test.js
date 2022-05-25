function hotelRoom(input) {
  const month = input[0];
  const numberOfDays = Number(input[1]);
 
  const priceForStudioMayAndOctober = 50;
  const priceForAppartmentMayAndOctober = 65;
  const priceForStudioJuneAndSeptember = 75.20;
  const priceForAppartmentJuneAndSeptember = 68.70;
  const priceForStudioJulyAndAugust = 76;
  const priceForAppartmentJulyAndAugust = 77;
 
  let totalPriceForStudio = 0;
  let totalPriceForAppartment = 0;
 
  switch (month) {
    case "May":
    case "October":
      totalPriceForStudio = (numberOfDays) * priceForStudioMayAndOctober;
      totalPriceForAppartment =(numberOfDays) * priceForAppartmentMayAndOctober;

 
      if (numberOfDays > 7&&numberOfDays<14) {
        totalPriceForStudio *=0.95;
      } else if (numberOfDays > 14) {
        totalPriceForStudio *= 0.70;
      }

      break;

    case "July":
    case "August":
      totalPriceForStudio = (numberOfDays - 1) * priceForStudioJulyAndAugust;
      totalPriceForAppartment =(numberOfDays - 1) * priceForAppartmentJulyAndAugust;
        break;
 
    case "September":
    case "June":
      totalPriceForStudio = (numberOfDays - 1) * priceForStudioJuneAndSeptember;
      totalPriceForAppartment =(numberOfDays - 1) * priceForAppartmentJuneAndSeptember;
      if (numberOfDays > 14) {
        totalPriceForStudio *= 0.80;
      }      break;
  }  if (numberOfDays > 14) {
    totalPriceForAppartment *= 0.90;
  }



  console.log(`Apartment: ${totalPriceForAppartment.toFixed(2)} lv.`);
  console.log(`Studio ${totalPriceForStudio.toFixed(2)} lv.`);
 
 
}
hotelRoom(["May", "15"]);
