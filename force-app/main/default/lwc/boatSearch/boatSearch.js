import { LightningElement } from 'lwc';

export default class BoatSearch extends LightningElement {
    isLoading = false;
    boatTypeId;
    // Handles loading event
    handleLoading() { 
      this.isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() { 
      this.isLoading = false;
    }
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
      //alert('handling event in the parent boatSearch' + event.detail);      
      this.boatTypeId = event.detail;
      //this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId);
     }
    
    createNewBoat() {
      alert("Create New Boat");
     }
  }