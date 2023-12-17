import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {

  joke?: any;

  constructor(private jokeService: JokeService){}
 
  ngOnInit() {
    this.getTheJoke();
  }

  getTheJoke(){
    this.jokeService.getJoke().subscribe(
      (data)=>{
        this.joke = data;
      }
    )
  }

  

 inventory:Item[] = [

  {
    "id":1,
    "name": "Burger",
    "inStock": 5,
    "price": 4.00,
    "image": "/assets/images/Burger.jpg",
    "featured": false,
    "qty": 0,
  },

  {
    "id":2,
    "name": "Fries",
    "inStock": 5,
    "price": 3.00,
    "image": "/assets/images/fries.jpg",
    "featured": false,
    "qty": 0,
  },

  {
    "id":3,
    "name": "Soda",
    "inStock": 5,
    "price": 1.50,
    "image": "/assets/images/soda.jpg",
    "featured": false,
    "qty": 0,
  },

  {
    "id":4,
    "name": "Batteries",
    "inStock": 20,
    "price": 6.00,
    "image": "/assets/images/batteries.jpg",
    "featured": false,
    "qty": 0,
  }

 ]

 //function

 decreaseQty(inventory : any){
  if(inventory.qty != 0 && inventory.qty > 0){
    inventory.qty --;
  } 
 }

 increaseQty(inventory : any){
  if(inventory.qty < inventory.inStock){
    inventory.qty ++;
  }
}

qtyCount(){
  let sum = 0;
  for(let x = 0; x < this.inventory.length; x++){
    sum += this.inventory[x].qty
  }
  return sum;
}

subtotal(){
  let sum = 0;
  for(let x = 0; x < this.inventory.length; x++){
    sum += this.inventory[x].price * this.inventory[x].qty
  }
  return sum;
}

taxTotal(){
  let sum = 0;
  for(let x = 0; x < this.inventory.length; x++){
    sum += this.inventory[x].price * this.inventory[x].qty * 1.1
  }
  return sum;
}

}
