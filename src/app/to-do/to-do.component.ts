import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  inputField = ""
  disable = true
  todolist = [""]
  temp = false

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.temp = true
    this.todolist.push(this.inputField)
  }

  onKey(event:any){
    if(this.inputField !== ''){
      this.disable = false
    }
    else{
      this.disable = true
    }
  }

  remove(li:any, id:any){
    this.todolist.splice(id,1)
}

}
