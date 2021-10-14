import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AppService } from './app.service';

export interface Model {
  title: string;
  poster: string;
}

export interface DraggableComponent {
  id: number;
  title: string;
  properties: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DragDropPOC';
  dragComponents: DraggableComponent[] = [];
  
  dropComponents: DraggableComponent[] = [];

  constructor(private appService: AppService) {
    this.appService.getListofComponents().subscribe(data => {
      this.dragComponents = data;
    })
  }

  ngOnInit() {
    
  }

  drop(event: CdkDragDrop<DraggableComponent[]>) {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}
