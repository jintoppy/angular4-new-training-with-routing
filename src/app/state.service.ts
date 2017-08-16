import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private states = [
    'Delhi',
    'Karnataka',
    'Kerala',
    'TamilNadu',
    'Andhra Pradesh'
  ];
  constructor() { }

  getStates(){ 
    return this.states;
  }

  getFilteredStates(query: string){
    return this.states.filter(state => {
      return state.toLowerCase().startsWith(query.toLowerCase());
    });
  }

}
