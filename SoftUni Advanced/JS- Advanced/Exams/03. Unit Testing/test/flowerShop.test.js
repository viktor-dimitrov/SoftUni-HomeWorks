const flowerShop = require("../flowerShop");

const {expect} = require('chai');
const {assert} = require('chai');

describe('Testin flowerShop methods', ()=>{
    describe('Testing .calcPriceOfFlowers(flower, price, quantity)', ()=> {
        it (`Testing parameters type`, ()=>{
            assert.throw(()=>flowerShop.calcPriceOfFlowers(5 , 5, 5), 'Invalid input!');
            assert.throw(()=>flowerShop.calcPriceOfFlowers( 'tulips', '1', 5), 'Invalid input!');
            assert.throw(()=>flowerShop.calcPriceOfFlowers( 'tulips', 1, '5'), 'Invalid input!');
            assert.throw(()=>flowerShop.calcPriceOfFlowers( 'tulips', 1.3, 5), 'Invalid input!');
            assert.throw(()=>flowerShop.calcPriceOfFlowers( 'tulips', 1, 5.3), 'Invalid input!');
        })
        it (`Testing result`, ()=>{
           
            assert.equal(flowerShop.calcPriceOfFlowers( 'tulips', 1, 5), 'You need $5.00 to buy tulips!');
            assert.equal(flowerShop.calcPriceOfFlowers( 'tulips', 5, 5), 'You need $25.00 to buy tulips!');
        })
    })
    describe('Testing .checkFlowersAvailable(flower, gardenArr)', ()=>{
        it ('Test for index', ()=>{
            assert.equal(flowerShop.checkFlowersAvailable('Roses',["Tulips","Roses"]), `The Roses are available!`);
            assert.equal(flowerShop.checkFlowersAvailable('Roses',["Tulips",]), `The Roses are sold! You need to purchase more!`);
        })
    })

    describe('Testing .sellFlowers(gardenArr, space)', ()=>{
        it ('Test parameters', ()=>{

            assert.throw(()=>flowerShop.sellFlowers("Tulips, Roses", 1), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(["Tulips", "Roses"], 2), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(["Tulips", "Roses"], 3), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(["Tulips", "Roses"], -2), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(["Tulips", "Roses"], 0.5), "Invalid input!");

            let gardenArr = ["Tulips", "Roses","Lily"]
            let space = 2;
            let result = flowerShop.sellFlowers(gardenArr, space)

            expect(result).to.be.equal('Tulips / Roses') ;
            //assert.equal(flowerShop.checkFlowersAvailable('Roses',["Tulips",]), `The Roses are sold! You need to purchase more!`);
        })
    })


  
})