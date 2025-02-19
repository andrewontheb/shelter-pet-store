import { makeAutoObservable, autorun, runInAction } from "mobx";
import { RootStore } from "./RootStore";
import { ICardStatus } from "../interfaces/Interfaces";
import { IPet } from '../interfaces/Interfaces';

export class PetStore {
  rootStore: RootStore;
  pets: IPet[] | null = null;
  error: string | null = null;
  filter: ICardStatus = 'all';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    autorun(() => {
      if (this.pets === null) {
        this.fetchData();
      }
    });
  }

  async deletePet(id: number) {
    if (!id) {
      console.error('Pet ID is missing');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5050/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Failed to delete pet');
      }
      runInAction(() => {
        this.pets = this.pets.filter(pet => pet._id !== id);
      });
      return Promise.resolve(true);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async addPet(pet: IPet) {
    try {
      const response = await fetch('http://localhost:5050/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
      });

      if (!response.ok) {
        console.error('Failed to add pet');
      }
      const result = await response.json();
      pet._id = result.insertedId;
      runInAction(() => {
        this.pets.push(pet);
      });
      return Promise.resolve('Pet added');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  setFilter(status: ICardStatus) {
    this.filter = status;
  }

  get filteredPets(): IPet[] | null {
    let result: IPet[] | null = null;
    if (!this.filter || this.filter === 'all') {
      return this.pets;
    } else {
      result = this.pets?.filter((pet) => pet.status === this.filter);
    }
    return result;
  }

  async filterPets(status: string) {
    this.error = null;
    try {
      const response = await fetch(`http://localhost:5050/pets?status=${status}`);
      const result = await response.json();
      runInAction(() => {
        this.pets = result;
      });
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;
      });
    }
  }

  async fetchData() {
    this.error = null;
    try {
      console.log('fetching data');
      const response = await fetch("http://localhost:5050/pets");
      const result = await response.json();
      runInAction(() => {
        this.pets = result;
      });
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;
      });
    }
  }
}