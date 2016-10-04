(function() {
  'use strict';
  angular.module("ShoppingListCheckOff",[]).
  controller("ToBuyController", ToBuyController).
  controller("AlreadyBoughtController", AlreadyBoughtController).
  service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var vm = this;
    vm.bought = function(index){
      ShoppingListCheckOffService.setBoughtItem(index);
    }
    vm.items = ShoppingListCheckOffService.getToBuy();
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var vm = this;
    vm.items = ShoppingListCheckOffService.getBought()
  }



  ShoppingListCheckOffService.$inject = [];
  function ShoppingListCheckOffService()
  {
    var service = this;
    var toBuy = [{qty:10,thing:'cookies'},
                 {qty:10,thing:'bananas'},
                 {qty:8, thing:'dr peppers'}];
    var bought = [];

    service.getBought = function (){
      return bought;
    }
    service.getToBuy = function (){
      return toBuy;
    }
    service.setBoughtItem = function (index){
      bought.push(toBuy.splice(index,1)[0]);
    }
  }

}());
