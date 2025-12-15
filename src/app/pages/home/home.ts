import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { BubbleButton } from "../../components/bubble-button/bubble-button";

@Component({
  selector: 'app-home',
  imports: [Card, BubbleButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}
