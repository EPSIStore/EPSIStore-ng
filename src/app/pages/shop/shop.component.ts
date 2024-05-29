import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../core/services/price.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  produits: any;

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
      this.produits = this.priceService.getProducts()   
  }
  
  products = [
    {
      name: 'Produit 1',
      price: '200',
      description: 'Description du produit 1',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 2',
      price: '200',
      description: 'Description du produit 2',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 3',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 4',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 5',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 6',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 7',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 8',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 9',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    },
    {
      name: 'Produit 10',
      price: '200',
      description: 'Description du produit 3',
      image: "../../../assets/images/airpods.png"
    }

  ];

}
